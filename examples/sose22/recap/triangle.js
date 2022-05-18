const triangleWidth = 200;
const triangleHeight = 200;

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

  // const x1 = canvasWidth / 2;
  // const y1 = (canvasHeight - triangleHeight) / 2;

  // const x2 = (canvasWidth - triangleWidth) / 2;
  // const y2 = (canvasHeight - triangleHeight) / 2 + triangleHeight;

  // //const x3 = (canvasWidth - triangleWidth) / 2 + triangleWidth;
  // const x3 = canvasWidth - (canvasWidth - triangleWidth) / 2;
  // //const y3 = (canvasHeight - triangleHeight) / 2 + triangleHeight;
  // const y3 = canvasHeight - (canvasHeight - triangleHeight) / 2;

  // triangle(
  //   x1, y1,
  //   x2, y2,
  //   x3, y3
  // );

  circle(0, 0, 20);
  translate(canvasWidth/2, canvasHeight/2);
  circle(0, 0, 20);

  beginShape();
  //triangle(
    vertex(0, -triangleHeight / 2);
    vertex(-triangleWidth/2, triangleHeight/2);
    vertex(triangleWidth/2, triangleHeight/2);
  //);
  endShape(CLOSE);
}