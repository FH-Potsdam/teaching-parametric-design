const canvasWidth = 400;
const canvasHeight = 400;

const rectSize = 40;
const rectAbstand = 25;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

// let oldMouseX = 0;
// let oldMouseY = 0;

let mousePositions = [
];

function draw() {
  background(255);

  mousePositions.push([mouseX, mouseY]);
  if (mousePositions.length > 10) {
    mousePositions = mousePositions.slice(1,10);
  }

  //beginShape();
  for (let v = 1; v < mousePositions.length; v += 1) {
    strokeWeight(10/mousePositions.length*v);
    stroke(255 - 255/mousePositions.length*v, 255/mousePositions.length*v, 255);
    // vertex(
    //   mousePositions[v][0],
    //   mousePositions[v][1]
    // );
    line(
      mousePositions[v][0],
      mousePositions[v][1],
      mousePositions[v-1][0],
      mousePositions[v-1][1]
    );
  // vertex(
  //   oldMouseX,
  //   oldMouseY
  // );
  }
  //endShape();


  // oldMouseX = mouseX;
  // oldMouseY = mouseY;

  // fill(0);
  // circle(mouseX, mouseY, 10);

}
