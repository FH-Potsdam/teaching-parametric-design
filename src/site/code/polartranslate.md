<pre>function setup() {
  createCanvas(400, 400);
}

const radius = 100;

function draw() {
  background(255);
  // initial translate
  translate(200, 200);

  for (let angle = 0; angle < 360; angle += 15) {
    push();
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    
    translate(x, y);
    circle(0, 0, 10);

    // returning to the initial translate
    pop();
  }

  noLoop(); 
}</pre>