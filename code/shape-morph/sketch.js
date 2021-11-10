function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  const radius = 13;
  for (let l = 0; l < 20; l += 1) {
    let segments = 3 + l;
    beginShape();
    for (let s = 0; s < segments; s += 1) {
      const x = radius * Math.cos(Math.PI / 180 * 360 / segments * s);
      const y = radius * Math.sin(Math.PI / 180 * 360 / segments * s);
      vertex(
        x + (l + 1) * radius * 1.5,
        y + (l + 1) * radius * 1.5
      );
    }
    endShape(CLOSE);
  }
}

