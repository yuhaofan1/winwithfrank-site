/* Optional behavior analytics. Choices open only from the footer, never automatically.
   No recorder is requested before opt-in.
   Events contain fixed labels only; form values are never read here. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else api.init(document, root);
})(typeof window === 'undefined' ? globalThis : window, function () {
  const KEY = 'winwithfrank-analytics-v1';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  const SECTIONS = ['thesis', 'track-record', 'projects', 'investment-model', 'rewards', 'partnerships', 'employee-profit-share', 'investor-signup'];
  const words = {
    en: { title: 'Help improve this website', copy: 'Allow Microsoft Clarity to record page visits, time spent, clicks, scrolling and mouse movement? Form contents are masked.', allow: 'Allow analytics', deny: 'No thanks', close: 'Close', settings: 'Analytics choices', privacy: 'Privacy', on: 'Analytics is on.', off: 'Analytics is off.', signal: 'Your browser’s privacy signal keeps analytics off.', pending: 'Analytics is waiting for your choice.' },
    zh: { title: '帮助改进网站', copy: '是否允许 Microsoft Clarity 记录页面访问、停留时间、点击、滚动和鼠标移动？表单内容会被遮蔽。', allow: '允许分析', deny: '不，谢谢', close: '关闭', settings: '分析设置', privacy: '隐私说明', on: '分析已开启。', off: '分析已关闭。', signal: '浏览器的隐私设置已关闭分析。', pending: '等待您选择是否开启分析。' }
  };
  function readChoice(storage, now) {
    try {
      const value = JSON.parse(storage.getItem(KEY));
      if (value && ['granted', 'denied'].includes(value.choice) && Number.isFinite(value.at) && now >= value.at && now - value.at < MAX_AGE) return value.choice;
    } catch (_) { /* Storage may be unavailable. */ }
    return null;
  }
  function privacySignal(win) {
    return win.navigator.globalPrivacyControl === true || win.navigator.doNotTrack === '1' || win.doNotTrack === '1';
  }
  function engagementDelta(previous, now, lastActivity, visible) {
    return visible ? Math.max(0, Math.min(now - previous, 1000, lastActivity + 30000 - previous)) : 0;
  }
  function init(doc, win) {
    const project = doc.querySelector('meta[name="clarity-project-id"]')?.content || '';
    const banner = doc.querySelector('#analytics-banner');
    if (!banner) return;
    const allow = banner.querySelector('[data-analytics-allow]');
    const deny = banner.querySelector('[data-analytics-deny]');
    const close = banner.querySelector('[data-analytics-close]');
    const status = banner.querySelector('[data-analytics-status]');
    const settings = doc.querySelector('[data-analytics-settings]');
    let storage;
    try { storage = win.localStorage; } catch (_) { /* Still allow an in-page choice. */ }
    let choice = readChoice(storage, Date.now());
    let active = false, script = null, failed = false, timer = null;
    let total = 0, previous = 0, lastActivity = 0, returningFocus = null;
    const sent = new Set(), dwell = new Map();
    const sections = SECTIONS.map(id => doc.getElementById(id)).filter(Boolean);
    const production = ['winwithfrank.com', 'www.winwithfrank.com'].includes(win.location.hostname);
    const eligible = () => production && /^[a-z0-9]{6,20}$/.test(project) && !privacySignal(win);
    const permitted = () => eligible() && choice === 'granted';
    const call = (...args) => { if (typeof win.clarity === 'function') win.clarity(...args); };
    const event = (name, once = false) => {
      if (!active || !permitted() || (once && sent.has(name))) return;
      if (once) sent.add(name);
      call('event', name);
    };
    function render() {
      const lang = doc.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
      const text = words[lang];
      doc.querySelectorAll('[data-analytics-text]').forEach(el => { el.textContent = text[el.dataset.analyticsText]; });
      allow.disabled = !eligible();
      status.textContent = privacySignal(win) ? text.signal : choice === 'granted' ? text.on : choice === 'denied' ? text.off : text.pending;
      close.hidden = false;
    }
    function show(open, focus = false) {
      banner.hidden = !open;
      doc.documentElement.classList.toggle('analytics-choice-open', open);
      if (open && focus) { returningFocus = doc.activeElement; deny.focus({ preventScroll: true }); }
      if (!open && banner.contains(doc.activeElement)) {
        (returningFocus || settings)?.focus({ preventScroll: true });
        returningFocus = null;
      }
    }
    function tick() {
      const now = win.performance.now();
      if (!permitted()) { stop(); return; }
      const delta = engagementDelta(previous, now, lastActivity, doc.visibilityState === 'visible' && doc.hasFocus());
      previous = now;
      total += delta;
      [15, 30, 60, 120, 300].forEach(s => { if (total >= s * 1000) event(`engaged_${s}s`, true); });
      const viewport = win.innerHeight;
      let current = null, largest = 0;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const visible = Math.max(0, Math.min(viewport, rect.bottom) - Math.max(0, rect.top));
        if (visible > largest) { current = section; largest = visible; }
      });
      if (current && delta > 0) {
        const id = current.id.replaceAll('-', '_');
        event(`section_${id}`, true);
        const time = (dwell.get(id) || 0) + delta;
        dwell.set(id, time);
        [10, 30, 60].forEach(s => { if (time >= s * 1000) event(`section_${id}_${s}s`, true); });
      }
      const height = doc.documentElement.scrollHeight - viewport;
      if (height > 0) [25, 50, 75, 90].forEach(depth => {
        if (win.scrollY / height * 100 >= depth) event(`scroll_${depth}`, true);
      });
    }
    function stop() {
      active = false;
      win.clearInterval(timer); timer = null;
      if (script) {
        // Consent denial alone allows cookieless collection; stop the recorder too.
        call('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' });
        call('stop');
      }
    }
    function start() {
      if (!permitted() || active) return;
      active = true;
      previous = lastActivity = win.performance.now();
      if (!win.clarity) win.clarity = function () { (win.clarity.q = win.clarity.q || []).push(arguments); };
      if (script && !failed) call('start');
      call('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
      call('set', 'site_release', 'analytics_20261016');
      call('set', 'language', doc.documentElement.lang.startsWith('zh') ? 'zh' : 'en');
      if (!script || failed) {
        script?.remove(); failed = false;
        script = doc.createElement('script');
        script.src = `https://www.clarity.ms/tag/${project}`;
        script.async = true;
        script.referrerPolicy = 'strict-origin-when-cross-origin';
        script.onload = () => { if (!permitted()) stop(); };
        script.onerror = () => { failed = true; active = false; win.clearInterval(timer); };
        doc.head.append(script);
      }
      timer = win.setInterval(tick, 1000);
    }
    function choose(next) {
      choice = next;
      try { storage?.setItem(KEY, JSON.stringify({ choice, at: Date.now() })); } catch (_) { /* In-memory choice remains effective. */ }
      if (permitted()) start(); else stop();
      render(); show(false);
    }
    allow.addEventListener('click', () => { if (eligible()) choose('granted'); });
    deny.addEventListener('click', () => choose('denied'));
    close.addEventListener('click', () => show(false));
    settings?.addEventListener('click', () => { render(); show(true, true); });
    banner.addEventListener('keydown', e => { if (e.key === 'Escape') show(false); });
    win.addEventListener('storage', e => {
      if (e.key !== KEY && e.key !== null) return;
      choice = readChoice(storage, Date.now());
      if (permitted()) start(); else stop();
      render(); show(false);
    });
    ['pointerdown', 'pointermove', 'scroll', 'keydown', 'touchstart'].forEach(name => {
      win.addEventListener(name, () => { if (active) lastActivity = win.performance.now(); }, { passive: true });
    });
    // Reset the tick baseline on focus/visibility changes so background time is never added.
    doc.addEventListener('visibilitychange', () => { previous = win.performance.now(); });
    win.addEventListener('focus', () => { previous = lastActivity = win.performance.now(); });
    win.addEventListener('blur', () => { previous = win.performance.now(); });
    doc.addEventListener('click', e => {
      const target = e.target.closest?.('a,button,summary');
      if (!target || target.closest('#analytics-banner')) return;
      if (target.matches('[data-guest-list], #dock-open, a[href="#investor-signup-form"]')) {
        const place = target.closest('header') ? 'header' : target.closest('#thesis') ? 'hero' : target.closest('#investor-dock') ? 'dock' : 'page';
        event(`signup_open_${place}`);
      }
      if (target.matches('[data-copy-wechat]')) event('wechat_copy_click');
      if (target.matches('[data-copy-email], a[href^="mailto:"]')) event('email_contact_click');
      if (target.matches('[data-project-seek]')) event('project_watch_click');
      if (target.matches('[data-reel]')) event('video_chapter_click');
    });
    doc.addEventListener('focusin', e => {
      if (e.target.matches?.('input,textarea,select') && e.target.closest('#dock-dialog, #investor-signup-form, #deal-dialog')) event('form_started', true);
    });
    doc.addEventListener('submit', e => {
      if (e.target.closest('#dock-dialog, #investor-signup-form, #deal-dialog')) event('form_submit_attempt');
    }, true);
    doc.querySelector('#featured-video')?.addEventListener('play', () => event('project_video_play', true));
    doc.querySelector('#featured-video')?.addEventListener('ended', () => event('project_video_ended', true));
    doc.querySelector('#more-projects')?.addEventListener('toggle', e => { if (e.target.open) event('project_gallery_open'); });
    win.siteI18n?.onChange(() => {
      render();
      if (active && permitted()) { call('set', 'language', doc.documentElement.lang.startsWith('zh') ? 'zh' : 'en'); event('language_changed'); }
    });
    render();
    show(false);
    if (permitted()) start();
  }
  return { init, readChoice, privacySignal, engagementDelta, KEY, MAX_AGE };
});
