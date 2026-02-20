---
title: Assistant
eleventyNavigation:
  title: Assistant
  key: de_assistant
  order: -1
  parent: de
---

Hier steht ein kurzes Intro zum Assistant

> Und eine Warnung zum Datenschutz

<div class="assistant-page" data-locale="{{ locale }}" data-api-base="http://192.168.7.224:3000">
  <section class="assistant-panel">
    <form id="promptForm" class="assistant-form">
      <label for="question" class="assistant-label">Prompt</label>
      <textarea
        id="question"
        name="question"
        rows="6"
        placeholder="Beschreibe das gewünschte JavaScript..."
        required
      ></textarea>
      <label class="assistant-checkbox">
        <input id="includeCode" type="checkbox" />
        Aktuellen Code in Anfrage einbeziehen
      </label>
      <div class="assistant-actions">
        <button type="submit" id="submitBtn">Generieren</button>
        <span class="assistant-status" id="status">Bereit</span>
      </div>
    </form>
  </section>

  <section class="assistant-panel">
    <div class="assistant-output-header">
      <h3>Ausgabe</h3>
      <button class="ghost" id="copyBtn" type="button" data-label-default="Kopieren">Kopieren</button>
      <button class="ghost" id="clearBtn" type="button">Leeren</button>
    </div>
    <div class="assistant-output-grid">
      <div class="assistant-output-block">
        <div id="output" class="assistant-output">
          <p class="empty">Noch keine Antwort.</p>
        </div>
      </div>
      <div class="assistant-output-block">
        <h4>Funktionen</h4>
        <ul id="functionList" class="assistant-function-list">
          <li class="empty">Noch keine Funktionen.</li>
        </ul>
      </div>
    </div>
  </section>
</div>

<script src="/js/assistant.js"></script>
