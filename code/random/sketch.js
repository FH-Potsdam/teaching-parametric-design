const done = [];
const sketchNums = (new Array(25)).fill(null).map((a, i) => i + 1).filter(num => !done.includes(num));

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noLoop();
  background(0);
  const rand = Math.round(Math.random() * sketchNums.length);
  textSize(200);
  fill('white');
  textAlign(CENTER);
  text(sketchNums[rand], 200, 300);
}

