const sketchWidth = 400;
const sketchHeight = 400;

const circles = [];
const circleRadius = 20;
const cMax = 400;

for (let c = 0; c < cMax; c += 1) {
  let newCircle;
  let hit = true;
  while(hit){
    hit = false;
    newCircle = {
      x: Math.random() * sketchWidth,
      y: Math.random() * sketchHeight
    };
    for (let cc = 0; cc < circles.length; cc += 1) {
      if (hitTest(newCircle, circles[cc])) {
        hit = true;
      }
    }
  }

  circles.push(newCircle);
}

console.log(circles.length);

function hitTest(circle1, circle2) {
  let x1Min = circle1.x - circleRadius / 2;
  let x1Max = circle1.x + circleRadius / 2;
  let y1Min = circle1.y - circleRadius / 2;
  let y1Max = circle1.y + circleRadius / 2;

  let x2Min = circle2.x - circleRadius / 2;
  let x2Max = circle2.x + circleRadius / 2;
  let y2Min = circle2.y - circleRadius / 2;
  let y2Max = circle2.y + circleRadius / 2;

  if (
    ((x2Min < x1Max && x2Min > x1Min) ||
    (x2Max < x1Max && x2Max > x1Min)) &&
    ((y2Min < y1Max && y2Min > y1Min) ||
    (y2Max < y1Max && y2Max > y1Min))
  ) {
    return true;
  } else {
    return false;
  }
}


function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(0);
  fill('white');
  for (let c = 0; c < circles.length; c += 1) {
    fill('white');
    stroke('black');
    circle(
      circles[c].x,
      circles[c].y,
      circleRadius
    );
    noFill();
    stroke('red');
    rect(
      circles[c].x - circleRadius / 2,
      circles[c].y - circleRadius / 2,
      circleRadius,
      circleRadius
    );
  }
}