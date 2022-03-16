<pre>const sketchWidth = 400;
const sketchHeight = 400;
const angleDistance = 3;
const maxAngle = 180;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw () {
  for (let layer = 0; layer < 20; layer += 1) {
    for(let angle = 0; angle < maxAngle; angle += angleDistance) {
      // each layer the angle is offset
      const rad = Math.PI / 180 * (angle + layer * 2);

      // we use the angle also as a radius in the polar function
      // so the bigger the angle, the bigger the radius
      const x = angle * cos(rad);
      const y = angle * sin(rad);

      // we also use the angle for the circle size
      // growing angle, radius and size
      circle(x + sketchWidth / 2, y + sketchHeight / 2, angle / 100);
    }
  }
  noLoop();
}</pre>