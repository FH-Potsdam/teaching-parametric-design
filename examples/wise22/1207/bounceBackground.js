let x = 50;
let y = 50
let speed = 3;
let speedy = 1;
let a = 0
let z = 0



function setup() {
  createCanvas(600, 400);
  background(0);
  c = color(random(0,255),random(0,255),random(0,255));
  z = color(random(0,255),random(0,255),random(0,255),10)
}

function draw() {
  let c = color(random(0,255),random(0,255),random(0,255));
  background(z);
  stroke(255);
  fill(a)
  strokeWeight(4);
  ellipse(x, y, 100, 100);

  if (x > width -50) {
    speed = -3;
  };

  if (x < 50) {
    speed = +3
  };

  if (y > 400 -50 ){
    speedy = -1
  };

  if (y < 50) {
    speedy = +1
  };
  
  if (x < 50){
    a = c
    z = color(random(0,255),random(0,255),random(0,255),10)
  };

  if (x > width -50){
    a = c
    z = color(random(0,255),random(0,255),random(0,255),10)
  };

  if (y > 400 -50 ){
    a = c
    z = color(random(0,255),random(0,255),random(0,255),10)
  };

  if (y < 50) {
    a = c
    z = color(random(0,255),random(0,255),random(0,255),10)
  };


  

  x = x + speed;
  y = y + speedy;


}