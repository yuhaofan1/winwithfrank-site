/* Direct contact is separate from email-list consent and never submits the form. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.FrankContact = api; api.init(document, root); }
})(typeof window === 'undefined' ? globalThis : window, function () {
  const WECHAT_ID = 'bestusc';
  const EMAIL = 'frank.fan@moohousing.com';
  async function copyText(doc, win, value) {
    try { await win.navigator.clipboard.writeText(value); return true; }
    catch (_) {
      const previous = doc.activeElement;
      const field = doc.createElement('textarea');
      field.value = value;
      field.readOnly = true;
      field.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0;font-size:16px';
      doc.body.append(field);
      try { field.select(); return doc.execCommand('copy') === true; }
      catch (_) { return false; }
      finally { field.remove(); previous?.focus({ preventScroll: true }); }
    }
  }
  const copyWechat = (doc, win) => copyText(doc, win, WECHAT_ID);
  const copyEmail = (doc, win) => copyText(doc, win, EMAIL);
  function init(doc, win) {
    const feedback = doc.querySelector('#wechat-feedback');
    if (!feedback) return;
    let timer, state;
    const render = () => {
      if (!state) return;
      const defaults = {
        copied: 'WeChat ID copied: bestusc. Open WeChat and search for bestusc to add Frank.',
        manual: 'WeChat ID: bestusc. Copy it manually, then search in WeChat to add Frank.',
        emailCopied: 'Email copied: frank.fan@moohousing.com',
        emailManual: 'Copy this email manually: frank.fan@moohousing.com'
      };
      feedback.textContent = win.siteI18n?.t(`connect.${state}`) || defaults[state];
    };
    doc.querySelectorAll('[data-copy-wechat]').forEach(button => {
      button.addEventListener('click', async () => {
        const copied = await copyWechat(doc, win);
        win.clearTimeout(timer);
        state = copied ? 'copied' : 'manual'; render(); feedback.hidden = false;
        timer = win.setTimeout(() => { feedback.hidden = true; }, 8000);
      });
    });
    doc.querySelectorAll('[data-copy-email]').forEach(button => {
      button.addEventListener('click', async () => {
        const copied = await copyEmail(doc, win);
        win.clearTimeout(timer);
        state = copied ? 'emailCopied' : 'emailManual'; render(); feedback.hidden = false;
        timer = win.setTimeout(() => { feedback.hidden = true; }, 8000);
      });
    });
    win.siteI18n?.onChange(render);
  }
  return { WECHAT_ID, EMAIL, copyWechat, copyEmail, init };
});
