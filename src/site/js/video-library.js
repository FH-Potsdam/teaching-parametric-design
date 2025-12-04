const cards = document.querySelectorAll('.video-library__card[data-video-id]');

const updateCardStatus = (card) => {
  const videoId = card.dataset.videoId;
  const status = card.querySelector('[data-video-status]');
  const watched = window.videoProgress?.hasWatched?.(videoId) ?? false;
  const watchedLabel = status?.dataset?.watchedLabel || 'Watched';
  const notWatchedLabel = status?.dataset?.notWatchedLabel || 'Not watched yet';

  if (watched) {
    card.classList.add('video-library__card--watched');
    if (status) {
      status.classList.add('video-library__status--watched');
      status.textContent = watchedLabel;
    }
  } else if (status) {
    status.classList.remove('video-library__status--watched');
    status.textContent = notWatchedLabel;
  }
};

if (cards.length) {
  cards.forEach(updateCardStatus);
}
