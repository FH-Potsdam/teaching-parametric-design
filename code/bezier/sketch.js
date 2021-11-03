//  Dimitri Balzer
//  03.11.2021
//


const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
}

function draw() {
  background(40);

  noFill();
  stroke(255, 255, 255);

  let factor = 15;

  for (let i = 0; i <= 50; i++) {
    bezier(
      0, 400, /* 1. Anchor */
      100 + i * factor, 360 - i * factor, /* 1. Control */
      150 + i * factor, 360 - i * factor, /* 2. Control */
      100 + i * factor, 400, /* 2. Anchor */
    );
  }
}