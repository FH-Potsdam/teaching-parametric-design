const buttons = document.querySelectorAll('.scroll-btn');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    window.scrollTo(0, window.scrollY + 100);
  });
}

document.querySelectorAll('#nav nav h5').forEach(header => {
  header.addEventListener('click', function () {
    const isOpen = this.classList.contains('open');
    document.querySelectorAll('#nav nav h5').forEach(h => h.classList.remove('open'));
    if (!isOpen) {
      this.classList.add('open');
    }
  });
});

const STORAGE_KEY = 'watchedVideos';

const getStoredVideos = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
};

const watchedVideos = new Set(getStoredVideos());

const hasWatchedVideo = videoId => watchedVideos.has(videoId);

const getBadgeLocale = () => {
  const lang = (document.documentElement.lang || '').toLowerCase();
  if (lang.startsWith('de') || lang.startsWith('sgn-de')) return 'de';
  return 'en';
};

const watchedBadgeByLocale = {
  en: 'Watched',
  de: 'Angesehen',
};

const watchedBadgeLabel = watchedBadgeByLocale[getBadgeLocale()] || watchedBadgeByLocale.en;

const saveWatchedVideos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...watchedVideos]));
};

const markVideoIdWatched = videoId => {
  if (!videoId || watchedVideos.has(videoId)) return;
  watchedVideos.add(videoId);
  saveWatchedVideos();
};

window.videoProgress = {
  hasWatched: hasWatchedVideo,
  markWatched: markVideoIdWatched,
  getWatchedIds: () => [...watchedVideos],
};

document.querySelectorAll('.video-wrapper[data-video-id]').forEach(wrapper => {
  const videoId = wrapper.dataset.videoId;
  const videoElement = wrapper.querySelector('video');

  if (!videoId || !videoElement) {
    return;
  }

  let badge = wrapper.querySelector('.video-status');
  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'video-status';
    wrapper.appendChild(badge);
  }
  badge.textContent = `✓ ${watchedBadgeLabel}`;

  if (hasWatchedVideo(videoId)) {
    wrapper.classList.add('video-watched');
  }

  let isMarkedWatched = hasWatchedVideo(videoId);

  const markWatched = () => {
    if (isMarkedWatched) return;
    isMarkedWatched = true;
    markVideoIdWatched(videoId);
    wrapper.classList.add('video-watched');
  };

  videoElement.addEventListener('timeupdate', () => {
    if (videoElement.duration && videoElement.currentTime >= videoElement.duration - 10) {
      markWatched();
    }
  });

  videoElement.addEventListener('ended', markWatched);
});

const API_STATUS_KEY = 'apiAvailability';
const API_CHECK_KEY = 'apiLastCheck';
const API_CHECK_INTERVAL_MS = 5 * 60 * 1000;
const API_PING_URL = 'https://fb4-meier-ml.fh-potsdam.de/api/ping';
const assistButton = document.querySelector('#assistBtnTrigger');

const setAssistButtonVisibility = isAvailable => {
  if (!assistButton) return;
  if (isAvailable) {
    assistButton.removeAttribute('hidden');
  } else {
    assistButton.setAttribute('hidden', '');
  }
};

const getStoredApiAvailability = () => {
  try {
    const storedValue = localStorage.getItem(API_STATUS_KEY);
    if (storedValue === null) return null;
    return storedValue === 'true';
  } catch (error) {
    return null;
  }
};

const shouldCheckApiAvailability = () => {
  try {
    const lastCheck = Number(localStorage.getItem(API_CHECK_KEY));
    if (!lastCheck || Number.isNaN(lastCheck)) return true;
    return Date.now() - lastCheck > API_CHECK_INTERVAL_MS;
  } catch (error) {
    return true;
  }
};

const checkApiAvailability = async () => {
  let isAvailable = false;

  try {
    const response = await fetch(API_PING_URL, { cache: 'no-store' });
    if (response.ok) {
      const text = await response.text();
      isAvailable = text.trim() === 'pong';
    }
  } catch (error) {
    isAvailable = false;
  }

  try {
    localStorage.setItem(API_STATUS_KEY, String(isAvailable));
    localStorage.setItem(API_CHECK_KEY, String(Date.now()));
  } catch (error) {
    // Ignore storage failures (private mode, quota, etc.)
  }

  setAssistButtonVisibility(isAvailable);
};

const cachedAvailability = getStoredApiAvailability();
const needsApiCheck = shouldCheckApiAvailability();

if (!needsApiCheck && cachedAvailability !== null) {
  setAssistButtonVisibility(cachedAvailability);
}

if ((cachedAvailability === null || !cachedAvailability) || needsApiCheck) {
  setAssistButtonVisibility(false);
  checkApiAvailability();
}
