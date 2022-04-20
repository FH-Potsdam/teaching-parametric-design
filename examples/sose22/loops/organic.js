const sketchHeight = 400;
const sketchWidth = 400;

let counter = 101;
let listX = [];
let listY = [];
let listTargetX = [];
let listTargetY = [];

const maxCounter = 10;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw(){
  background(255);
  frameRate (5);

  const layerCount = 5;
  const circleCount = 5;

  if (counter > maxCounter) {
    counter = 0;
    for (let circles = 0; circles < circleCount; circles++) {
      listX[circles] = listTargetX[circles];
      listY[circles] = listTargetY[circles];
      listTargetX[circles] = random(0, 400);
      listTargetY[circles] = random(0, 400);
    }
    console.log('CHANGE');
  }
  counter++;

  strokeWeight(0);


  for (let circles = 0; circles < circleCount; circles++) {

    const cx = listX[circles] + (listTargetX[circles] - listX[circles]) / maxCounter * counter;
    const cy = listY[circles] + (listTargetX[circles] - listX[circles]) / maxCounter * counter;

    const r = random(255, 200);
    const g = random(20, 200);
    const b = random(80, 150);

    for (let layers = 0; layers < layerCount; layers += 1) {
      fill(r, g, b, 255 * (0.1 - layers * (0.05 / layerCount)));
      beginShape();
      for(let angle = 0; angle < 360; angle += 15) {
        const radius = random(80 + layers * 10, 70 + layers * 10);
        const x = radius * cos(Math.PI / 180 * angle);
        const y = radius * sin(Math.PI / 180 * angle);
        curveVertex(cx + x, cy + y);
      }
      endShape(CLOSE);
    }
  }

  // noLoop();
}