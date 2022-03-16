<pre>function setup() {
  createCanvas(400, 400);
}

const bg = [0,0,0];
let colorIndex = 0;
let lastColor = null;

function draw() {
  background(bg[0], bg[1], bg[2]);
  if (
    keyIsPressed &&
    // check if its not the same key
    keyCode !== lastColor
  ) {
    bg[colorIndex] = keyCode;

    // save the current keyCode
    lastColor = keyCode;

    // after each key we move to the
    // next R / G / B value and back
    colorIndex += 1;
    if (colorIndex > 2) {
      colorIndex = 0;
    }
  }
}</pre>