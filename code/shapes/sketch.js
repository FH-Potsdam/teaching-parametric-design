const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(255);
  stroke('black');
  noFill();
  for (let r = 0; r < 20; r += 1) {
    rect(
      20 + r * 20,
      20 + r * 20,
      5 + r * 4,
      40
    )
  }

  for (let r = 0; r < 20; r += 1) {
    ellipse(
      sketchWidth - (20 + r * 20),
      20 + r * 20,
      5 + r * 4,
      20 + r * 7
    )
  }
}