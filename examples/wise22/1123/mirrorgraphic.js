function preload(){
  // preload assets
}

const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

const strichstaerke = 20;
const farbe = 'green';
const bgFarbe = 'white';
const maxCounter = 4; 

function draw() {
  const mirrorGraphic = createGraphics(canvasWidth, canvasHeight);

  background(bgFarbe);
  noFill();
  strokeWeight(strichstaerke);
  stroke(0, 255, 0);

  mirrorGraphic.noFill();
  mirrorGraphic.strokeWeight(strichstaerke);
  mirrorGraphic.stroke(0, 255, 0, 100);
  
  for (let counter = 0; counter < maxCounter; counter += 1) {
    strokeCap(SQUARE);
    arc(
      canvasWidth/2,
      canvasHeight/2,
      strichstaerke + counter * strichstaerke * 4,
      strichstaerke + counter * strichstaerke * 4,
      Math.PI/180 * 180,
      0,
      OPEN
    );

    mirrorGraphic.strokeCap(ROUND);
    const lineStart = 
    canvasWidth / 2
    - strichstaerke/2
    + strichstaerke + counter * strichstaerke * 2;
    mirrorGraphic.line(
      lineStart,
      canvasHeight/2,
      lineStart - 150,
      canvasHeight
    );
  }

  image(mirrorGraphic, 0, 0);
  scale(-1, 1)
  image(mirrorGraphic, -canvasWidth, 0);

  noLoop();
}