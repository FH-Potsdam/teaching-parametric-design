// define it in the global scope
let backgroundColor;

function setup () {
  // set the backgroundColor to 0 (black)
  backgroundColor = 0;
  createCanvas(400, 400);
}

function draw () {
  // use the number stored in backgroundColor
  background(backgroundColor);

  // everytime the draw cycle is repeated 1 is added to the color
  backgroundColor += 1;
}
