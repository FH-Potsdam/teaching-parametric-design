<pre>const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw(){
  background(255);
  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(75, 100);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);
  noLoop();
}</pre>