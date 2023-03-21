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
  
</style>

<div id="input"></div>
<button id="stop">PAUSE/PLAY</button>
<div id="preview"></div>


<!-- Require the peer dependencies of pose-detection. -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>

<!-- You must explicitly require a TF.js backend if you're not using the TF.js union bundle. -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
<!-- Alternatively you can use the WASM backend: <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm/dist/tf-backend-wasm.js"></script> -->

<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection"></script>
<script>
let ready = false;
let videoReady = false;
let detector;
let imageEl;

let looper = true;
document.querySelector("#stop").addEventListener("click", () => {
  if (looper) {
    noLoop();
    looper = false;
  } else {
    looper = true;
    loop();
  }
});

async function loadTF() {
  const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
  detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);
  ready = true;
}

loadTF();

const connections = [
  [5,6],
  [6,8],
  [5,7],
  [10,8],
  [9,7],
  [11,12],
  [14,12],
  [13,11],
  [14,16],
  [13,15],
];

async function runTF() {
  imageElement = document.querySelector("video");

  const poses = await detector.estimatePoses(imageElement, ratio, false, 16);

  poses.forEach(p => {
    p.keypoints.forEach(k => {
      circle(k.x * ratio, k.y * ratio, 5);
    });
    connections.forEach(c => {
      line(
        p.keypoints[c[0]].x * ratio,
        p.keypoints[c[0]].y * ratio,
        p.keypoints[c[1]].x * ratio,
        p.keypoints[c[1]].y * ratio,
      );
    });
  });

  document.querySelector("#preview").innerHTML = JSON.stringify(poses);
}

let capture;
let ratio = 1;
let vw = 0;
let vh = 0;

function setup() {
  const c = createCanvas(512, 512);
  c.parent("#input");
  capture = createCapture(VIDEO, () => {
    videoReady = true;
    vw = capture.width;
    vh = capture.height;
    if (vw > vh) {
      ratio = 512 / vw;
    } else {
      ratio = 512 / vh;
    }
    console.log(vw, vh);
  });
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, vw * ratio, vh * ratio);
  if (ready && videoReady) {
    stroke("red");
    fill("red");
    runTF();
  }
}
</script>