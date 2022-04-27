const sketchWidth = 400;
const sketchHeight = 400;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate (5);
}

function draw() {
  background('rgba(214, 221, 255, 100)');
  fill('rgba(107, 122, 255, 0.5)');
  strokeWeight(0);

  for (let counter = 0; counter < 20; counter += 1) {
    let xpos = random(-200, width + 200);
    let ypos = random(-200, height + 200);
  
    let rechteckAusrichtung = Math.round(random(0,1));

    if (rechteckAusrichtung) {
      rect(xpos, ypos, 200, 100);
    } else {
      rect(xpos, ypos, 100, 200);
    }
  }

  

//Random Hoch- und Querformat?
// Warum selbe "random "x und y Koordinaten wenn code dubliziert?
}