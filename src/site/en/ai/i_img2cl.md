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
<div id="preview"></div>


<script src="/js/ml5.js"></script>
<script src="/js/mobileNetClasses.js"></script>

<script>
let classifier;
let video;
let resultsP;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.parent("#input");
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
  resultsP = createP('Loading model and video...');
  resultsP.parent("#preview");
}

function modelReady() {
  classifyVideo();
}

function classifyVideo() {
  classifier.classify(gotResult);
}

function gotResult(err, results) {
  let p = "";
  results.forEach(r => {
    p += `<strong>${(r.label in classMap) ? classMap[r.label] : "na"}</strong> ${r.label} (${nf(r.confidence, 0, 2)})<br />`;
  });
  resultsP.html(p);
  classifyVideo();
}
</script>

