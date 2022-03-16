<pre>const sketchWidth = 400;
const sketchHeight = 400;
const numPoints = 30;

/* We use velocity to modify how fast
   the points move in the random directions.
   Higher velocity faster moving.
*/
const velocity = 2;

const points = [];
for (let p = 0; p < numPoints; p += 1) {
  points.push({
    x: Math.random() * sketchWidth,
    y: Math.random() * sketchHeight,
    vx: Math.random() * velocity,
    vy: Math.random() * velocity
  });
}

function draw() {
  background(255, 50);
  fill(0);
  for (let p = 0; p < points.length; p += 1) {
    circle(points[p].x, points[p].y, 5);
    // move the point
    points[p].x += points[p].vx;
    points[p].y += points[p].vy;

    // reverse direction if point is outside the canvas area
    if (points[p].x > sketchWidth || points[p].x < 0) {
      points[p].vx *= -1;
    }
    if (points[p].y > sketchHeight || points[p].y < 0) {
      points[p].vy *= -1;
    }
  }
}</pre>