const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth + 20, sketchHeight + 20, SVG);
}

const pointsX = [];
const maxPoints = 5;
// maxLines needs to be an even number
// so we can turn two lines into a polygon
const maxLines = 8;
const pointsY = [];

// First we define the x-positions
// Those will stay the same for each line
pointsX.push(0);
let lastPointX = 0;
for (let p = 0; p < maxPoints - 1; p += 1) {
  const nextStep =(0.8 + Math.random() * 0.4) * (sketchWidth - lastPointX) / (maxPoints - p);
  lastPointX += nextStep;
  pointsX.push(lastPointX);
}
pointsX.push(sketchWidth);

// First we generate the offset for the last and first line
function generateOffsets(numPoints, max) {
  const points = [];
  for (let p = 0; p < numPoints; p += 1) {
    points.push(Math.random() * max);
  }
  return points;
}
const maxOffset = 80;
const startY = generateOffsets(maxPoints, maxOffset);
const endY = generateOffsets(maxPoints, maxOffset * -1);

// Now we calculate steps (maxLines) between start and end
for (let l = 0; l < maxLines; l += 1) {
  const points = [0];
  for (let p = 0; p < maxPoints - 1; p += 1) {
    points.push(startY[p] + (endY[p] - startY[p]) / maxLines * l);
  }
  points.push(0);
  pointsY.push(points);
}

function drawBezier(x1, y1, x2, y2) {
  bezierVertex(
    x1 + (x2 - x1) / 2,
    y1,
    x1 + (x2 - x1) / 2,
    y2,
    x2,
    y2
  );
}

function draw() {
  translate(10, 10);
  noLoop();
  stroke('red');
  fill('black');
  for (let l = 0; l < maxLines; l += 2) {
    beginShape();
    vertex(pointsX[0], pointsY[l][0] + l * sketchHeight / maxLines);
    for (let p = 1; p < pointsX.length; p += 1) {
      drawBezier(
        pointsX[p - 1],
        pointsY[l][p - 1] + l * sketchHeight / maxLines,
        pointsX[p],
        pointsY[l][p] + l * sketchHeight / maxLines
      );
    }
    vertex(pointsX[pointsX.length - 1], pointsY[l + 1][pointsX.length - 1] + (l + 1) * sketchHeight / maxLines);
    for (let p = pointsX.length - 2; p >= 0; p -= 1) {
      drawBezier(
        pointsX[p + 1],
        pointsY[l + 1][p + 1] + (l + 1) * sketchHeight / maxLines,
        pointsX[p],
        pointsY[l + 1][p] + (l + 1) * sketchHeight / maxLines,
      );
    }
    vertex(pointsX[0], l * sketchHeight / maxLines);
    endShape();
  }
}

function mouseClicked() {
  save();
}