---
title: Assistant
eleventyNavigation:
  title: Assistant
  key: en_assistant
  order: -1
  parent: en
---

This interface allows you to generate code for our p5js boilerplate. This interface can only return code optimized for p5js; this is due to a special [system prompt](https://github.com/FH-Potsdam/teaching-parametric-design-backend/blob/main/src/requestCode.ts) that is sent with your request. This is not a generic chatbot or a coding tool. Please try to formulate your requests as precisely as possible. If you are not entirely satisfied with the result, you can also send the code again with an improved request (see checkbox).

> Requests to the code API are stored anonymously for security and research purposes. Please do not send any personal information to the API.

<div class="assistant-page" data-locale="{{ locale }}" data-api-base="https://fb4-meier-ml.fh-potsdam.de">
  <section class="assistant-panel">
    <form id="promptForm" class="assistant-form">
      <label for="question" class="assistant-label">Prompt</label>
      <textarea
        id="question"
        name="question"
        rows="6"
        placeholder="Describe the JavaScript you want..."
        required
      ></textarea>
      <label class="assistant-checkbox">
        <input id="includeCode" type="checkbox" />
        Include current code in request
      </label>
      <div class="assistant-actions">
        <button type="submit" id="submitBtn">Generate</button>
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
        <h4>Highlighted</h4>
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
<script src="/js/assistant.js"></script>
