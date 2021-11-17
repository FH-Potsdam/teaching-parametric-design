const done = [3,4,12];
const sketchNums = [1,8,11,12,13,15,23,16,24,17]; // (new Array(25)).fill(null).map((a, i) => i + 1).filter(num => !done.includes(num));

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



