const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
}

function draw() {
  background(40);

  noFill();
  stroke(255, 255, 199);

  let factor = 30;

  for (let i = 0; i <= 64; i++) {
    bezier(
      50 - i * factor, 400, /* 1. Anchor */
      100 + i * factor, 200, /* 1. Control */
      250, 20 - i * factor, /* 2. Control */
      400, 20 - i * factor, /* 2. Anchor */
    );
  }
}