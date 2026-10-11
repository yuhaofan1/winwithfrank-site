(function (root) {
  'use strict';
  function init(doc = document) {
    const details = doc.querySelector('#more-projects');
    const close = doc.querySelector('[data-gallery-collapse]');
    const summary = doc.querySelector('#project-gallery-toggle');
    if (!details || !close || !summary) return;
    close.hidden = false;
    close.addEventListener('click', () => {
      details.open = false;
      // Return keyboard focus and the viewport to the disclosure, not the next section.
      summary.focus({ preventScroll: true });
      summary.scrollIntoView({ block: 'center', behavior: 'instant' });
    });
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { init };
  else init();
})(typeof window !== 'undefined' ? window : globalThis);
