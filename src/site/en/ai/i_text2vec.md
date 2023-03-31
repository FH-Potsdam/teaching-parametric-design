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
.result table{
  width: 100%;
  margin: 50px auto;
}

.result table td{
  text-overflow:ellipsis;
  overflow-wrap: break-word;
}
</style>

<div class="input">
<label for="text2vec_input">Text input</label>
<p>Split texts by line break, up to 10 texts can be analysed.</p>
<textarea id="text2vec_input" style="width:100%; height:250px;">
Robot
Car
Building
Cat
Dog
</textarea>
<button id="text2vec_btn">Start analysis</button>
</div>

<div class="result">
<h2>Embeddings</h2>
<table>
<thead>
  <tr>
  <th>ID</th>
  <th>Text</th>
  <th>Vectors</th>
  </tr>
</thead>
<tbody id="text2vec_tbl"></tbody>
</table>
<div id="text2vec_matrix">
<h2>Distance Matrix</h2>
<table></table>
</div>
<div id="text2vec_2d">
<h2>Dimensionality Reduction - Distances</h2>
<svg width="500" height="500" style="background:black;"></svg></div>
</div>

<script src="/js/math.min.js"></script>
<script src="/js/mds.js"></script>
<script src="/js/numeric.min.js"></script>
<script>
const btn = document.querySelector("#text2vec_btn");
const input = document.querySelector("#text2vec_input");
const table = document.querySelector("#text2vec_tbl");
const mat = document.querySelector("#text2vec_matrix table");
const svg = document.querySelector("#text2vec_2d svg");
btn.addEventListener("click", async () => {
  if (input.value.length > 0) {
    btn.disable = true;
    const text = [...input.value.split(/\r?\n|\r|\n/g).map(l => l.trim()).filter(l => l.length > 0)];
    input.value = "";
    const response = await fetch("http://192.168.7.224:5050/use/embed", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    });

    response.json().then(data => {
      table.innerHTML = "";
      mat.innerHTML = "";
      svg.innerHTML = "";
      data.forEach((d, i) => {
        table.innerHTML += `<tr><td>${i}</td><td>${text[i]}</td><td class="vec">${JSON.stringify(d).split(",").join(", ").substring(0, 200)}...]</td></tr>`;
      });
      if (data.length > 1) {
        const matrix = [];
        let max = 0;
        data.forEach((d,i) => {
          const m = [];
          data.forEach((dd,ii) => {
            const dist = math.distance(d, dd);
            max = Math.max(max, Math.abs(dist));
            m.push(dist);
          });
          matrix.push(m);
        });
        console.log(max);
        let matHead = "<tr><td></td>";
        data.forEach((d,i) => {
          matHead += `<th>${i}</th>`;
        });
        matHead += "</tr>";
        mat.innerHTML += matHead;
        matrix.forEach((m,i) => {
          let matBod = `<tr><th>${i}</th>`;
          m.forEach(d => {
            matBod += `<td style="background:rgba(255,0,0,${d/max});">${d.toFixed(2)}</td>`;
          });
          matBod += "</tr>";
          mat.innerHTML += matBod;
        });
        const vec2d = mds.classic(matrix);
        vec2d.forEach((v, i) => {
          svg.innerHTML += `<circle cx="${250 + v[0] * 250}" cy="${250 + v[1] * 250}" r="5" fill="white" />`;
        });
        vec2d.forEach((v, i) => {
          svg.innerHTML += `<text x="${250 + v[0] * 250 - 10}" y="${250 + v[1] * 250 - 7}" style="fill:red; font-size:12px;">${i}</text>`;
        });
      }
      btn.disable = false;
    });
  }
});
</script>