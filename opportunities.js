(function () {
  'use strict';

  function init(doc = document) {
    const grid = doc.querySelector('.opportunity-grid');
    if (!grid || grid.dataset.enhanced) return;
    const tiles = [...grid.querySelectorAll('.opportunity-tile')].map(tile => ({
      tile,
      button: tile.querySelector('.opportunity-trigger'),
      detail: tile.querySelector('.opportunity-detail')
    }));
    if (!tiles.length || tiles.some(item => !item.button || !item.detail)) return;
    let pinned = null;
    function reveal(active) {
      tiles.forEach(item => {
        const open = item === active;
        item.tile.classList.toggle('is-open', open);
        item.button.setAttribute('aria-expanded', String(open));
        item.detail.hidden = !open;
      });
    }
    tiles.forEach(item => {
      item.tile.addEventListener('pointerenter', event => {
        if (event.pointerType === 'mouse') reveal(item);
      });
      item.tile.addEventListener('pointerleave', event => {
        if (event.pointerType === 'mouse') reveal(pinned);
      });
      // Native button activation covers touch, Enter, and Space as well as click.
      item.button.addEventListener('click', () => {
        pinned = pinned === item ? null : item;
        reveal(pinned);
      });
    });
    doc.addEventListener('keydown', event => {
      if (event.key === 'Escape') { pinned = null; reveal(null); }
    });
    doc.addEventListener('click', event => {
      if (!grid.contains(event.target)) { pinned = null; reveal(null); }
    });
    grid.dataset.enhanced = 'true';
    reveal(null);
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = {init};
  else init();
})();
