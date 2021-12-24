**Parametric Design**

## Machine Learning ([ml5js](https://ml5js.org/))

In the following a few examples on how to use machine learning with p5js (or in JavaScript in general). You can find more examples [here](https://github.com/ml5js/ml5-library/tree/main/examples/p5js).

### Setup

For using ml5js you need to add a library to your folder structure. Download [this](https://unpkg.com/ml5@latest/dist/ml5.min.js) and add it to *code/libraries/*. In your **index.html** file update to:

```html
<script src="../libraries/p5js/p5.min.js"></script>
<script src="../libraries/p5js/libraries/p5.svg.js"></script>
<script src="../libraries/ml5.min.js" type="text/javascript"></script>
```

The example image can be found [here](https://github.com/FH-Potsdam/teaching-parametric-design/tree/main/code/testing).

### A few words on ml5js

#### 1. Models

Every machine learning feature requires models. Those models are complex and big in size. Most ml5js models are downloaded from google, where they are hosted.

#### 2. Biases

The above models are mostly generated from so called training data. For example an object detection model like YOLO (you only look once), is trained on thousands of manually classified images. As a result, the models can be biased and imperfect, because the training data was not good enough. So whenever you use a model, you need to take this into account.

#### 3. Danger ahead

Building machine learning applications in the browser is very simple, because we can make use of a cross-browser and cross-os GPU-API (WebGL). Wenn need the GPU to compute ML applications quickly. But when done wrong, it can eat up the whole memory of your GPU. Most of the times your browser will simply freeze, but in rare cases it can crash your system. So to be safe, save regularly and try not to have any other tabs and windows open.

### Sentiment Analysis

Analyse if a text is positive, negative or netural (english language).

```js
let sentiment;
let paragraph;
let input;
let button;

function setup() {
  noCanvas();
  paragraph = createP('Loading Model...');

  input = createInput('Add a sentence here.');
  input.attribute('size', 75);

  button = createButton('submit');
  button.mousePressed(getSentiment);

  sentiment = ml5.sentiment('movieReviews', modelReady);
}

function modelReady() {
  paragraph.html('Model ready.');
}

function getSentiment() {
  const text = input.value();
  const prediction = sentiment.predict(text);

  paragraph.html('Sentiment score: ' + prediction.score);
}
```

### Detecting hand poses in images/videos/webcam

```js
let handpose;
let video;
let predictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", function (results) {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0, width, height);

  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}
```

### Detect face in images/video/webcam

```js
let facemesh;
let video;
let predictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  facemesh = ml5.facemesh(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new predictions are made
  facemesh.on("predict", results => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0, width, height);

  // We call function to draw all keypoints
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;

    // Draw facial keypoints.
    for (let j = 0; j < keypoints.length; j += 1) {
      const [x, y] = keypoints[j];

      fill(0, 255, 0);
      ellipse(x, y, 5, 5);
    }
  }
}
```

### Detect Face from images/video/webcam

Similar to the above, but more features:

```js
let faceapi;
let video;
let detections;

// by default all options are set to true
const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
};

function setup() {
  createCanvas(360, 270);

  // load up your video
  video = createCapture(VIDEO);
  video.size(width, height);
  // video.hide(); // Hide the video element, and just show the canvas
  faceapi = ml5.faceApi(video, detectionOptions, modelReady);
  textAlign(RIGHT);
}

function modelReady() {
  console.log("ready!");
  console.log(faceapi);
  faceapi.detect(gotResults);
}

function gotResults(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result)
  detections = result;

  // background(220);
  background(255);
  image(video, 0, 0, width, height);
  if (detections) {
    if (detections.length > 0) {
      // console.log(detections)
      drawBox(detections);
      drawLandmarks(detections);
    }
  }
  faceapi.detect(gotResults);
}

function drawBox(detections) {
  for (let i = 0; i < detections.length; i += 1) {
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x;
    const y = alignedRect._box._y;
    const boxWidth = alignedRect._box._width;
    const boxHeight = alignedRect._box._height;

    noFill();
    stroke(161, 95, 251);
    strokeWeight(2);
    rect(x, y, boxWidth, boxHeight);
  }
}

function drawLandmarks(detections) {
  noFill();
  stroke(161, 95, 251);
  strokeWeight(2);

  for (let i = 0; i < detections.length; i += 1) {
    const mouth = detections[i].parts.mouth;
    const nose = detections[i].parts.nose;
    const leftEye = detections[i].parts.leftEye;
    const rightEye = detections[i].parts.rightEye;
    const rightEyeBrow = detections[i].parts.rightEyeBrow;
    const leftEyeBrow = detections[i].parts.leftEyeBrow;

    drawPart(mouth, true);
    drawPart(nose, false);
    drawPart(leftEye, true);
    drawPart(leftEyeBrow, false);
    drawPart(rightEye, true);
    drawPart(rightEyeBrow, false);
  }
}

function drawPart(feature, closed) {
  beginShape();
  for (let i = 0; i < feature.length; i += 1) {
    const x = feature[i]._x;
    const y = feature[i]._y;
    vertex(x, y);
  }

  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  }
}
```

### Sentence Encoder

A sentence encoder transforms a text input into an array of 512 vectors (float numbers). Through those numbers we can for example calculate the similarity of two bits of text:

```js
let sentenceEncoder;
const sentences = [
  'I love rainbows',
  'I love rainbows too',
  'I love cupcakes',
  'I love bagels more'
]

function setup(){
  createCanvas(512, 512);
  // background(220);
  colorMode(HSB, 360, 100, 100);
  sentenceEncoder = ml5.universalSentenceEncoder(modelLoaded)
}

function modelLoaded(){
  
  predict();
}

function predict(){
  
  sentenceEncoder.predict(sentences, gotResults);
}

function gotResults(err, result){
  if(err){
    return err;
  }
  console.log(result);

  result.forEach( (item, y) => {
    // console.log(item);
    item.forEach( (val, x) => {
      const l = map(val, -1, 1, 0, 100);
      noStroke();
      fill(360, 100, l);
      rect(x, y * (height/result.length) , 1,  (height/result.length));
    })
  })

}
```

### Object detection

Identifying objects in an image. It cannot detect everything. The classes it can detect are predefined and depend on the yolo version being used:

```js
const yolo = ml5.YOLO(modelReady);
let img;
let objects = [];
let status;

function setup() {
  createCanvas(640, 420);
  img = createImg("bunny.png", imageReady);
  img.hide();
  img.size(640, 420);
}

// Change the status when the model loads.
function modelReady() {
  console.log("model Ready!");
  status = true;
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
  console.log("Detecting");
  yolo.detect(img, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
  objects = results;
}

function draw() {
  // unless the model is loaded, do not draw anything to canvas
  if (status !== undefined) {
    image(img, 0, 0);
    
    for (let i = 0; i < objects.length; i += 1) {
      noStroke();
      fill(0, 255, 0);
      text(
        `${objects[i].label} ${nfc(objects[i].confidence * 100.0, 2)}%`,
        objects[i].x + 5,
        objects[i].y + 15,
      );
      noFill();
      strokeWeight(4);
      stroke(0, 255, 0);
      rect(
        objects[i].x,
        objects[i].y,
        objects[i].width,
        objects[i].height,
      );
    }
  }
}
```
### Detecting body poses in images/videos/webcam

```js
let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select("#status").html("Model Loaded");
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    const pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j += 1) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      const keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i += 1) {
    const skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j += 1) {
      const partA = skeleton[j][0];
      const partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
```
### Generative Adversarial Network (GAN)

> The following example is very GPU intensive

Through GANs we can for example transform the style of an image:

```js
let cartoonGAN;
let video;
let cartoonImg;

function preload() {
  cartoonGAN = ml5.cartoon();
}

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO, videoReady);
  video.size(320, 240);
}

function videoReady() {
  cartoonGAN.generate(video, gotResults);
}

function draw() {
  background(0);
  if (cartoonImg) {
    image(cartoonImg, 0, 0, width, height);
  }
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  cartoonImg = result.image;
  cartoonGAN.generate(video, gotResults);
}
```

### KMEANS Clustering

KMEANS is an algorithmic clustering approach for multi-dimensional data. It helps group similar items. To group/cluster the data, the data needs to organised as objects in an array:

```js
const data = [
  { value1: 1, value2: 5},
  { value1: 5, value2: 2},
  { value1: 10, value2: 5},
];
```

The keys of all objects need to be the same. It works best for numeric values. Before beginning to cluster, you need to decide how many clusters you want. There are mathematical/algorithmic ways in figuring out what the ideal number of clusters are, but its complex and strongly depends on the data. Best simply trial and error. Depending on the array size, the clustering can take quite a while, so be patient.

The result of the clustering is an array with the original values of the *data* with an addition attribute *centroid*, which holds the id of the cluster of each object.

The following example takes the pixels of an image (see [images](images.md)) and creates an array with RGB values:

```js
let img;
let kmeans;
let kmeansReady = false;
const imageSize = 60;
const offset = 10;

function preload() {
  img = loadImage('bunny.png');
}

function setup() {
  createCanvas(400, 400);

  img.resize(imageSize, imageSize);
  img.loadPixels();
  
  const data = [];

  for (let i = 0; i < img.pixels.length; i += 4) {
    data.push({
      r: img.pixels[i],
      g: img.pixels[i + 1],
      b: img.pixels[i + 2]
    });
  }

  const options = {
    k: 6, // number of clusters
    maxIter: 4, // number of optimization iterations
    threshold: 0.5,
  };

  // when everything is done, set kmeansReady to true
  kmeans = ml5.kmeans(data, options, function () {
    kmeansReady = true;
  });
}

function draw() {
  if (kmeansReady) {
    console.log(kmeans.dataset);
    image(img, 0, 0);
    const cluster = {};
    for (let d = 0; d < kmeans.dataset.length; d += 1) {
      const id = kmeans.dataset[d].centroid;
      if (!(id in cluster)) {
        cluster[id] = [];
      }
      cluster[id].push([
        kmeans.dataset[d][0],
        kmeans.dataset[d][1],
        kmeans.dataset[d][2]
      ]);
    }
    noStroke();
    translate(0, imageSize + offset);
    const clusterKeys = Object.keys(cluster);
    for (let k = 0; k < clusterKeys.length; k += 1) {
      const key = clusterKeys[k];
      for (let c = 0; c < cluster[key].length; c += 1) {
        fill(cluster[key][c][0], cluster[key][c][1], cluster[key][c][2]);
        const y = floor(c / width);
        const x = c - y * width;
        rect(x, y, 1, 1);
      }
      translate(0, ceil(cluster[key].length / width) + offset);
    }
    noLoop();
  }
}
```