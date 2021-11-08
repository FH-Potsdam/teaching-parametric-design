let trail = [];
const trailMax = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  trail.push({x: mouseX, y: mouseY});
  if (trail.length > trailMax) {
    // this selects the last n elements from the array
    trail = trail.slice(-trailMax);
  }
  noFill();
  stroke('black');
  beginShape();
  for (let t = 0; t < trail.length; t += 1) {
    vertex(trail[t].x, trail[t].y);
  }
  endShape();
}