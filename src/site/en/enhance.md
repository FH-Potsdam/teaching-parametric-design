---
title: Enhance
eleventyNavigation:
  title: Enhance
  key: en_enhance
  order: -1
  parent: en
---

This interface allows you to enrich existing p5js code with links. Send your code to the API and receive it back with linked function names and a list of the functions used.

<div class="enhance-page" data-locale="{{ locale }}" data-api-base="https://fb4-meier-ml.fh-potsdam.de">
  <section class="assistant-panel">
    <form id="promptForm" class="assistant-form">
      <label for="code" class="assistant-label">Code</label>
      <textarea
        id="code"
        name="code"
        rows="10"
        placeholder="Paste your p5js code here..."
        required
      ></textarea>
      <div class="assistant-actions">
        <button type="submit" id="submitBtn">Enhance</button>
        <span class="assistant-status" id="status">Idle</span>
      </div>
    </form>
  </section>

  <section class="assistant-panel">
    <div class="assistant-output-header">
      <h3>Output</h3>
      <button class="ghost" id="copyBtn" type="button" data-label-default="Copy">Copy</button>
      <button class="ghost" id="clearBtn" type="button">Clear</button>
    </div>
    <div class="assistant-output-grid">
      <div class="assistant-output-block">
        <div id="output" class="assistant-output">
          <p class="empty">No response yet.</p>
        </div>
      </div>
      <div class="assistant-output-block">
        <h4>Functions</h4>
        <ul id="functionList" class="assistant-function-list">
          <li class="empty">No functions yet.</li>
        </ul>
      </div>
    </div>
  </section>
</div>

<script id="assistantVideoIndex" type="application/json">{{ collections.videoLibrary | json | safe }}</script>
<script src="/js/enhance.js"></script>
