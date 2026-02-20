---
title: Assistant
eleventyNavigation:
  title: Assistant
  key: en_assistant
  order: -1
  parent: en
---

<div class="assistant-page" data-locale="{{ locale }}" data-api-base="http://192.168.7.224:3000">
  <header class="assistant-header">
    <p class="assistant-kicker">Assistant</p>
    <h2>Parametric Design Generator</h2>
    <p class="assistant-subhead">Send a prompt to the backend and preview the highlighted JavaScript response.</p>
  </header>

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
      <div class="assistant-actions">
        <button type="submit" id="submitBtn">Generate</button>
        <span class="assistant-status" id="status">Idle</span>
      </div>
    </form>
  </section>

  <section class="assistant-panel">
    <div class="assistant-output-header">
      <h3>Output</h3>
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
      <div class="assistant-output-block">
        <div class="assistant-output-title">
          <h4>Raw code</h4>
          <button class="ghost" id="copyBtn" type="button" data-label-default="Copy">Copy</button>
        </div>
        <pre id="rawOutput" class="assistant-raw-output">No code yet.</pre>
      </div>
    </div>
  </section>
</div>

<script src="/js/assistant.js"></script>
