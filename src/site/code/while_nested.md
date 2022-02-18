function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  let x = 0;
  while(x < 10) {
    let y = 0;
    for(y < 10) {
      circle(20 * x, 20 * y, 5);
      y += 1;
    }
    x += 1;
  }
}