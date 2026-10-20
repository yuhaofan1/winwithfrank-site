/* Retention collection is scoped to one portfolio click. */
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
      link.addEventListener('click', e => {
        try { storage.removeItem(KEY); } catch (_) { return; }
        // Modified/new-tab navigation proceeds without collection.
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented || privacySignal(win)) return;
        try { storage.setItem(KEY, JSON.stringify({source:'portfolio_view', at:Date.now()})); } catch (_) { return; }
        const next = new URL(link.href);
        const debug = new URLSearchParams(win.location.search || '');
        // Preserve only vendor debug flags for an explicit QA session.
        if (/^\d+$/.test(debug.get('gtm_debug') || '')) next.searchParams.set('gtm_debug', debug.get('gtm_debug'));
        if (debug.get('vge') === 'true') next.searchParams.set('vge', 'true');
        if (next.href !== link.href) {
          e.preventDefault();
          win.location.assign(next.href);
        }
      });
      return;
    }
    if (win.location.pathname !== '/projects.html') return;
    let ticket;
    try { ticket = JSON.parse(storage.getItem(KEY)); } catch (_) { /* Invalid tickets fail closed. */ }
    storage.removeItem(KEY); // One use: reload and direct visits never repeat collection.
    if (!validTicket(ticket, Date.now()) || privacySignal(win)) return;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({'gtm.start':Date.now(), event:'gtm.js'});
    win.dataLayer.push({event:'portfolio_view_click', collection_source:'left_portfolio_view'});
    const script = doc.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K9VHHGFL';
    doc.head.append(script);
  }
  return {init, validTicket, privacySignal, KEY, TTL};
});
