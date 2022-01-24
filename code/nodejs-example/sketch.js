const sketchWidth = 400;
const sketchHeight = 400;
// There is a maximum canvas size: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size

function setup () {
  createCanvas(sketchWidth, sketchHeight, SVG);
  pixelDensity(1);
}

function draw() {
  background(255);
  stroke('red');
  circle(200, 200, 50);

  wait(3000);

  saveToServerSVG();

  noLoop();
}

async function wait(time) {
  await new Promise(resolve => {
    setTimeout(() => {resolve()}, time);
  });
}

function saveToServerPNG() {
  const canvas = document.querySelector('canvas');
  const dataURL = canvas.toDataURL('image/png');
  const params = "filename=test.png&png=" + encodeURIComponent(dataURL);

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log('upload successful');
    }
  };
  xhttp.open("POST", "http://localhost:3001/upload/png");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send(params);
}

function saveToServerSVG() {
  const svg = document.querySelector('svg');
  const svgData = encodeURIComponent(svg.outerHTML);

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log('upload successful');
    }
  };
  xhttp.open("POST", "http://localhost:3001/upload/svg");
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhttp.send("filename=test.svg&svg=" + svgData);
}

