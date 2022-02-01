<pre>const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw(){
  background(255);
  fill(125);
  stroke(0);
  beginShape();
  for (let angle = 0; angle < 360; angle += 1) {
    const radius = 50 + cos(Math.PI * 20 / 360 * angle) * 20;
    const rad = Math.PI / 180 * angle;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    vertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape();
  noLoop();
}</pre>