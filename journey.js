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
  function activeChapter(rects, height) {
    let active = 0;
    rects.forEach((rect, index) => { if (rect.top <= height * .38) active = index; });
    return active;
  }
  function showDock({ signupTop, signupBottom, height, headerHeight, interacting, dialogOpen = false }) {
    // A stable compact launcher, not a form that disappears as text passes it.
    const inlineFormVisible = signupTop < height - 80 && signupBottom > headerHeight;
    return !dialogOpen && !interacting && !inlineFormVisible;
  }

  function init(doc = document, win = window) {
    const hero = doc.querySelector('#thesis');
    const signup = doc.querySelector('#investor-signup-form');
    const dock = doc.querySelector('#investor-dock');
    if (!hero || !signup || !dock) return;
    const dialog = doc.querySelector('#dock-dialog');
    const header = doc.querySelector('.store-header');
    const film = doc.querySelector('#project-film');
    const figures = [...doc.querySelectorAll('[data-achievement]')];
    const photos = [...doc.querySelectorAll('[data-achievement-photo]')];
    const ruler = doc.querySelector('#achievement-ruler-fill');
    const chapters = [...doc.querySelectorAll('[data-chapter-link]')].map(link => ({ link, section: doc.querySelector(link.getAttribute('href')) })).filter(item => item.section);
    const editionNodes = [...doc.querySelectorAll('#achievement-title,#projects-title,#signup-title,.project-collection-heading')];
    const motion = win.matchMedia('(prefers-reduced-motion: reduce)');
    const revealNodes = [...doc.querySelectorAll('.achievement-figure,.project-card,.signup-benefits li')];
    let pending = false, selected = -1, selectedChapter = -1;
    doc.body.classList.add('journey-ready');

    if ('IntersectionObserver' in win && !motion.matches) {
      const observer = new win.IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        });
      }, { threshold: .01, rootMargin: '0px 0px -20px' });
      revealNodes.forEach((node, index) => {
        node.classList.add('journey-reveal');
        node.style.setProperty('--reveal-delay', `${(index % 2) * 75}ms`);
        observer.observe(node);
      });
      editionNodes.forEach(node => { node.classList.add('edition-reveal'); observer.observe(node); });
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
      const chapterRects = chapters.map(item => item.section.getBoundingClientRect());
      const headerHeight = header?.offsetHeight || 65;
      const editing = Boolean(doc.activeElement?.closest('input,select,textarea,[contenteditable="true"]'));
      const interacting = editing || header?.classList.contains('is-menu-open');
      doc.body.classList.toggle('is-form-editing', editing);
      const next = closestFigure(rects, height);
      if (next !== selected) {
        selected = next;
        figures.forEach((node, index) => node.classList.toggle('is-active', index === next));
        photos.forEach((node, index) => node.classList.toggle('is-active', index === next));
        ruler?.style.setProperty('transform', `scaleX(${(next + 1) / Math.max(1, figures.length)})`);
      }
      const chapter = activeChapter(chapterRects, height);
      if (chapter !== selectedChapter) {
        selectedChapter = chapter;
        chapters.forEach(({ link }, index) => {
          link.classList.toggle('is-active', index === chapter);
          if (index === chapter) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
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
      dock.hidden = !showDock({ signupTop: signupRect.top, signupBottom: signupRect.bottom, height, headerHeight, interacting, dialogOpen: dialog?.open });
      doc.body.classList.toggle('has-signup-dock', !dock.hidden);
    }
    function schedule() {
      if (pending || doc.hidden) return;
      pending = true;
      win.requestAnimationFrame(update);
    }
    win.addEventListener('scroll', schedule, { passive: true });
    win.addEventListener('resize', schedule);
    win.visualViewport?.addEventListener('resize', schedule);
    win.visualViewport?.addEventListener('scroll', schedule);
    doc.addEventListener('visibilitychange', schedule);
    doc.addEventListener('focusin', schedule);
    doc.addEventListener('focusout', schedule);
    doc.addEventListener('click', schedule);
    dialog?.addEventListener('close', schedule);
    motion.addEventListener?.('change', () => {
      if (motion.matches) [...revealNodes,...editionNodes].forEach(node => node.classList.add('is-in-view'));
      schedule();
    });
    win.siteI18n?.onChange(schedule);
    if ('ResizeObserver' in win) {
      const resize = new win.ResizeObserver(schedule);
      resize.observe(doc.body); resize.observe(dock);
    }
    update();
  }
  const api = { clamp, closestFigure, filmFrame, activeChapter, showDock, init };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else { root.FrankJourney = api; init(root.document, root); }
})(typeof window !== 'undefined' ? window : globalThis);
