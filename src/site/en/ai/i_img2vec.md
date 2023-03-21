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
  #preview { width: 1px; height: 1px; overflow:hidden; visibility:hidden;}
  #table { font-size:8px; }
  #table tr, #table td, #table table {
    padding:0;
    margin:0;
    text-align:center;
  }
</style>

<div id="input"></div>
<div id="preview"></div>
<div id="canvas"></div>
<div id="table"><table></table></div>


<script>
let input;
let img, imgW, imgH;

const t = document.querySelector("#table table");

function setup() {
  input = createFileInput(handleFile);
  input.parent(document.querySelector("#input"));
  const canvas = createCanvas(512, 1536);
  canvas.parent("#canvas");
  noLoop();
}

function handleFile(file) {
  if (file.type === 'image') {
    document.querySelector("#preview").innerHTML = "";
    img = createImg(file.data, '', 'anonymous', () => {
      img.parent("#preview");
      imgW = img.width;
      imgH = img.height;

      const iSize = 64;

      const g = createGraphics(iSize, iSize);
      let ratio = 0;
      if (imgW > imgH) {
        ratio = iSize / imgW;
      } else {
        ratio = iSize / imgH;
      }
      g.background("black");
      g.image(
        img,
        (iSize - imgW * ratio) / 2,
        (iSize - imgH * ratio) / 2,
        imgW * ratio,
        imgH * ratio,
        0, 0,
        imgW, imgH
      );
      g.loadPixels();

      background(255);
      stroke("black");

      push();

      fill("black");
      rect(0,0,512,512);
      image(
        img,
        (iSize - imgW * ratio) / 2 * 8,
        (iSize - imgH * ratio) / 2 * 8,
        imgW * ratio * 8,
        imgH * ratio * 8,
        0, 0,
        imgW, imgH
      );
      noFill();
      rect(
        (iSize - imgW * ratio) / 2 * 8,
        (iSize - imgH * ratio) / 2 * 8,
        imgW * ratio * 8,
        imgH * ratio * 8
      );

      translate(0, 512);
      
      for (let x = 0; x < iSize; x += 1) {
        for (let y = 0; y < iSize; y += 1) {
          const id = (y*iSize + x) * 4;
          fill(g.pixels[id], g.pixels[id + 1], g.pixels[id + 2]);
          rect(x * 8, y * 8, 8, 8);
        }
      }

      translate(0, 512);

      for (let x = 0; x < iSize; x += 1) {
        for (let y = 0; y < iSize; y += 1) {
          const id = (y*iSize + x) * 4;
          fill((g.pixels[id] + g.pixels[id + 1] + g.pixels[id + 2]) / 3);
          rect(x * 8, y * 8, 8, 8);
        }
      }

      pop();

      t.innerHTML = "";
      let tb = "";

      for (let x = 0; x < iSize; x += 1) {
        tb += "<tr>";
        for (let y = 0; y < iSize; y += 1) {
          const id = (y*iSize + x) * 4;
          tb += `<td>${Math.round((g.pixels[id] + g.pixels[id + 1] + g.pixels[id + 2]) / 3)}</td>`;
        }
        tb += "</tr>";
      }

      t.innerHTML = tb;
    });
  } else {
    img = null;
  }
}
</script>