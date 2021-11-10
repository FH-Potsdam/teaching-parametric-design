const arr = [];
const max = 20;
for (let a = 0; a < max; a += 1) {
  arr.push({
    x: Math.random() * 400,
    y: Math.random() * 400
  });
}
const arrDetailed = [arr[0]];
const maxDist = 10;
for (let a = 1; a < max; a += 1) {
  const start = arr[a - 1];
  const end = arr[a];

  const distX = end.x - start.x;
  const distY = end.y - start.y;

  const dist = 
    Math.sqrt(
      Math.pow(distX,2) +
      Math.pow(distY,2)
    );
  const count = Math.ceil(dist / maxDist);
  for (let c = 1; c <= count; c += 1) {
    arrDetailed.push({
      x: start.x + distX / count * c,
      y: start.y + distY / count * c
    });
  }
}



let counter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  
  for (let a = 1; a < counter; a += 1) {
    if (a%2 === 0) {
      stroke('red');
    } else {
      stroke('white');
    }
    beginShape();
    vertex(
      arrDetailed[a-1].x,
      arrDetailed[a-1].y
    );
    vertex(
      arrDetailed[a].x,
      arrDetailed[a].y
    );
    endShape();
  }
  counter += 1;
  if (counter > arrDetailed.length) {
    counter = arrDetailed.length;
    save();
    noLoop();
  }
}

