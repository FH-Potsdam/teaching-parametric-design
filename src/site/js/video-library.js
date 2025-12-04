const navDataElement = document.getElementById('nav-data');
const libraryContainer = document.querySelector('[data-video-library]');

if (navDataElement && libraryContainer) {
  const LOCALES = ['de', 'en', 'dg'];
  const navData = JSON.parse(navDataElement.textContent || '[]');

  const flattenNav = entries => entries.reduce((urls, entry) => {
    if (entry.url) {
      urls.push(entry.url);
    }
    if (entry.children?.length) {
      urls.push(...flattenNav(entry.children));
    }
    return urls;
  }, []);

  const pageMap = LOCALES.reduce((map, locale) => {
    const rootEntry = navData.find(entry => entry.key === locale);
    if (rootEntry) {
      map[locale] = Array.from(new Set(flattenNav(rootEntry.children || [])));
    }
    return map;
  }, {});

  const renderStatus = (videoId) => {
    const status = document.createElement('span');
    const hasWatched = window.videoProgress?.hasWatched?.(videoId) ?? false;
    status.className = 'video-library__status';
    status.textContent = hasWatched ? 'Watched' : 'Not watched yet';
    if (hasWatched) {
      status.classList.add('video-library__status--watched');
    }
    return status;
  };

  const renderCard = (video) => {
    const card = document.createElement('article');
    card.className = 'video-library__card';

    if (window.videoProgress?.hasWatched?.(video.videoId)) {
      card.classList.add('video-library__card--watched');
    }

    const thumb = document.createElement('div');
    thumb.className = 'video-library__thumb';

    if (video.poster) {
      const img = document.createElement('img');
      img.src = video.poster;
      img.alt = `${video.pageTitle} preview`;
      thumb.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'video-library__placeholder';
      placeholder.textContent = 'No preview available';
      thumb.appendChild(placeholder);
    }

    const body = document.createElement('div');
    body.className = 'video-library__body';

    const title = document.createElement('h3');
    title.textContent = video.pageTitle;

    const link = document.createElement('a');
    link.href = video.pageUrl;
    link.textContent = 'Open page';

    const source = document.createElement('p');
    source.className = 'video-library__source';
    source.textContent = video.videoSrc || video.videoId;

    body.appendChild(title);
    body.appendChild(renderStatus(video.videoId));
    body.appendChild(source);
    body.appendChild(link);

    card.appendChild(thumb);
    card.appendChild(body);

    return card;
  };

  const renderLocale = (locale, videos) => {
    const localeSection = document.createElement('section');
    localeSection.className = 'video-library__locale';

    const heading = document.createElement('h2');
    heading.textContent = locale.toUpperCase();
    localeSection.appendChild(heading);

    if (!videos.length) {
      const empty = document.createElement('p');
      empty.textContent = 'No videos found for this language.';
      localeSection.appendChild(empty);
      return localeSection;
    }

    const grid = document.createElement('div');
    grid.className = 'video-library__grid';

    videos.forEach(video => {
      grid.appendChild(renderCard(video));
    });

    localeSection.appendChild(grid);
    return localeSection;
  };

  const fetchVideosForLocale = async (locale) => {
    const urls = pageMap[locale] || [];
    const entries = [];

    for (const url of urls) {
      const fullUrl = new URL(url, window.location.origin).href;
      try {
        const response = await fetch(fullUrl);
        if (!response.ok) continue;

        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const pageTitle = doc.querySelector('h1')?.textContent?.trim() || fullUrl;

        doc.querySelectorAll('.video-wrapper[data-video-id]').forEach(wrapper => {
          const videoId = wrapper.dataset.videoId;
          if (!videoId) return;

          const videoElement = wrapper.querySelector('video');
          const poster = videoElement?.getAttribute('poster') || '';
          const videoSrc = videoElement?.querySelector('source')?.getAttribute('src') || '';

          entries.push({ locale, pageTitle, pageUrl: fullUrl, videoId, poster, videoSrc });
        });
      } catch (error) {
        console.warn('Unable to extract videos from', fullUrl, error);
      }
    }

    return entries;
  };

  const renderLibrary = (library) => {
    libraryContainer.innerHTML = '';
    LOCALES.forEach(locale => {
      libraryContainer.appendChild(renderLocale(locale, library.filter(video => video.locale === locale)));
    });
  };

  const loadLibrary = async () => {
    libraryContainer.innerHTML = '<p class="video-library__loading">Collecting videos…</p>';
    const collected = [];

    for (const locale of LOCALES) {
      const videos = await fetchVideosForLocale(locale);
      collected.push(...videos);
    }

    collected.sort((a, b) => a.pageTitle.localeCompare(b.pageTitle));
    renderLibrary(collected);
  };

  loadLibrary();
}
