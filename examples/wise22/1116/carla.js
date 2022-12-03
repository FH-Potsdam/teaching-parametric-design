function preload(){
  // preload assets
}

let canvasWidth = 400;
let canvasHeight = 400;
let radius = 10;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background('beige');
}

function draw() {
  let zaehler = 0;
  for (let a = canvasHeight; a >= 1 ; a -= 40){
    if (zaehler%2===0){
      fill('pink');
    } else {
      fill('white');
    }
    circle(canvasHeight/2, canvasWidth/2, radius-a);
    zaehler += 1;
  }

  for (let b = 0; b < 200; b+= 11){
    line(
      canvasWidth + b, canvasHeight - canvasHeight + b,
      canvasWidth - canvasWidth + b, canvasHeight + b
    );
  }

  noLoop();
}