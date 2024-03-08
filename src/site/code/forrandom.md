<pre>const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth, sketchHeight);

  // we add a random number as the distance to the next rectangle
  for(let y = 0; y < sketchHeight; y += random(2, 10)) {
    const rectHeight = random(10, 20);
    rect(0, y, sketchWidth, rectHeight);
    // next we add the random height of the last rectangle
    y += rectHeight;
  }
}

function draw () {
}</pre>