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
    width: 100%;
    height:100vh;
  }
  input{
    width: 512px;
  }
</style>


  <select>
    <option value="" selected="selected">Auswählen</option>
  </select><br /><br />
  <img id="img" /><br /><br/>
  <input type="range" min="1" max="49" />

<script>
const types = ["", "old_", "future_"];
const labels = ["modern", "historic", "futuristic"];
const seeds = 9;
const steps = 49;

const sel = document.querySelector("select");
types.forEach((t, ti) => {
  const section = document.createElement("option");
    section.setAttribute("disabled", "disabled");
    section.innerHTML = labels[ti];
  sel.appendChild(section);
  for (let s = 1; s <= seeds; s += 1) {
    const o = document.createElement("option");
    o.setAttribute("value", t + s);
    o.innerHTML = "Seed:" + s;
    sel.appendChild(o);
  }
});

const image = document.querySelector("#img");
const images = [];
sel.addEventListener("change", () => {
  for (let s = 1; s <= steps; s += 1) {
    images[s] = new Image();
    images[s].src = `../out/${sel.value}_${s}.png`;
  }
  image.src = images[1].src;
  range.value = 1;
});

const range = document.querySelector("input");
range.addEventListener("input", () => {
  image.src = images[range.value].src;
});

</script>