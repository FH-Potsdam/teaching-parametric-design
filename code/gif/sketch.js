const sketchWidth = 400;
const sketchHeight = 400;

function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {x: x, y: y};
}

function setup () {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(30)
  createLoop({
    duration:3, // duration in seconds for our gif animation
    gif:true
  });
}

function draw() {
  background(255);
  fill(0);
  translate(sketchWidth / 2, sketchHeight / 2);
  // animLoop.progress > value between 0 and 1 showing the progress of our animation
  const pos = polar(100, 360 * animLoop.progress);
  circle(pos.x, pos.y, 25);
}