---
title: Assistant
eleventyNavigation:
  title: Assistant
  key: de_assistant
  order: -1
  parent: de
---

Über dieses Interface kannst du dir für unsere p5js-boilerplate Code generieren lassen. Dieses Interface kann nur für p5js optimierten Code zurückgeben, dies liegt an einem speziellen [System-Prompt](https://github.com/FH-Potsdam/teaching-parametric-design-backend/blob/main/src/requestCode.ts), welchen mit deiner Anfrage verschicken. Dies ist kein generischer Chatbot oder ein Coding-Werkzeug. Versuche deine Anfragen möglichst präzise zu formulieren. Wenn du mit dem Ergebnis nicht ganz zufrieden bist, kannst du den Code auch nochmal mit einer verbesserten Anfrage mitschicken (siehe Checkbox).

> Die Anfragen an die Code-API werden zu Sicherheits- und Forschungszwecken anonym gespeichert. Bitte keine persönlichen Informationen an die API schicken.

<div class="assistant-page" data-locale="{{ locale }}" data-api-base="https://fb4-meier-ml.fh-potsdam.de">
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

<script id="assistantVideoIndex" type="application/json">{{ collections.videoLibrary | json | safe }}</script>
<script src="/js/assistant.js"></script>
