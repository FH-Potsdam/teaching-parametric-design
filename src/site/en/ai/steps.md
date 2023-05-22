---
title: Artificial Design
eleventyNavigation:
  title: Intro
  key: en_ai_intro
  parent: en_ai
  navHide: true
  order: 1
---

<style>
  body, html{
    margin:0;
    padding:0;
    border:none;
    background-color: rgba(0,0,0,0.7);
    font-family: sans-serif;
    color: white;
  }

  img {
    width: 50px;
    height: auto;
  }

  table, tr, th, td {
    margin:0;
    padding:0;
    border:none;
    line-height: 0;
  }

  thead th, tfoot th {
    font-size:8px;
    text-align: center;
    line-height: 20px;
    vertical-align: center;
  }

  tbody th {
    vertical-align: center;
  }

  td:nth-child(3n+4){
    padding-right: 10px;
  }
</style>

<table>
  <thead><tr></tr></thead>
  <tbody>

  </tbody>
  <tfoot><tr></tr></tfoot>
</table>

<script>
const types = ["", "old_", "future_"];
const labels = ["modern", "historic", "futuristic"];
const seeds = 9;
const steps = 49;

const head = document.querySelector("thead tr");
const foot = document.querySelector("tfoot tr");
let headstr = "<th></th>";
for (let s = 1; s <= seeds; s += 1) {
  labels.forEach(l => {
    headstr += `<th>${l}</th>`;
  });
}
head.innerHTML = headstr;
foot.innerHTML = headstr;

const body = document.querySelector("tbody");
let bodystr = "";
for (let st = 1; st <= steps; st += 1) {
  bodystr += `<tr><th>${st}</th>`;
  for (let s = 1; s <= seeds; s += 1) {
    types.forEach(t => {
      bodystr += `<td><img src="../out/${t+s}_${st}.png" /></td>`;
    });
  }
}
body.innerHTML = bodystr;

</script>