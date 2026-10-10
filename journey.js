/* Native-scroll storytelling. No animation library, scroll hijacking or invented counters. */
(function (root) {
  'use strict';
  const clamp = value => Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
  function closestFigure(rects, height) {
    let selected = 0, distance = Infinity;
    rects.forEach((rect, index) => {
      const next = Math.abs(rect.top + rect.height / 2 - height * .48);
      if (next < distance) { selected = index; distance = next; }
    });
    return selected;
  }
  function filmFrame(top, viewportHeight) {
    const progress = clamp((viewportHeight - top) / Math.max(1, viewportHeight * .9));
    return { scale: .94 + .06 * progress, radius: 30 - 22 * progress };
  }
  function showDock({ heroBottom, signupTop, signupBottom, height, headerHeight, interacting, protectedRects = [] }) {
    // Keep the film, snap-story and editable controls free of floating UI.
    const protectedVisible = protectedRects.some(rect => rect.top < height && rect.bottom > headerHeight);
    return !interacting && !protectedVisible && heroBottom < headerHeight && signupTop > height && signupBottom > height;
  }

  function init(doc = document, win = window) {
    const hero = doc.querySelector('#thesis');
    const signup = doc.querySelector('#investor-signup');
    const dock = doc.querySelector('#investor-dock');
    if (!hero || !signup || !dock) return;
    const header = doc.querySelector('.store-header');
    const film = doc.querySelector('#project-film');
    const protectedNodes = [...doc.querySelectorAll('#project-film,.film-controls,.film-caption,#investment-model,#job-application')];
    const figures = [...doc.querySelectorAll('[data-achievement]')];
    const photos = [...doc.querySelectorAll('[data-achievement-photo]')];
    const motion = win.matchMedia('(prefers-reduced-motion: reduce)');
    const revealNodes = [...doc.querySelectorAll('.achievement-figure,.project-card,.signup-benefits li')];
    let pending = false, selected = -1;
    doc.body.classList.add('journey-ready');

    if ('IntersectionObserver' in win && !motion.matches) {
      const observer = new win.IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        });
      }, { threshold: .12, rootMargin: '0px 0px -20px' });
      revealNodes.forEach((node, index) => {
        node.classList.add('journey-reveal');
        node.style.setProperty('--reveal-delay', `${(index % 2) * 75}ms`);
        observer.observe(node);
      });
    }

    function update() {
      pending = false;
      if (doc.hidden) return;
      // Read layout together, before writing any styles.
      const height = win.innerHeight;
      const heroRect = hero.getBoundingClientRect();
      const signupRect = signup.getBoundingClientRect();
      const filmRect = film?.getBoundingClientRect();
      const rects = figures.map(node => node.getBoundingClientRect());
      const headerHeight = header?.offsetHeight || 65;
      const protectedRects = protectedNodes.map(node => node.getBoundingClientRect());
      const editing = Boolean(doc.activeElement?.closest('input,select,textarea,[contenteditable="true"]'));
      const interacting = editing || header?.classList.contains('is-menu-open');
      doc.body.classList.toggle('is-form-editing', editing);
      const next = closestFigure(rects, height);
      if (next !== selected) {
        selected = next;
        figures.forEach((node, index) => node.classList.toggle('is-active', index === next));
        photos.forEach((node, index) => node.classList.toggle('is-active', index === next));
      }
      if (!motion.matches) {
        const heroProgress = clamp(-heroRect.top / Math.max(1, heroRect.height));
        hero.style.setProperty('--hero-drift', `${heroProgress * 24}px`);
        hero.style.setProperty('--hero-scale', String(1 + heroProgress * .035));
        if (filmRect && filmRect.top < height && filmRect.bottom > 0) {
          const frame = filmFrame(filmRect.top, height);
          film.style.setProperty('--film-scale', frame.scale.toFixed(4));
          film.style.setProperty('--film-radius', `${frame.radius.toFixed(1)}px`);
        }
      }
      dock.hidden = !showDock({ heroBottom: heroRect.bottom, signupTop: signupRect.top, signupBottom: signupRect.bottom, height, headerHeight, interacting, protectedRects });
    }
    function schedule() {
      if (pending || doc.hidden) return;
      pending = true;
      win.requestAnimationFrame(update);
    }
    win.addEventListener('scroll', schedule, { passive: true });
    win.addEventListener('resize', schedule);
    doc.addEventListener('visibilitychange', schedule);
    doc.addEventListener('focusin', schedule);
    doc.addEventListener('focusout', schedule);
    doc.addEventListener('click', schedule);
    motion.addEventListener?.('change', () => {
      if (motion.matches) revealNodes.forEach(node => node.classList.add('is-in-view'));
      schedule();
    });
    win.siteI18n?.onChange(schedule);
    if ('ResizeObserver' in win) new win.ResizeObserver(schedule).observe(doc.body);
    update();
  }
  const api = { clamp, closestFigure, filmFrame, showDock, init };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else { root.FrankJourney = api; init(root.document, root); }
})(typeof window !== 'undefined' ? window : globalThis);
