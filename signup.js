/* Official Constant Contact inline form, loaded only when a visitor opens it.
   Constant Contact handles consent and submission; this site does not forward contacts. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.FrankSignup = api; api.init(document, root); }
})(typeof window === 'undefined' ? globalThis : window, function () {
  const ACCOUNT = '67af319a464c98853f2641ea4e224e0c';
  const SCRIPT_URL = 'https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js';
  function init(doc, win) {
    const dock = doc.querySelector('#investor-dock');
    const dialog = doc.querySelector('#dock-dialog');
    const host = doc.querySelector('#guest-form-host');
    const close = doc.querySelector('#dock-close');
    const status = doc.querySelector('#guest-load-status');
    const retry = doc.querySelector('#guest-form-reload');
    const fallback = doc.querySelector('#guest-form-fallback');
    if (!dock || !dialog || !host || !close || !status || !retry || !fallback || typeof dialog.showModal !== 'function') return;
    let trigger, script, timer, observer, state = 'loading';
    const render = () => {
      status.hidden = state === 'ready';
      status.textContent = win.siteI18n?.t(`guest.${state === 'loading' ? 'loading' : 'unavailable'}`)
        || (state === 'loading' ? 'Loading signup form…' : 'The signup form could not load. Please email Frank or try again later.');
      fallback.hidden = !['error', 'slow'].includes(state);
      retry.hidden = state !== 'error';
      host.setAttribute('aria-busy', String(state === 'loading'));
    };
    function updateButton() {
      const button = host.querySelector('[data-qe-id="form-button"]');
      if (button) button.textContent = win.siteI18n?.t('guest.popupSubmit') || 'Connect with Frank';
    }
    function checkForm() {
      if (!host.querySelector('form')) return false;
      state = 'ready'; win.clearTimeout(timer); observer?.disconnect(); updateButton(); render();
      return true;
    }
    function load() {
      if (script || checkForm()) return;
      state = 'loading'; render();
      // Public account identifier and script from the provider's official embed code.
      win._ctct_m = ACCOUNT;
      observer = new win.MutationObserver(checkForm);
      observer.observe(host, { childList: true, subtree: true });
      script = doc.createElement('script');
      script.id = 'signupScript'; script.src = SCRIPT_URL; script.async = true; script.defer = true;
      script.addEventListener('error', () => {
        win.clearTimeout(timer); observer.disconnect(); script.remove(); script = null;
        state = 'error'; render();
      }, { once: true });
      // A loaded script alone does not prove the form rendered, much less a signup.
      timer = win.setTimeout(() => { if (!checkForm()) { state = 'slow'; render(); } }, 20000);
      doc.body.append(script);
    }
    doc.querySelectorAll('[data-guest-list]').forEach(link => link.addEventListener('click', event => {
      event.preventDefault(); trigger = event.currentTarget;
      if (!dialog.open) dialog.showModal();
      doc.body.classList.add('signup-dialog-open');
      close.focus({ preventScroll: true });
      load(); // Reopening never clears the provider form or an unfinished draft.
    }));
    retry.addEventListener('click', load);
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      doc.body.classList.remove('signup-dialog-open');
      if (trigger === doc.querySelector('#dock-open')) dock.hidden = false;
      const returnTarget = trigger?.getClientRects?.().length === 0 ? doc.querySelector('#menu-toggle') : trigger;
      returnTarget?.focus({ preventScroll: true });
    });
    const position = () => {
      const viewport = win.visualViewport;
      dialog.style.setProperty('--signup-height', `${viewport?.height || win.innerHeight}px`);
      dialog.style.setProperty('--signup-top', `${viewport?.offsetTop || 0}px`);
    };
    win.visualViewport?.addEventListener('resize', position);
    win.visualViewport?.addEventListener('scroll', position);
    win.addEventListener('resize', position);
    win.siteI18n?.onChange(() => { render(); updateButton(); });
    position(); render(); doc.body.classList.add('signup-ready');
  }
  return { ACCOUNT, SCRIPT_URL, init };
});
