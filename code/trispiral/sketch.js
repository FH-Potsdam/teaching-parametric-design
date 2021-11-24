const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function polarX(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  return x;
}

function polarY(radius, angle) {
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return y;
}

const points = [];
const limit = 20;
const offset = 150;
const angleInterval = 120;
const startRadius = 20;
const radiusInterval = 5;

for (let p = 0; p < limit; p += 1){
  const angle = offset - p * angleInterval;
  const radius = startRadius + radiusInterval * p;
  points.push({
    x: polarX(radius, angle),
    y: polarY(radius, angle) 
  });
}

function draw() {
  translate(200, 200);
  background(255);
  noFill();
  stroke('black');
  beginShape();
  for (let p = 0; p < limit; p += 1){
    vertex(points[p].x, points[p].y);
  }
  endShape();
}