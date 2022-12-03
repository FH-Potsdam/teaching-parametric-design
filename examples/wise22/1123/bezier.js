const sketchHeight = 400;
const sketchWidth = 400;

function preload(){
  // preload assets
}


function setup() {
 //createCanvas(400, 400);
 createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background('lightblue');
  
  stroke('black');
  strokeWeight(5);
  noFill();

  const stepCount = 20;
  const stepSize = 50;
  const offset = 30;

  beginShape();

  for (let step = 0; step <= stepCount; step += 1) {
    let y = 50;
    if (step%2 === 0) {
      y = 350;
    }
    let x = step * stepSize;

    let oldY = 50;
    if ((step - 1)%2 === 0) {
      oldY = 350;
    }
    let oldX = (step - 1) * stepSize;

    if (step === 0) {
      vertex(x,y);
    } else {
      bezierVertex(oldX + offset, oldY, x - offset, y, x, y);
    }


    stroke('green');
    point(oldX + offset, oldY);
    stroke('blue');
    point(x - offset, y);
    stroke('red');
    point(x, y);
  }

  endShape();

  noLoop();

}