const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  // console.log(Math.random(),Math.random());
  console.log(noise(1), noise(2));
}

function mouseClicked() {
  noiseSeed();
}