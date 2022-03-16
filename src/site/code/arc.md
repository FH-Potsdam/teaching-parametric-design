<pre>function setup() {
  createCanvas(400,400);
}

function draw(){
  background(255);
  strokeWeight(10);

  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * 0,
    Math.PI / 180 * 90,
    OPEN
  );
}</pre>