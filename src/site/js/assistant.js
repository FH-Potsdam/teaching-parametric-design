(() => {
  const root = document.querySelector('.assistant-page');
  if (!root) return;

  const locale = root.dataset.locale || 'en';
  const normalizedLocale = locale === 'dg' ? 'de' : locale;
  const apiBase = (root.dataset.apiBase || 'http://192.168.7.224:3000').replace(/\/$/, '');
  const apiGenerateUrl = `${apiBase}/api/generate`;
  const requestLanguage = normalizedLocale === 'de' ? 'de' : 'en';
  const videoIndexEl = document.getElementById('assistantVideoIndex');

  const form = document.getElementById('promptForm');
  const questionInput = document.getElementById('question');
  const includeCodeInput = document.getElementById('includeCode');
  const output = document.getElementById('output');
  const functionList = document.getElementById('functionList');
  const statusEl = document.getElementById('status');
  const submitBtn = document.getElementById('submitBtn');
  const clearBtn = document.getElementById('clearBtn');
  const copyBtn = document.getElementById('copyBtn');

  if (!form || !questionInput || !output || !functionList || !statusEl || !submitBtn || !clearBtn || !copyBtn) {
    return;
  }

  const copyDefaultLabel = copyBtn.dataset.labelDefault || copyBtn.textContent || 'Copy';
  let latestRawCode = '';
  let assistantVideos = [];

  if (videoIndexEl?.textContent) {
    try {
      assistantVideos = JSON.parse(videoIndexEl.textContent);
    } catch (error) {
      assistantVideos = [];
    }
  }

  const videoByPageAndHeading = new Map();
  const firstVideoByPage = new Map();
  assistantVideos.forEach(video => {
    if (!video?.pageUrl || !video?.videoId) return;
    const headingSlug = (video.headingSlug || '').toLowerCase();
    if (headingSlug) {
      const key = `${video.pageUrl}|${headingSlug}`;
      if (!videoByPageAndHeading.has(key)) {
        videoByPageAndHeading.set(key, video);
      }
    }
    if (!firstVideoByPage.has(video.pageUrl)) {
      firstVideoByPage.set(video.pageUrl, video);
    }
  });

  const getLinkType = url => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes('parametric-design.fh-potsdam.de')) return 'course';
      if (parsed.hostname.includes('p5js.org')) return 'p5js';
      if (parsed.hostname.includes('developer.mozilla.org')) return 'mdn';
      return 'external';
    } catch (error) {
      return 'external';
    }
  };

  const getCourseThumbnail = url => {
    const normalizedLocale = locale === 'dg' ? 'de' : locale;
    const fallback = `/images/thumbnails/${normalizedLocale}_introduction.png`;

    try {
      const parsed = new URL(url);
      const path = parsed.pathname;
      const hash = (parsed.hash || '').replace('#', '').toLowerCase();

      const pathMap = {
        '/de/2d/01-intro/': 'de_2d_intro',
        '/de/2d/02_1-drawing/': 'de_2d_drawing',
        '/de/2d/02_3-typography/': 'de_2d_typography',
        '/de/2d/03_1-variables/': 'de_2d_variables',
        '/de/2d/03_2-loops/': 'de_2d_loops',
        '/de/2d/03_3-conditions/': 'de_2d_conditions',
        '/de/2d/05_1-variables/': 'de_2d_variables2',
        '/de/2d/05_2-transformations/': 'de_2d_transformations',
        '/de/2d/05_3-functions/': 'de_2d',
        '/de/2d/06-inputs/': 'de_2d_input',
        '/en/2d/01-intro/': 'en_2d_intro',
        '/en/2d/02_1-drawing/': 'en_2d_drawing',
        '/en/2d/02_3-typography/': 'en_2d_typography',
        '/en/2d/03_1-variables/': 'en_2d_variables',
        '/en/2d/03_2-loops/': 'en_2d_loops',
        '/en/2d/03_3-conditions/': 'en_2d_conditions',
        '/en/2d/05_1-variables/': 'en_2d_variables2',
        '/en/2d/05_2-transformations/': 'en_2d_transformations',
        '/en/2d/05_3-functions/': 'en_2d',
        '/en/2d/06-inputs/': 'en_2d_input',
      };

      const hashMap = {
        sketch: 'sketch',
        debugging: 'debug',
        canvas: 'canvas',
        background: 'background',
        random: 'random',
        'for-loop': 'for',
        text: 'typography_intro',
      };

      const base = pathMap[path];
      if (!base) return fallback;

      const suffix = hashMap[hash] || hash;
      if (!suffix) return fallback;

      return `/images/thumbnails/${base}_${suffix}.png`;
    } catch (error) {
      return fallback;
    }
  };

  const getCourseVideoMatch = url => {
    try {
      const parsed = new URL(url);
      const pageUrl = parsed.pathname.endsWith('/') ? parsed.pathname : `${parsed.pathname}/`;
      const headingSlug = parsed.hash ? parsed.hash.replace('#', '').toLowerCase() : '';
      if (headingSlug) {
        const matched = videoByPageAndHeading.get(`${pageUrl}|${headingSlug}`);
        if (matched) return matched;
      }
      return firstVideoByPage.get(pageUrl) || null;
    } catch (error) {
      return null;
    }
  };

  const createExternalSvg = (name, source) => {
    const escapeXml = value =>
      String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');
    const safeName = escapeXml((name || 'function').slice(0, 22));
    const safeSource = escapeXml(source.slice(0, 22));
    return `
      <svg viewBox="0 0 320 160" role="img" aria-label="${safeName} (${safeSource})" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff2db"/>
            <stop offset="100%" stop-color="#efe4d5"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="320" height="160" fill="url(#g)" stroke="#d9ccb7"/>
        <text x="16" y="78" fill="#1a1a1a" font-size="30" font-family="IBM Plex Mono, monospace">${safeName}</text>
        <text x="16" y="130" fill="#67615b" font-size="20" font-family="IBM Plex Mono, monospace">${safeSource}</text>
      </svg>
    `.trim();
  };
  const translations = {
    en: {
      idle: 'Idle',
      enterPrompt: 'Enter a prompt to continue',
      sending: 'Sending request...',
      done: 'Done',
      error: 'Error',
      requestFailed: 'Request failed',
      copied: 'Copied',
      copyFailed: 'Copy failed',
      nothingToCopy: 'Nothing to copy',
      noResponseYet: 'No response yet.',
      noFunctionsYet: 'No functions yet.',
      noFunctionsFound: 'No functions found.',
      noCodeYet: 'No code yet.',
      noCodeReturned: 'No code returned.',
      noHtmlReturned: 'No HTML returned.',
      copyDoneLabel: 'Copied',
      watchedLabel: 'Watched',
    },
    de: {
      idle: 'Bereit',
      enterPrompt: 'Bitte gib einen Prompt ein',
      sending: 'Sende Anfrage...',
      done: 'Fertig',
      error: 'Fehler',
      requestFailed: 'Anfrage fehlgeschlagen',
      copied: 'Kopiert',
      copyFailed: 'Kopieren fehlgeschlagen',
      nothingToCopy: 'Nichts zum Kopieren',
      noResponseYet: 'Noch keine Antwort.',
      noFunctionsYet: 'Noch keine Funktionen.',
      noFunctionsFound: 'Keine Funktionen gefunden.',
      noCodeYet: 'Noch kein Code.',
      noCodeReturned: 'Kein Code zurückgegeben.',
      noHtmlReturned: 'Kein HTML zurückgegeben.',
      copyDoneLabel: 'Kopiert',
      watchedLabel: 'Angesehen',
    },
  };

  const t = translations[normalizedLocale] || translations.en;

  const setStatus = (message, isBusy) => {
    statusEl.textContent = message;
    submitBtn.disabled = isBusy;
  };

  const renderFunctions = functionCalls => {
    functionList.innerHTML = '';
    if (!Array.isArray(functionCalls) || functionCalls.length === 0) {
      functionList.innerHTML = `<li class="empty">${t.noFunctionsFound}</li>`;
      return;
    }

    functionCalls.forEach(func => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const linkType = getLinkType(func.url);
      link.className = `assistant-function-link assistant-function-link--${linkType}`;
      link.href = func.url || '#';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      if (linkType === 'course') {
        const thumb = document.createElement('div');
        thumb.className = 'assistant-function-thumb';
        const img = document.createElement('img');
        const thumbSrc = getCourseThumbnail(func.url || '');
        img.src = thumbSrc;
        img.alt = `${func.name || 'function'} thumbnail`;
        img.addEventListener('error', () => {
          img.src = `/images/thumbnails/${normalizedLocale}_introduction.png`;
        }, { once: true });
        thumb.appendChild(img);

        const meta = document.createElement('div');
        meta.className = 'assistant-function-meta';
        const title = document.createElement('strong');
        title.textContent = func.name || 'function';
        const source = document.createElement('span');
        source.textContent = 'parametric-design.fh-potsdam.de';
        const videoMatch = getCourseVideoMatch(func.url || '');
        const isWatched = !!(videoMatch && window.videoProgress?.hasWatched?.(videoMatch.videoId));
        meta.appendChild(title);
        meta.appendChild(source);
        if (isWatched) {
          const watched = document.createElement('span');
          watched.className = 'assistant-function-watched';
          watched.textContent = `✓ ${t.watchedLabel}`;
          meta.appendChild(watched);
          link.classList.add('assistant-function-link--watched');
        }

        link.appendChild(thumb);
        link.appendChild(meta);
      } else if (linkType === 'p5js' || linkType === 'mdn') {
        const sourceLabel = linkType === 'p5js' ? 'p5js.org' : 'developer.mozilla.org';
        const icon = document.createElement('div');
        icon.className = 'assistant-function-svg';
        icon.innerHTML = createExternalSvg(func.name || 'function', sourceLabel);
        link.appendChild(icon);
      } else {
        link.textContent = func.name || 'function';
      }

      item.appendChild(link);
      functionList.appendChild(item);
    });
  };

  const renderEmpty = () => {
    output.innerHTML = `<p class="empty">${t.noResponseYet}</p>`;
    functionList.innerHTML = `<li class="empty">${t.noFunctionsYet}</li>`;
    latestRawCode = '';
    copyBtn.disabled = true;
    copyBtn.textContent = copyDefaultLabel;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const question = questionInput.value.trim();

    if (!question) {
      setStatus(t.enterPrompt, false);
      return;
    }

    setStatus(t.sending, true);

    try {
      const payload = { question, language: requestLanguage };
      if (includeCodeInput && includeCodeInput.checked) {
        payload.code = latestRawCode || '';
      }

      const response = await fetch(apiGenerateUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const message = errorBody.error || t.requestFailed;
        throw new Error(message);
      }

      const data = await response.json();
      output.innerHTML = data.html || `<p class="empty">${t.noHtmlReturned}</p>`;
      renderFunctions(data.functionCalls);
      latestRawCode = data.raw || '';
      copyBtn.disabled = !latestRawCode;
      copyBtn.textContent = copyDefaultLabel;
      setStatus(t.done, false);
    } catch (error) {
      output.innerHTML = `<p class="empty">${error.message || t.requestFailed}</p>`;
      renderFunctions([]);
      latestRawCode = '';
      copyBtn.disabled = true;
      copyBtn.textContent = copyDefaultLabel;
      setStatus(t.error, false);
    }
  };

  form.addEventListener('submit', handleSubmit);

  clearBtn.addEventListener('click', () => {
    questionInput.value = '';
    renderEmpty();
    setStatus(t.idle, false);
  });

  copyBtn.addEventListener('click', async () => {
    if (!latestRawCode) {
      setStatus(t.nothingToCopy, false);
      return;
    }

    try {
      await navigator.clipboard.writeText(latestRawCode);
      copyBtn.textContent = t.copyDoneLabel;
      setStatus(t.copied, false);
      setTimeout(() => {
        copyBtn.textContent = copyDefaultLabel;
      }, 1200);
    } catch (error) {
      setStatus(t.copyFailed, false);
    }
  });

  renderEmpty();
  setStatus(t.idle, false);
})();
