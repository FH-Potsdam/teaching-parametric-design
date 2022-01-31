<pre>function setup() {
  createCanvas(400,400);
}

function draw(){
  background(255);

  arc(
    200, 200,
    100, 100,
    Math.PI / 180 * 0,
    Math.PI / 180 * 90,
    OPEN
  );
}</pre>