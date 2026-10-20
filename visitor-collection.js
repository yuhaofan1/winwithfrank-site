/* Retention collection is scoped to one explicitly allowed portfolio click. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else api.init(document, root);
})(typeof window === 'undefined' ? globalThis : window, function () {
  const KEY = 'wwf-portfolio-collection-v1';
  const TTL = 60000;
  function privacySignal(win) {
    return win.navigator.globalPrivacyControl === true || win.navigator.doNotTrack === '1' || win.doNotTrack === '1';
  }
  function validTicket(ticket, now) {
    return ticket && ticket.source === 'portfolio_view' && Number.isFinite(ticket.at) && now >= ticket.at && now - ticket.at <= TTL;
  }
  function init(doc, win) {
    if (!['winwithfrank.com', 'www.winwithfrank.com'].includes(win.location.hostname)) return;
    let storage;
    try { storage = win.sessionStorage; } catch (_) { return; }
    const link = doc.querySelector('a.welcome-projects[href="projects.html"]');
    if (link) {
      const dialog = doc.querySelector('#visitor-collection-choice');
      if (!dialog) return;
      let destination = null;
      function finish(allow) {
        if (!destination) return;
        storage.removeItem(KEY);
        if (allow && !privacySignal(win)) storage.setItem(KEY, JSON.stringify({source:'portfolio_view', at:Date.now()}));
        const href = destination;
        destination = null;
        dialog.close();
        win.location.assign(href);
      }
      link.addEventListener('click', e => {
        storage.removeItem(KEY);
        // Modified/new-tab navigation proceeds without collection.
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;
        if (privacySignal(win)) return;
        e.preventDefault();
        const next = new URL(link.href);
        const debug = new URLSearchParams(win.location.search || '');
        // Preserve only vendor debug flags for an explicit QA session.
        if (/^\d+$/.test(debug.get('gtm_debug') || '')) next.searchParams.set('gtm_debug', debug.get('gtm_debug'));
        if (debug.get('vge') === 'true') next.searchParams.set('vge', 'true');
        destination = next.href;
        const zh = doc.documentElement.lang.startsWith('zh');
        dialog.querySelector('[data-visitor-title]').textContent = zh ? '允许访客邮箱匹配？' : 'Allow visitor email matching?';
        dialog.querySelector('[data-visitor-copy]').textContent = zh ? '允许 Retention.com 通过 Google 跟踪代码管理器接收本次访问的浏览器和访问信息，并尝试匹配您的邮箱供 Frank 后续联系吗？这与 Clarity 分析单独管理。拒绝不影响浏览。' : 'Allow Retention.com, loaded through Google Tag Manager, to receive browser and visit information for this visit and attempt to match your email for follow-up from Frank? This is separate from Clarity analytics. You can browse without allowing it.';
        dialog.querySelector('[data-visitor-allow]').textContent = zh ? '允许并查看' : 'Allow & view';
        dialog.querySelector('[data-visitor-deny]').textContent = zh ? '不允许，继续浏览' : 'View without matching';
        dialog.showModal();
        dialog.querySelector('[data-visitor-deny]').focus();
      });
      dialog.querySelector('[data-visitor-allow]').addEventListener('click', () => finish(true));
      dialog.querySelector('[data-visitor-deny]').addEventListener('click', () => finish(false));
      dialog.addEventListener('cancel', e => { e.preventDefault(); finish(false); });
      return;
    }
    if (win.location.pathname !== '/projects.html') return;
    let ticket;
    try { ticket = JSON.parse(storage.getItem(KEY)); } catch (_) { /* Invalid tickets fail closed. */ }
    storage.removeItem(KEY); // One use: reload and direct visits never repeat collection.
    if (!validTicket(ticket, Date.now()) || privacySignal(win)) return;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({'gtm.start':Date.now(), event:'gtm.js'});
    win.dataLayer.push({event:'portfolio_view_allowed', collection_source:'left_portfolio_view'});
    const script = doc.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K9VHHGFL';
    doc.head.append(script);
  }
  return {init, validTicket, privacySignal, KEY, TTL};
});
