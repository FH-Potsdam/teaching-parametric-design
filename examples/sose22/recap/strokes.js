const canvasWidth = 400;
const canvasHeight = 400;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(155);

  let sw = 1;

  for (let l = 0; l < 40; l += 1) {
    // fill('red');
    // circle(l * 20,               0, 20);
    // fill('green');
    // circle(l * 20 - canvasWidth, canvasHeight, 20);

    if (l<20) {
      sw += 0.3;
    } else {
      sw -= 0.3;
    }

    console.log(l, sw);

    strokeWeight(sw);

    line(
      //canvasWidth + l * 20 - canvasWidth,   0,
      l * 20,               0,
      l * 20 - canvasWidth, canvasHeight
    );
  }

  noLoop();
}