function preload(){
  // preload assets
}
const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

const radius = 25;
const limit = 4;

function hexagon(size) {
  beginShape();
  for(let angle = 0; angle < 360; angle += 60) {
    const radius = size
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function branch(level) {
  for (let i = 0; i < 6; i += 1) {
    const r = random();
    if (r > 0.25) {
      push();
      const x = radius * 0.866 * 2 * cos(Math.PI / 180 * (i * 60 + 30));
      const y = radius * 0.866 * 2 * sin(Math.PI / 180 * (i * 60 + 30));
      translate(x, y);
      hexagon(radius);
      if (level < limit) {
        branch(level+1);
      }
      pop();
    }
  }
}

function draw() {
  background(0);
  fill("black");
  noFill();
  stroke("rgba(0,255,255,0.3)");

  translate(sketchWidth/2, sketchHeight/2);
  hexagon(radius);

  branch(1);

  // beginShape();
  // for(let angle = 0; angle < 360; angle += 60) {
  //   const radius = 30
  //   const x = radius * cos(Math.PI / 180 * angle);
  //   const y = radius * sin(Math.PI / 180 * angle);
  //   vertex(x + sketchWidth / 2, y + sketchHeight / 2);

  //   for (let angle = 0; angle < 360; angle += 15) {
  //     push();
  //     const x = radius * cos(Math.PI / 180 * angle);
  //     const y = radius * sin(Math.PI / 180 * angle);

  //     translate(x, y);



  //     pop();
  //   }
  // }
  // endShape(CLOSE);
  noLoop();

}