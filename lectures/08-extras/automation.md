**Parametric Design**

## Automation

When you want to export a lot of images from your code, for example, to create a video from an animation, just using `save()` is not very efficient. There is a quick solution to overcome this limitation.

### Setup

First you need to install [NodeJS](https://nodejs.org/en/download/).

Then open a new Terminal, in VS Code simply use the menu Termin > New Terminal and type: `cd code/nodejs-example`. This makes your Terminal navigate to this folder. Now inside this folder type `npm install` into the terminal. This installs the software we need to run our image-saving-app.

### Start the server

To overcome our problem we will start a little server and then we can send the content of the canvas or svg to this server and the server will write this to a file. To start the server enter this into your terminal: `node index.js`.

Now our server runs under: `http://localhost:3001`

### Save images
Inside your `sketch.js` you can now send image data to this server. Here is an example. Please note that depending on if you are using Pixel or SVG, you need to use different saving-functions:

```js
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

  // to be sure everything is done. this makes your code wait 1 second before saving the file.
  wait(1000);

  // 
  saveToServerSVG();
  //saveToServerPNG();

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
```