const sketchHeight = 400;
const sketchWidth = 400;

function preload(){
  // preload assets
}


function setup() {
 //createCanvas(400, 400);
 createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background('lightblue');
  noFill();
  // stroke('blue');
  // strokeWeight(5)
  // beginShape();
  // curveVertex(400,00);
  // curveVertex(400,0);
  // curveVertex(340,170);
  // curveVertex(290,190);
  // curveVertex(240,120);
  // curveVertex(200,240);
  // curveVertex(150,210);
  // curveVertex(100,310);
  // curveVertex(50,300);
  // curveVertex(00,400);
  // curveVertex(400,400);
  // endShape();


  // //background(255);
  // fill('pink')
  // strokeWeight(0)
  // beginShape();
  // for(let angle = 0; angle < 360; angle += 15) {
  //   const radius = random(75, 100);
  //   const x = radius * cos(Math.PI / 180 * angle);
  //   const y = radius * sin(Math.PI / 180 * angle);
  //   vertex(x + sketchWidth / 4, y + sketchHeight / 4);
  // }
  // endShape(CLOSE);
  // noLoop();

  fill('purple')
  strokeWeight(1)
  //beginShape();

  for(let angle = 0; angle < 360; angle += 5) {
    const radius = cos(angle/30) * 100;
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    line(
      sketchWidth / 2,
      sketchHeight / 2,
      x + sketchWidth / 2,
      y + sketchHeight / 2
    );
  }

  //endShape(CLOSE);


  noLoop();

}