/* Disclose secondary mobile content without removing it from desktop or no-JS. */
(function (root) {
  function init(doc, win) {
    const query = win.matchMedia('(max-width: 700px)');
    const disclosures = [...doc.querySelectorAll('[data-mobile-collapse]')];
    function sync() {
      disclosures.forEach(node => {
        // Do not collapse an application while someone is editing it.
        if (!query.matches || !node.contains(doc.activeElement)) node.open = !query.matches;
      });
    }
    sync();
    query.addEventListener?.('change', sync);
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { init };
  else init(root.document, root);
})(typeof window === 'undefined' ? globalThis : window);
