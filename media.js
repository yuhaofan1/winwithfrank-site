(function (root) {
  'use strict';
  const reels = [
    { name: 'projects', rate: .625, poster: 'assets/media/project-86-1280.webp' },
    { name: 'construction', rate: .625, poster: 'assets/media/construction-poster.webp' },
    { name: 'interiors', rate: 1, poster: 'assets/media/interiors-poster.webp' },
  ];
  // User-supplied project IDs, years and values, matching the existing reel cues.
  const projects = [
    { number: '86', value: 12500000, year: '2023' },
    { number: '546', value: 6500000, year: '2023' },
    { number: '14', value: 7050000, year: '2024' },
    { number: '01', value: 7200000, year: '2023' },
  ];
  function projectAt(reel, seconds) {
    if (reel !== 0 || seconds >= 18 || seconds < 0) return null;
    if (seconds >= 3 && seconds < 4) return { number: '48', value: 5500000, year: '2025' };
    return projects[Math.min(3, Math.floor(seconds / 5))];
  }
  function qualityFor(choice, narrow, saveData) {
    return choice === 'hd' || choice === 'mobile' ? choice : narrow || saveData ? 'mobile' : 'hd';
  }
  function shouldPlay({ visible, hidden, userPaused, failed }) {
    return visible && !hidden && !userPaused && !failed;
  }
  function networkPolicy(connection) {
    const type = connection?.effectiveType;
    const constrained = Boolean(connection?.saveData) || type === 'slow-2g' || type === '2g';
    return { manualPlayback: constrained, preferMobile: constrained || type === '3g' };
  }

  function init(doc = document, win = window) {
    const video = doc.querySelector('#featured-video');
    if (!video) return;
    const frame = doc.querySelector('#project-film');
    const playButton = doc.querySelector('#video-edit-pause');
    const quality = doc.querySelector('#video-quality');
    const caption = doc.querySelector('#video-project-overlay');
    const sceneCaption = doc.querySelector('#video-scene-caption');
    const status = doc.querySelector('#video-status');
    const tabs = [...doc.querySelectorAll('[data-reel]')];
    const i18n = win.siteI18n;
    const t = (key, values) => i18n?.t(key, values) || key;
    const motion = win.matchMedia('(prefers-reduced-motion: reduce)');
    const narrow = win.matchMedia('(max-width: 700px)');
    const connection = win.navigator.connection;
    let network = networkPolicy(connection);
    let state = { visible: false, hidden: doc.hidden, userPaused: motion.matches || network.manualPlayback, failed: false };
    let reel = 0;
    let pendingSeek = null;
    let lastCaption = '';
    let playPending = false;
    let playRequest = 0;
    video.defaultMuted = video.muted = true;

    function source() {
      return `assets/media/${reels[reel].name}-${qualityFor(quality.value, narrow.matches, network.preferMobile)}.mp4`;
    }
    function updateButton() {
      playButton.textContent = t(video.paused ? 'video.resume' : 'video.pause');
      playButton.setAttribute('aria-pressed', String(video.paused));
    }
    function ensureSource() {
      const next = source();
      if (video.getAttribute('src') === next) return;
      if (pendingSeek === null && video.getAttribute('src')) pendingSeek = video.currentTime;
      // A source switch can reject an older play() promise after the new clip starts.
      playRequest++;
      playPending = false;
      video.poster = reels[reel].poster;
      video.src = next;
      video.load();
    }
    function syncPlayback() {
      state.hidden = doc.hidden;
      if (!shouldPlay(state)) {
        playRequest++;
        playPending = false;
        video.pause(); updateButton(); return;
      }
      ensureSource();
      if (!video.paused || playPending) return;
      playPending = true;
      const request = ++playRequest;
      video.play().catch(error => {
        // A browser denial must show a usable Play control, not an endless retry loop.
        if (request === playRequest && error?.name !== 'AbortError' && shouldPlay(state)) state.userPaused = true;
      }).finally(() => {
        if (request === playRequest) { playPending = false; updateButton(); }
      });
    }
    function renderCaption() {
      const project = projectAt(reel, video.currentTime);
      const key = `${i18n?.language}-${reel}-${project?.number || Math.floor(video.currentTime / 5)}`;
      if (key === lastCaption) return;
      lastCaption = key;
      caption.hidden = !project;
      sceneCaption.hidden = Boolean(project);
      if (project) {
        caption.querySelector(':scope > div:first-child > strong').textContent = t('video.projectName', { number: project.number });
        caption.querySelector(':scope > div:nth-child(2) > strong').textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(project.value);
        caption.querySelector('[data-built-year] strong').textContent = project.year;
      } else {
        const interiorKeys = ['video.modern', 'video.new', 'video.furnished', 'video.living'];
        sceneCaption.textContent = t(reel === 1 ? 'proof.constructionCaption' : reel === 2 ? interiorKeys[Math.min(3, Math.floor(video.currentTime / 5))] : 'proof.detailCaption');
      }
    }
    function chooseReel(index, seconds = 0) {
      reel = index;
      pendingSeek = seconds;
      state.failed = false;
      state.userPaused = false;
      status.hidden = true;
      video.poster = reels[reel].poster;
      tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === index)));
      const sameSource = video.getAttribute('src') === source();
      ensureSource();
      if (sameSource && video.readyState >= 1) {
        video.currentTime = seconds;
        pendingSeek = null;
      }
      video.playbackRate = video.defaultPlaybackRate = reels[reel].rate;
      lastCaption = '';
      renderCaption();
      syncPlayback();
    }
    playButton.addEventListener('click', () => {
      state.userPaused = !video.paused;
      if (state.failed) { state.failed = false; status.hidden = true; video.load(); }
      syncPlayback();
    });
    tabs.forEach((tab, index) => tab.addEventListener('click', () => chooseReel(index)));
    doc.querySelectorAll('[data-project-seek]').forEach(link => link.addEventListener('click', () => chooseReel(0, Number(link.dataset.projectSeek))));
    quality.addEventListener('change', () => {
      pendingSeek = video.currentTime;
      if (video.getAttribute('src')) ensureSource();
      syncPlayback();
    });
    video.addEventListener('loadedmetadata', () => {
      video.playbackRate = video.defaultPlaybackRate = reels[reel].rate;
      if (pendingSeek !== null) { video.currentTime = Math.min(pendingSeek, video.duration || pendingSeek); pendingSeek = null; }
      renderCaption();
    });
    video.addEventListener('canplay', syncPlayback);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', renderCaption);
    video.addEventListener('ended', () => {
      if (state.userPaused) return;
      chooseReel((reel + 1) % reels.length);
    });
    video.addEventListener('error', () => {
      state.failed = true;
      state.userPaused = true;
      status.textContent = t('proof.videoError');
      status.hidden = false;
      updateButton();
    });
    doc.addEventListener('visibilitychange', syncPlayback);
    motion.addEventListener?.('change', () => { if (motion.matches) state.userPaused = true; syncPlayback(); });
    connection?.addEventListener?.('change', () => {
      network = networkPolicy(connection);
      if (network.manualPlayback) state.userPaused = true;
      // Apply a lighter source on the next requested play/chapter, not mid-shot.
      if (network.manualPlayback) syncPlayback();
    });
    if ('IntersectionObserver' in win) {
      new win.IntersectionObserver(entries => {
        state.visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .15;
        syncPlayback();
      }, { threshold: [0, .15] }).observe(frame);
    } else {
      // Older browsers remain click-to-play instead of downloading offscreen media.
      state.visible = true;
      state.userPaused = true;
    }
    function translateProjectCards() {
      doc.querySelectorAll('.project-card h4').forEach((title, index) => { title.textContent = t('video.projectName', { number: projects[index].number }); });
    }
    i18n?.onChange(() => { lastCaption = ''; renderCaption(); updateButton(); translateProjectCards(); if (state.failed) status.textContent = t('proof.videoError'); });
    translateProjectCards();
    renderCaption();
    updateButton();
  }
  const api = { reels, projects, projectAt, qualityFor, shouldPlay, networkPolicy, init };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FrankMedia = api;
})(typeof window !== 'undefined' ? window : globalThis);
