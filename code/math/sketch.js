function setup() {
  createCanvas(400, 400);
}

// function draw() {
//   background(255);
//   noFill();
//   stroke("black");
//   beginShape();
//   for (let angle = 0; angle < 360; angle += 1) {
//     const radius = 50 + cos(Math.PI * 20 / 360 * angle) * 20;
//     const rad = Math.PI / 180 * angle;
//     const x = radius * Math.cos(rad);
//     const y = radius * Math.sin(rad);
//     vertex(x + 200, y + 200);
//   }
//   endShape();
// }

const sketchWidth = 400;
const sketchHeight = 400;
const numPoints = 20;
const velocity = 2;
const points = [];
for (let p = 0; p < numPoints; p += 1) {
  points.push([
    Math.random() * sketchWidth, // x
    Math.random() * sketchHeight, // y
    Math.random() * velocity, // dx
    Math.random() * velocity // dy
  ]);
}

const numLoops = 200;
function draw() {
  noLoop();
  for (let l = 0; l < numLoops; l += 1) {
    noFill();
    stroke(0,40/numLoops * l)
    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l * points[p][2],
        points[p][1] + l * points[p][3]
      );
    }
    endShape();
  }
}