(function () {
  'use strict';

  function init(doc = document, win = window) {
    const video = doc.querySelector('#welcome-project-video');
    const toggle = doc.querySelector('#welcome-video-toggle');
    if (!video || !toggle || !['', '#top', '#choose', '#welcome'].includes(win.location.hash)) return;
    const motion = win.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = win.navigator.connection;
    const constrained = () => connection?.saveData || ['2g', 'slow-2g'].includes(connection?.effectiveType);
    let userPaused = motion.matches || constrained();
    let pageSuspended = false;
    let failed = false;
    let pending = false;
    let request = 0;
    video.muted = video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    function updateButton() {
      const stopped = video.paused && !pending;
      const key = stopped ? 'video.resume' : 'video.pause';
      toggle.textContent = win.siteI18n?.t(key) || (stopped ? 'Play video' : 'Pause video');
    }
    function setPace() {
      // Match the slower building-by-building pace already used in Projects.
      video.playbackRate = video.defaultPlaybackRate = .625;
    }
    async function syncPlayback() {
      if (doc.hidden || pageSuspended || userPaused || failed) {
        request++;
        pending = false;
        video.pause();
        updateButton();
        return;
      }
      if (!video.getAttribute('src')) {
        const mobile = win.matchMedia('(max-width: 700px)').matches || constrained() || connection?.effectiveType === '3g';
        video.src = `assets/media/projects-${mobile ? 'mobile' : 'hd'}.mp4`;
        video.load();
        setPace();
      }
      if (!video.paused || pending) return;
      pending = true;
      const currentRequest = ++request;
      updateButton();
      try {
        await video.play();
      } catch (error) {
        // Low-power mode or browser autoplay rules must leave a usable Play button.
        if (currentRequest === request) userPaused = true;
      } finally {
        if (currentRequest === request) { pending = false; updateButton(); }
      }
    }
    toggle.addEventListener('click', () => {
      userPaused = pending || !video.paused;
      if (failed) {
        failed = false;
        userPaused = false;
        video.hidden = false;
        video.load();
      }
      syncPlayback();
    });
    video.addEventListener('loadedmetadata', setPace);
    video.addEventListener('playing', () => { video.classList.add('is-ready'); updateButton(); });
    video.addEventListener('pause', updateButton);
    video.addEventListener('error', () => {
      failed = true;
      userPaused = true;
      video.hidden = true;
      video.classList.remove('is-ready');
      syncPlayback();
    });
    doc.addEventListener('visibilitychange', syncPlayback);
    win.addEventListener('pagehide', () => { pageSuspended = true; syncPlayback(); });
    win.addEventListener('pageshow', () => { pageSuspended = false; syncPlayback(); });
    motion.addEventListener?.('change', () => { if (motion.matches) userPaused = true; syncPlayback(); });
    connection?.addEventListener?.('change', () => { if (constrained()) userPaused = true; syncPlayback(); });
    win.siteI18n?.onChange(updateButton);
    toggle.hidden = false;
    updateButton();
    syncPlayback();
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = {init};
  else init();
})();
