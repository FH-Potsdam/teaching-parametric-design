**Parametric Design**

## Images

In p5js we can also load, edit and manipulate images. As all external ressources, we load our images in the **preload** function:

```js
let img;

function preload() {
  img = loadImage('bunny.png');
}
```

To simply draw an image onto the canvas, use the **image** function:

```js
function draw() {
  // x and y position
  image(img, 0, 0);
}
```

You can access the width and height of your image through: `img.width` and `img.height`. We can apply filters to the image. Here is a [list of all filters](https://p5js.org/reference/#/p5.Image/filter):

```js
img.filter(THRESHOLD);
```

We can also access and manipulate individual pixels. The pixels array, activated by `loadPixels()` is an array of colors, depending on if the image is RGB, RGBA or Grayscale, the number of elements in the list varies (see below). The pixels are described from top left to buttom right (line after line):

#### RGBA
```
R1,G1,B1,ALPHA1,R2,G2,B2,ALPHA2,...
```

#### RGB
```
R1,G1,B1,R2,G2,B2,...
```

#### Grayscale
```
G1,G2,G3,...
```

If you change pixels and want it take effect you need to call **updatePixels()**:

```js
img.loadPixels();
img.pixels[0] = 255;
img.updatePixels();
image(img, 0, 0);
```
There is [much more](https://p5js.org/reference/#/p5.Image) you can do with images.

## Canvas as image

If you are using the pixel renderer, you can also access the canvas itself, as if it was an image, simply use the above functions without the object-prefix:

```js
function draw() {
  loadPixels();
  pixels[0] = 255;
  updatePixels();
}
```

## Full Example

The following example takes an image and sorts the pixels through a certain sorting function (three possible examples below) and then draws those pixels in order.

The example image can be found [here](https://github.com/FH-Potsdam/teaching-parametric-design/tree/main/code/testing).

```js
const sketchWidth = 400;
const sketchHeight = 400;

function preload() {
  img = loadImage('bunny.png');
}

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

// https://www.py4u.net/discuss/307172
function rgbToHsl(c) {
  var r = c[0]/255, g = c[1]/255, b = c[2]/255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if(max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return new Array(h * 360, s * 100, l * 100);
}

function draw() {
  background(255);
  // img.filter(GRAY); // THRESHOLD, INVERT, POSTERIZE, DILATE, BLUR, ERODE

  image(img, 0, 0);

  const colors = [];

  img.loadPixels();
  
  for (let i = 0; i < img.pixels.length; i += 4) {
    colors.push([
      img.pixels[i],
      img.pixels[i + 1],
      img.pixels[i + 2],
      img.pixels[i + 3],
    ]);
  }

  // Brightness sorting
  // colors.sort(function (a, b) {
  //   const brightA = a[0] + a[1] + a[2];
  //   const brightB = b[0] + b[1] + b[2];
  //   // direction
  //   return brightA - brightB;
  // });

  // HSL sorting
  // colors.sort(function (a, b) {
  //   return rgbToHsl(a)[0] - rgbToHsl(b)[0];
  // });

  // Sort by colors
  const sortOrder = [2,0,1];
  colors.sort(function (a, b) {
    let diff = a[sortOrder[0]] - b[sortOrder[0]];
    if (diff === 0) {
      diff = a[sortOrder[1]] - b[sortOrder[1]];
      if (diff === 0) {
        diff = a[sortOrder[2]] - b[sortOrder[2]];
      }
    }
    return diff;
  });

  // draw pixels
  for (let c = 0; c < colors.length; c += 1) {
    const x = c - Math.floor(c / 400) * 400;
    const y = Math.floor(c / 400);
    noStroke();
    fill(color(colors[c][0], colors[c][1], colors[c][2]));
    rect(x, y, 1, 1);
  }

  noLoop();
}
```

### Extract primary colours

For the next example you need to download [color-thief.umd.js](https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js) and add it to the *libraries* folder.

With this tool you can select any image on a website or use the canvas of our p5js sketch:

```js
let img;

function preload() {
  img = loadImage('bunny.png');
}

let colorThief;

function setup() {
  colorThief = new ColorThief();
  createCanvas(400, 400);
}

function draw() {
  image(img, 0, 0);

  const canvas = document.querySelector('canvas');

  const color = colorThief.getColor(canvas);
  const palette = colorThief.getPalette(canvas);

  console.log(color, palette);
  noLoop();
}
```