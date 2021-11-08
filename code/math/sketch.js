function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
  stroke("black");
  beginShape();
  for (let angle = 0; angle < 360; angle += 1) {
    const radius = 50 + cos(Math.PI * 20 / 360 * angle) * 20;
    const rad = Math.PI / 180 * angle;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    vertex(x + 200, y + 200);
  }
  endShape();
}

