/* Static-host fallback: prepare a consented request, never claim it was delivered. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.FrankSignup = api; api.init(document, root); }
})(typeof window === 'undefined' ? globalThis : window, function () {
  function createMailto({ name = '', email = '', consent = false, language = 'en' }) {
    email = String(email).trim();
    name = String(name).trim();
    if (!consent || !email || /[\r\n]/.test(email) || !/^[^\s@]+@[^\s@]+$/.test(email)) return null;
    const body = [
      'Hi Frank,', '',
      'Please send me investment opportunities and project updates.', '',
      `Name: ${name.replace(/[\r\n]+/g, ' ').slice(0, 80) || 'Not provided'}`,
      `Email: ${email}`,
      `Preferred language: ${language === 'zh' ? 'Chinese' : 'English'}`, '',
      'I agree to receive investment opportunities and project updates from Frank.',
      'I understand I can ask to stop these emails at any time.', '',
      'Source: winwithfrank.com investor signup'
    ].join('\n');
    return `mailto:frank.fan@moohousing.com?subject=${encodeURIComponent('Investor deal updates — signup request')}&body=${encodeURIComponent(body)}`;
  }

  function init(doc, win) {
    const form = doc.querySelector('#investor-signup-form');
    if (!form) return;
    const name = form.querySelector('#investor-name');
    const email = form.querySelector('#investor-email');
    const consent = form.querySelector('#investor-consent');
    const handoff = form.querySelector('#signup-handoff');
    const link = form.querySelector('#signup-email-link');
    const status = form.querySelector('#signup-status');
    const prepare = () => {
      const href = createMailto({ name: name.value, email: email.value, consent: consent.checked, language: win.siteI18n?.language });
      if (!href) return false;
      link.href = href;
      status.textContent = win.siteI18n?.t('signup.ready') || 'Your request is prepared—not sent. Open email, review, and press Send to finish.';
      handoff.hidden = false;
      return true;
    };
    form.addEventListener('submit', event => {
      event.preventDefault();
      email.value = email.value.trim();
      if (form.reportValidity() && prepare()) link.focus();
    });
    // Editing or revoking consent invalidates the previously prepared request.
    form.addEventListener('input', () => { handoff.hidden = true; link.removeAttribute('href'); status.textContent = ''; });
    win.siteI18n?.onChange(() => { if (!handoff.hidden) prepare(); });
  }
  return { createMailto, init };
});
