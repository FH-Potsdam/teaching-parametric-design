let a;

function setup() {
  createCanvas(400, 400);
  background(255);
  a = height / 2;
  strokeWeight(0);

}
function draw() {
  background(255, 2);
  stroke(0);
  strokeWeight(0);
  fill(0);
  rect(80, 80, 320, 100);
  rect(80, 80, 100, 200);
  rect(180, 280, 100);

  stroke(56, 151, 53);
  strokeWeight(1);
  fill(0, 255, 0);
  circle(a - 19, 280, 200);
  a = a + 0.9;
  if (a < 0) {
    a = height;
  }
  else if (a > 550) {
    a = height / 2
    a = a - 0.9
  }
 
}