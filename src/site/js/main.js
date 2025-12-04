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
    badge.textContent = 'Watched';
    wrapper.appendChild(badge);
  }

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