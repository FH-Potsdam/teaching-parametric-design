const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(255);
  noStroke();

  const width = 150;
  const height = 150;

  const limit = 256;

  for (let i = 0; i <= limit; i++) {
    push()
    translate(sketchWidth / 2, sketchHeight / 2);
    rotate(PI / limit * i);
    fill(color(0+i*(250/limit)));
    rect(0-width/2, 0-width/2, width, height);
    pop()  
  }

  noLoop();
  //un-comment to save
  //save('sketch-04.2.png')
}