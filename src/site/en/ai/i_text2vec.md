---
title: Artificial Design
eleventyNavigation:
  title: Intro
  key: en_ai_intro
  parent: en_ai
  navHide: true
  order: 1
---

<style></style>

<script></script>

<div class="input">
<label for="text2vec_input">Text input</label>
<p>Split texts by line break, up to 10 texts can be analysed.</p>
<textarea id="text2vec_input" style="width:100%; height:250px;"></textarea>
<button id="text2vec_btn">Start analysis</button>
</div>

<div class="result">
<table>
<thead>
  <tr>
  <th>ID</th>
  <th>Text</th>
  <th>Vectors</th>
  </tr>
</thead>
<tbody></tbody>
</table>
</div>