const cards = document.querySelectorAll('.video-library__card[data-video-id]');
const library = document.querySelector('.video-library');
const viewButtons = document.querySelectorAll('.video-library__view-btn[data-view]');

const updateCardStatus = (card) => {
  const videoId = card.dataset.videoId;
  const status = card.querySelector('[data-video-status]');
  const watched = window.videoProgress?.hasWatched?.(videoId) ?? false;

  if (watched) {
    card.classList.add('video-library__card--watched');
    if (status) {
      status.classList.add('video-library__watch-indicator--visible');
      status.removeAttribute('hidden');
    }
  } else {
    card.classList.remove('video-library__card--watched');
    if (status) {
      status.classList.remove('video-library__watch-indicator--visible');
      status.setAttribute('hidden', 'hidden');
    }
  }
};

const setView = (view) => {
  if (!library) return;
  const allowedViews = ['grid', 'list'];
  const nextView = allowedViews.includes(view) ? view : 'grid';
  library.classList.remove('video-library--grid', 'video-library--list');
  library.classList.add(`video-library--${nextView}`);

  viewButtons.forEach((btn) => {
    if (btn.dataset.view === nextView) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });

  const locale = library.dataset.locale || 'default';
  try {
    localStorage.setItem(`videoLibraryView:${locale}`, nextView);
  } catch (err) {
    // ignore storage errors
  }
};

const applySavedView = () => {
  if (!library) return;
  const locale = library.dataset.locale || 'default';
  try {
    const saved = localStorage.getItem(`videoLibraryView:${locale}`);
    if (saved) {
      setView(saved);
    }
  } catch (err) {
    // ignore storage errors
  }
};

if (viewButtons.length && library) {
  viewButtons.forEach((btn) => {
    btn.addEventListener('click', () => setView(btn.dataset.view));
  });
  applySavedView();
}

if (cards.length) {
  cards.forEach(updateCardStatus);
}
