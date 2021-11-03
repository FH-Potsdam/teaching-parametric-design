//  Dimitri Balzer
//  03.11.2021
//


const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
}

function draw() {
  // noLoop();
  frameRate(24)
  background(255);

  noFill()
  stroke('black')

  let radius = 100;
  let maxCount = 20;

  for ( let circleCount = 0; circleCount <= maxCount; circleCount++) {
    let theta = (Math.PI / 180) * (360 / maxCount * circleCount);
    
    let x = radius / 2 * cos(theta);
    let y = radius / 2 * sin(theta);

    circle(
      x + SIZE / 2, 
      y + SIZE / 2, 
      radius
    );
  }
}