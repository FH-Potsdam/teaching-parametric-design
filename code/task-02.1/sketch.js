const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
}

function draw() {
  background(40);

  noFill();
  stroke(255, 255, 199);

  let factor = 15;

  for (let i = 0; i <= 18; i++) {
    bezier(
      30 + i * factor, 400, /* 1. Anchor */
      30 - i * factor, 200, /* 1. Control */
      250, 30 - i * factor, /* 2. Control */
      400, 30 + i * factor, /* 2. Anchor */
    );
  }
}