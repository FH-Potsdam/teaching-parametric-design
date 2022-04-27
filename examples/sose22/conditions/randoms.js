const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(400, 400);
}


function draw(){
  background(255);
  fill(0);
  noStroke();

  // completely random
  // for (let c = 0; c < 100; c++) {
  //   const x = random(0, sketchWidth);
  //   circle(x, 10, 5);
  // }

  // // exp 2 scale
  // for (let c = 0; c < 100; c++) {
  //   const x = Math.pow(random(), 2)*sketchWidth;
  //   circle(x, 30, 5);
  // }

  // // exp 4 scale
  // for (let c = 0; c < 100; c++) {
  //   const x = Math.pow(random(), 4)*sketchWidth;
  //   circle(x, 50, 5);
  // }

  // // sqrt scale
  // for (let c = 0; c < 100; c++) {
  //   const x = Math.sqrt(random())*sketchWidth;
  //   circle(x, 70, 5);
  // }

  // // root 4 scale
  // for (let c = 0; c < 100; c++) {
  //   const x = Math.pow(random(), 1/4)*sketchWidth;
  //   circle(x, 90, 5);
  // }

  for(let x = 0; x < 1; x += 0.01) {
    const y = Math.pow(Math.random(), 10);
    circle(random(0,sketchWidth), random(0,sketchHeight), y * 10);
  }

  noLoop();
}
 