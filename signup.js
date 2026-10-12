/* Public write-only intake; contact records are private to Frank's SiteFlow workspace. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.FrankSignup = api; api.init(document, root); }
})(typeof window === 'undefined' ? globalThis : window, function () {
  const ENDPOINT = 'https://siteflow.moo-siteflow.workers.dev/api/investor-signups/public';
  function createPayload({ name = '', email = '', consent = false, language = 'en', website = '' }) {
    name = String(name).trim(); email = String(email).trim();
    if (consent !== true || name.length > 80 || email.length > 254 || /[\x00-\x1f\x7f]/.test(name + email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
    return { name, email, consent: true, language: language === 'zh' ? 'zh' : 'en', website: String(website) };
  }
  async function submitSignup(payload, fetcher, signal) {
    const response = await fetcher(ENDPOINT, {
      method: 'POST', mode: 'cors', credentials: 'omit', referrerPolicy: 'no-referrer',
      headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal
    });
    const data = await response.json().catch(() => null);
    if (!response.ok || data?.ok !== true) { const error = new Error('Signup was not confirmed'); error.status = response.status; throw error; }
  }

  function init(doc, win) {
    doc.querySelectorAll('[data-investor-signup]').forEach(form => initForm(form, win));
    const dock = doc.querySelector('#investor-dock');
    const dialog = doc.querySelector('#dock-dialog');
    if (!dock || !dialog || typeof dialog.showModal !== 'function') return;
    const close = doc.querySelector('#dock-close');
    let trigger;
    const open = event => {
      event.preventDefault(); trigger = event.currentTarget;
      if (!dialog.open) dialog.showModal();
      doc.body.classList.add('signup-dialog-open');
      // Focus the close control first so opening the sheet does not immediately
      // launch the phone keyboard and obscure the consent and explanation.
      close.focus({ preventScroll: true });
    };
    doc.querySelector('#dock-open').addEventListener('click', open);
    doc.querySelectorAll('a[href="#investor-signup-form"]').forEach(link => link.addEventListener('click', open));
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
    position();
    doc.body.classList.add('signup-ready');
  }

  function initForm(form, win) {
    const name = form.querySelector('[name="name"]'), email = form.querySelector('[name="email"]');
    const consent = form.querySelector('[name="consent"]'), honeypot = form.querySelector('[name="website"]');
    const button = form.querySelector('.signup-submit'), status = form.querySelector('.signup-status');
    const fallback = form.querySelector('[data-signup-fallback]');
    const submitLabel = button.textContent;
    let state = '', busy = false;
    const defaults = { submit: 'Send me investment opportunities →', submitting: 'Saving your signup…', success: 'Thank you! Your request has been received. If you previously opted out, contact Frank to rejoin.', error: 'We couldn’t confirm your signup. Please try again, or email Frank below.', limited: 'Too many attempts. Please try again later, or email Frank below.' };
    const t = key => win.siteI18n?.t(`signup.${key}`) || defaults[key];
    function render() {
      status.textContent = state ? t(state) : '';
      status.hidden = !state; status.dataset.state = state;
      fallback.hidden = !['error', 'limited'].includes(state);
      button.textContent = busy ? t('submitting') : (button.dataset.signupLabel ? win.siteI18n?.t(button.dataset.signupLabel) || submitLabel : t('submit'));
      button.disabled = busy || state === 'success';
      form.setAttribute('aria-busy', String(busy));
    }
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (busy || state === 'success') return;
      email.value = email.value.trim();
      if (!form.reportValidity()) return;
      const payload = createPayload({ name: name?.value || '', email: email.value, consent: consent.checked, language: win.siteI18n?.language, website: honeypot.value });
      if (!payload) { state = 'error'; render(); return; }
      busy = true; state = 'submitting'; render();
      const fields = [name, email, consent, honeypot].filter(Boolean); fields.forEach(field => field.disabled = true);
      const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 15000);
      try { await submitSignup(payload, win.fetch.bind(win), controller.signal); state = 'success'; }
      catch (error) { state = error.status === 429 ? 'limited' : 'error'; }
      finally { clearTimeout(timer); busy = false; fields.forEach(field => field.disabled = false); render(); }
    });
    form.addEventListener('input', () => { if (!busy) { state = ''; render(); } });
    win.siteI18n?.onChange(render);
    render();
  }
  return { createPayload, submitSignup, init, initForm };
});
