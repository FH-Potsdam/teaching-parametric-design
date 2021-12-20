**Parametric Design**

## Open CV

CV stands for Computer Vision. Its a set of operations to manipulate and analyze images. Its [available](https://docs.opencv.org/4.x/) in a variety of programing languages.

### Setup

For using OpenCV you need to add two libraries to your folder structure. From this [website](https://github.com/orgicus/p5.js-cv/tree/main/lib) download **opencv.js** and **p5.cv.min.js** (click on raw and then save) and add it to *code/libraries/* and 
*code/libraries/p5js/libraries/* . In your **index.html** file update to:

```html
<script src="../libraries/p5js/p5.min.js"></script>
<script src="../libraries/p5js/libraries/p5.svg.js"></script>
<script src="../libraries/opencv.js"></script>
<script src="../libraries/p5js/libraries/p5.cv.min.js"></script>
```

The example image can be found [here](https://github.com/FH-Potsdam/teaching-parametric-design/tree/main/code/testing).

### Inputs

We can apply opencv commands to images and videos. To actually work witht he input, the inputs are transformed into matrices, a matrix is basically a multidimensional array (in opencv in short: mat).

### Inputs - Images

```js
let img;

function preload() {
  img = loadImage('bunny.png');
}

function draw() {
  // make sure opencv is ready
  if (p5.cv.isReady) {
    let matrixImage = p5.cv.imageToNewMat(img);
    // ... more opencv
  }
}
```

### Inputs - Videos

Webcam as input:

```js
let myCapture;

function setup() {
  myCapture = createCapture(VIDEO);
  myCapture.size(320, 240);
  myCapture.hide();

  p5.cv.onComplete = setupCV;
}

let myCVCapture;
let matrixImage;

function setupCV() {
  // create a CV capture helper
  myCVCapture = p5.cv.getCvVideoCapture(myCapture);
  // empty matrix to hold video frames (same size as video)
  myMat = p5.cv.getRGBAMat(320, 240);
}

function hasSameSize(capture, mat){
  if (!capture) return false;
  return capture.video.width === mat.cols && capture.video.height === mat.rows;
}

function draw() {
  // sometimes it can take a while before the video capture kicks in
  if (p5.cv.isReady && hasSameSize(myCVCapture, matrixImage)) {
    // read from CV Capture into matrixImage
    myCVCapture.read(matrixImage);
    // ... more opencv
  }
}
```

Video as input:

```js
let myCapture;

function setup() {
  myCapture = createVideo(['test.mov'], myVideoLoaded);
  p5.cv.onComplete = setupCV;
}

function myVideoLoaded() {
  myCapture.loop();
  myCapture.volume(0);
}

let myCVCapture;
let matrixImage;

function setupCV() {
  // create a CV capture helper
  myCVCapture = p5.cv.getCvVideoCapture(myCapture);
  // empty matrix to hold video frames (same size as video)
  myMat = p5.cv.getRGBAMat(320, 240);
}

function hasSameSize(capture, mat){
  if (!capture) return false;
  return capture.video.width === mat.cols && capture.video.height === mat.rows;
}

function draw() {
  // sometimes it can take a while before the video capture kicks in
  if (p5.cv.isReady && hasSameSize(myCVCapture, matrixImage)) {
    // read from CV Capture into matrixImage
    myCVCapture.read(matrixImage);
    // ... more opencv
  }
}
```


### Print Matrix

When we want to display a matrix, we can either print it directly or convert it back to an image:

```js
p5.cv.drawMat(matrixImage, xPosition, yPosition);

let outputImage;
p5.cv.matToImage(matrixImage, outputImage);
image(outputImage, xPosition, yPosition);
```

### Modifying images (matrices)

Change from color to grayscale:

```js
p5.cv.convertColor(matrixImage, matrixImage, cv.COLOR_RGBA2GRAY);
```

Threshold:

```js
p5.cv.autothreshold(matrixImage);
```

Blurring:
```js
p5.cv.GaussianBlur(matrixImage, 50);
p5.cv.blur(matrixImage, 50);
```

Bayer filter:

```js
// COLOR_BayerBG2RGB, COLOR_BayerGB2RGB, COLOR_BayerRG2RGB, COLOR_BayerGR2RGB
cv.cvtColor(matrixImage, matrixImage, cv.COLOR_RGBA2GRAY);
cv.cvtColor(matrixImage, matrixImage, cv.COLOR_BayerGR2RGB);
```
> Note that the cvtColor function comes directy from openCV, not the p5js-library

### Analysing Images

Find the brightest point in an image (matrix):

```js
const brightestPoint = p5.cv.findMaxLocation(matrixImage);
noFill();
stroke('red');
circle(brightestPoint.x, brightestPoint.y, 30);
```

Find contours in the image (matrix). To increase the performance you can define a target color for contour identification. Experiment with the threshold, min- and max-area:

```js
const sketchWidth = 400;
const sketchHeight = 400;

let img;

function preload() {
  img = loadImage('bunny.png');
}

let myContourFinder;
let targetColor;

function setup () {
  createCanvas(sketchWidth * 2, sketchHeight);

  myContourFinder = new ContourFinder();
  myContourFinder.setMinAreaRadius(10);
  myContourFinder.setMaxAreaRadius(200);
  myContourFinder.setThreshold(128);
  myContourFinder.setFindHoles(true); // false

  targetColor = color(255, 0, 0);
}

let matrixImage;
let quads = [];
let threshold;

function draw() {
  background(255);
  // make sure opencv is ready
  if (p5.cv.isReady) {
    matrixImage = p5.cv.imageToNewMat(img);

    // search for contours in the latest frame
		myContourFinder.findContours(matrixImage);

		// count contours
    let n = myContourFinder.size();
    // clear previos quads
    quads.length = 0;
    // for each contour
		for(let i = 0; i < n; i++) {
      // fit a quad
			quads[i] = myContourFinder.getFitQuad(i);
		}

    // display Mat
    p5.cv.drawMat(matrixImage, 0, 0);
    // draw contours
    stroke(0);
    myContourFinder.draw();
    // draw quads
    stroke('#ec008c');
    noFill();
    for (let i = 0; i < n; i++) {
      p5.cv.drawContour(quads[i]);
    }

    translate(8, 75);
    fill(0);
    rect(-3, -3, 64 + 6, 64 + 6);
    fill(targetColor);
    rect(0, 0, 64, 64);
  }
}

// select a target color from the image
function mousePressed() {
	targetColor = img.get(mouseX, mouseY);
	myContourFinder.setTargetColor(targetColor, p5.cv.TrackingColorMode.TRACK_COLOR_RGB);
}
```

Detect changes in an image. You can use this for example to create a background state and then when something changes you can easily extract that part, similar to how virtual backgrounds work in zoom or skype for example. There is a manual version for grayscale and a special **RunningBackground** for a color version:

```js
let myCapture;
let myCVCapture;
let myMat;
let myMatGrayscale;
let myBackground;
let myThresholdedMat;
let myMatRGB;
let myBackgroundMat;
let differenceMat;

function setup() {
  createCanvas(640, 240);
  stroke(0, 192, 0);
  strokeWeight(3);
  myCapture = createCapture(VIDEO);
  myCapture.size(320, 240);
  myCapture.hide();
  p5.cv.onComplete = setupCV;
}

function setupCV() {
  // create a CV capture helper
  myCVCapture = p5.cv.getCvVideoCapture(myCapture);
  // create a CV Mat to read new color frames into
  myMat = p5.cv.getRGBAMat(320, 240);
  // create a CV Mat for color to grayscale conversion
  myMatGrayscale = new cv.Mat();
  myMatRGB = p5.cv.getRGBMat(320, 240);
  myBackgroundMat = p5.cv.getRGBMat(320, 240);
  differenceMat = p5.cv.getRGBMat(320, 240);
  // create a CV Mat to accumulate threshold into
  myThresholdedMat = p5.cv.getGrayscaleMat(320, 240);
  // init Running Background
  myBackground = new RunningBackground(320, 240);
  myBackground.setLearningTime(30);
  myBackground.setThresholdValue(10);
}

function hasSameSize(capture, mat){
  if (!capture) return false;
  return capture.video.width === mat.cols && capture.video.height === mat.rows;
}

function draw() {
  if (p5.cv.isReady && hasSameSize(myCVCapture, myMat)) {
    // read from CV Capture into myMat
    myCVCapture.read(myMat);
    // convert Mat to grayscale
    p5.cv.copyGray(myMat, myMatGrayscale);
    // update Running Background
    myBackground.update(myMatGrayscale, myThresholdedMat);
    // display Mat
    p5.cv.drawMat(myThresholdedMat, 0, 0);

    let presenceSum = 0;
    // // convert to from RGBA to RGB
    p5.cv.convertColor(myMat, myMatRGB, cv.COLOR_RGBA2RGB);
    // // Compute the absolute difference of the red, green, and blue channels
    // // subtract myBackgroundMat from myMat and store result
    cv.absdiff(myMatRGB, myBackgroundMat, differenceMat);
    // // display difference Mat
    p5.cv.drawMat(differenceMat, 320, 0);
    // // Add these differences to the running tally
    presenceSum = p5.cv.sumData(differenceMat.data);
    // // Print out the total amount of movement
    console.log(presenceSum / (differenceMat.total() * 255 * 3));
  }
}

// reset the background
function keyPressed() {
  if (p5.cv.isReady && hasSameSize(myCVCapture, myMat)) {
    p5.cv.copyRGB(myMatRGB, myBackgroundMat);
  }
}
```
