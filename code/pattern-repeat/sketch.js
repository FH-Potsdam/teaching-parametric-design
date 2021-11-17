let value;

function setup() {
  createCanvas(400, 400);
  value = random(4,9);
 }
 

// const sketchWidth = 400;
// const buffer = 20;

// const MINVALUE = buffer;
// const MAXVALUE = sketchWidth - buffer;

//  const value = 
//   	MINVALUE + 
//     Math.random() * (MAXVALUE - MINVALUE);

 function draw() {
   background(255);
   // noFill();

   translate(200, 200);
 
  for (let l = 0; l < 5; l += 1) {
    push();
    scale(1/(l+1));
    rotate(Math.PI / 180 * 45 * l);
    pattern();
    pop();
  }
 
 
 // save();
 noLoop();
 }

function pattern () {
  translate(-200, -200);
  beginShape();
  vertex(180, 40);
  vertex(360, 220);
  vertex(220, 360);
  vertex(40, 180);
  endShape(CLOSE);
  
  beginShape();
  vertex(190, 390);
  vertex(10, 210);
  vertex(35, 185);
  vertex(215, 365);
  endShape(CLOSE);
  
  beginShape();
  vertex(210, 10);
  vertex(390, 190);
  vertex(365, 215)
  vertex(185, 35);
  endShape(CLOSE);
  
  triangle (10, 10, 10, 200, 200, 10);
  triangle (200, 390, 390, 390, 390, 200);
  triangle (390, 180, 390, 10, 220, 10);
  triangle (10, 390, 10, 220, 180, 390);
}
