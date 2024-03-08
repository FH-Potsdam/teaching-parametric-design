<pre>let color1;
let color2;
let color3;
let color4;

function setup() {
  color1 = color(random(100, 150), 50, 50);
  color2 = color(random(100, 150), 50, 50);
  color3 = color(random(100, 150), 50, 50);
  color4 = color(random(100, 150), 50, 50);
  createCanvas(400,400);
}

function draw(){
  background(255);

  noStroke();
  
  fill(color1);
  rect(0, 0, 200, 200);

  fill(color2);
  rect(200, 0, 200, 200);

  fill(color3);
  rect(200, 200, 200, 200);

  fill(color4);
  rect(0, 200, 200, 200);
}</pre>