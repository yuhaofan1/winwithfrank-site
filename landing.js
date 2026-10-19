/* Preserve bookmarked links to the original site after moving it to its own page.
   The chooser itself needs no scroll interception or navigation state. */
(() => {
  const hash = window.location.hash;
  if (!hash || hash === "#top" || hash === "#choose" || hash === "#welcome") return;
  const destination = new URL("projects.html", window.location.href);
  destination.search = window.location.search;
  destination.hash = hash;
  window.location.replace(destination.href);
})();
