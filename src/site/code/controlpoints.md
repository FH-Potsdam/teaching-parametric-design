<pre>function setup () {
  createCanvas(400, 400);
}

const x1 = 50;
const y1 = 50;
const x2 = 350;
const y2 = 50;

const cx1 = 50;
const cy1 = 200;
const cx2 = 200;
const cy2 = 150;

function draw () {
  strokeWeight(1);
  stroke(0);
  beginShape();
  vertex(x1, y1); // we need to add a startpoint
  bezierVertex(cx1, cy1, cx2, cy2, x2, y2);
  endShape();

  stroke("blue");
  line(x1, y1, cx1, cy1);
  line(x2, y2, cx2, cy2);

  strokeWeight(5);
  stroke("black");
  point(x1, y1);
  point(x2, y2);
  stroke("red");
  point(cx1, cy1);
  point(cx2, cy2);

  noLoop();
}</pre>