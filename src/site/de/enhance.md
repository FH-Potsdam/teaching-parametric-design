---
title: Enhance
eleventyNavigation:
  title: Enhance
  key: de_enhance
  order: -1
  parent: de
---

Über dieses Interface kannst du bestehenden p5js-Code mit Links anreichern lassen. Schicke deinen Code an die API und erhalte ihn zurück mit verlinkten Funktionsnamen und einer Liste der verwendeten Funktionen.

<div class="enhance-page" data-locale="{{ locale }}" data-api-base="https://fb4-meier-ml.fh-potsdam.de">
  <section class="assistant-panel">
    <form id="promptForm" class="assistant-form">
      <label for="code" class="assistant-label">Code</label>
      <textarea
        id="code"
        name="code"
        rows="10"
        placeholder="Füge hier deinen p5js-Code ein..."
        required
      ></textarea>
      <div class="assistant-actions">
        <button type="submit" id="submitBtn">Anreichern</button>
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
<script src="/js/enhance.js"></script>
