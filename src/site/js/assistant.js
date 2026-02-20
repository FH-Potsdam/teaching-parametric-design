(() => {
  const root = document.querySelector('.assistant-page');
  if (!root) return;

  const locale = root.dataset.locale || 'en';
  const normalizedLocale = locale === 'dg' ? 'de' : locale;
  const apiBase = (root.dataset.apiBase || 'http://192.168.7.224:3000').replace(/\/$/, '');
  const apiGenerateUrl = `${apiBase}/api/generate`;
  const requestLanguage = normalizedLocale === 'de' ? 'de' : 'en';

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
      link.textContent = func.name || 'function';
      link.href = func.url || '#';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
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
