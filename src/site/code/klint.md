<pre>function setup() {
  createCanvas(400,400);
}

function draw(){
  background('#CF5D42');

  noStroke();

  fill('#7CA2D7');
  arc(
    200, 200,
    300, 300,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    CHORD
  );

  fill('#E5C762');
  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    CHORD
  );

  fill('#D8846A');
  arc(
    200, 200,
    100, 100,
    Math.PI / 180 * -90,
    Math.PI / 180 * 90,
    CHORD
  );

  fill('#D9D2C8');
  arc(
    200, 200,
    300, 300,
    Math.PI / 180 * 90,
    Math.PI / 180 * 270,
    CHORD
  );

  fill('#2D2D2D');
  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * 90,
    Math.PI / 180 * 270,
    CHORD
  );

  noLoop();
}</pre>