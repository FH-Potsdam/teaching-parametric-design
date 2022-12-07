const sketchWidth = 500;
const sketchHeight = 500;

const rectSize = 15;
const padding = 4;
const spacing = rectSize + 2 * padding;

const columns = Math.floor(sketchWidth / spacing);
const rows = Math.floor(sketchHeight / spacing);

//let button; //Wie ändere ich Form und Größe? Brauche ich das let überhaupt?
let circleColor; 

function setup () {
  circleColor = color(100, 210, 210);
  createCanvas(sketchWidth, sketchHeight);

  //function resetSketch
  button = createButton('Refresh');
  button.position(440, 520);
  button.mousePressed(reload);
  button.class('btn')
  button.id('refresh-button');
}

function reload() {
  // background(255);
  clear();
}

function draw () {

  
  stroke (25);
  strokeWeight (1);

  for(let x = 0; x <= columns; x += 1) {
   for(let y = 0; y <= rows; y += 1) {
      fill (255, 0); // Rechtecke
      if (
        // && AND
        // || OR
        mouseX > x * spacing && 
        mouseX < x * spacing + rectSize 
        &&
        mouseY > y * spacing && 
        mouseY < y * spacing + rectSize
      ) {
        fill(circleColor);
      }
      rect(x * spacing, y * spacing, rectSize);
   }
  }

  fill (circleColor); 
  stroke (10, 20, 210);

  // Funktion mit jedem Mausklicken Farbe random ändern

  //let color = 0;
  //function mouseClicked() {
  //  color += 1;
  //}

  //circle(mouseX, mouseY, 20); 

}

function mousePressed() {
  circleColor = color(
    random(255),
    random(255),
    random(255)
  );
}