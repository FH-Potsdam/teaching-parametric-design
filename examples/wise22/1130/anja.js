function preload(){
  // preload assets
}

let branches;
let zoom;


function setup() {
  createCanvas(601, 600); 
  angleMode (DEGREES);

  countingslider = createSlider (1, 8, 4);
  countingslider.position(130, 570)

}

function draw() {
  background (250)
  stroke (0)
  strokeWeight (2)
  for (let x=0; x<countingslider.value(); x+=1) {
    push()
    translate(75 * x, 0)
    rect (0, 20, 75, 40)
    pop ()
  }
  drawTree ()
}

const limit = 10;

function drawBranch(level, lastAngle) {
  let newAngle = lastAngle+90;
  if (level%2 === 0) {
    newAngle -= 180;
  }
  const x = countingslider.value() * 50/level * Math.cos(Math.PI / 180 * newAngle);
  const y = countingslider.value() * 50/level * Math.sin(Math.PI / 180 * newAngle);
      
  line (0, 0, x, y);
  //drawing the first branch shelf thingy
  
  const mx = x/2;
  const my = y/2;

  translate(mx, my);

  if (level < limit) {
    drawBranch(level+1, newAngle);
  }
}

//slider to scale the trees down?
function drawTree (level) {
  push();
  const x1 = 200;
  const y1 = 550;
  translate(x1, y1);

  drawBranch(1, 210);

  // strokeWeight(10);
  // stroke('red');
  // point(mx, my);
  //new branches
  
  pop();
}