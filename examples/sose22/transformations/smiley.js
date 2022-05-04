const sketchWidth = 400;
const sketchHeight = 400;

const radius = 0;

 

//objectParameters
let amountTriangle = 9;
let triangleWidth = 35;

let circleSize = 150;

//rotation
let rotateAngle = 0;
let rotateSpeed = 0.4; //small numbers

//colorValues
let r = 255;
let g = 0;
let b = 0;

//smileParameters
let jawDropIntensity = 5;

let selectInput;

let widthSmile = 20;
let heightSmile = 5;


//eyeParameters
let spacingEyes = 7.5;
let yEyes = -5;

let sizeEyes 
let widthEyes = 3;
let heightEyes = 10;



//Preload
function preload(){
  // preload assets
}

//Setup
function setup() {
  createCanvas(sketchWidth, sketchHeight);

  selectInput = createSelect();
  selectInput.position(10, 410);
  selectInput.option('okayMood');
  selectInput.option('feelinGood');
  selectInput.option('feelinExtraGood');
  selectInput.option('okayStopItPlease');
  selectInput.changed(mySelectEvent);

}

function mySelectEvent() {
  let item = selectInput.value();
  if (item === 'okayMood') {
    widthSmile = 5;
  } else if (item === 'feelinGood') {
    widthSmile = 10;
  } else if (item === 'feelinExtraGood') {
    widthSmile = 15;
  } else if (item === 'okayStopItPlease') {
    widthSmile = 20;
  }
}




    







//Draw
function draw() {

smileintensity = 0;

background (0);
noStroke();

fill(r, g, b);

//circle
circle (sketchWidth/2, sketchHeight/2, circleSize);




//transformation of polarCord
translate (sketchWidth/2, sketchHeight/2);
rotate (Math.PI / 180 * rotateAngle);


for (let angle = 0; angle < 360; angle += 360/amountTriangle){

  //polarCord
  push();
  const x = radius * cos(Math.PI / 180 * angle);
  const y = radius * sin(Math.PI / 180 * angle);


  //trianlge reproduction
  for (let c = 0; c < amountTriangle; c += 1){
  
  // rotate triangle

  rotate(Math.PI / 180 * 360/amountTriangle);

  //trianlge
  triangle (0, 0, 300, -triangleWidth, 300, triangleWidth);

  // pop();

  }
}

  //rotateSpeed
  rotateAngle += rotateSpeed;

  stroke(255);
  strokeWeight (3);
  strokeCap(ROUND);



  //eyes

  //eye01
  fill (255);
  ellipse (
    -spacingEyes, //x
    yEyes, //y
    widthEyes, //width
    heightEyes //height
   );

  //eye02
  ellipse (
    spacingEyes, //x
    yEyes, //y
    widthEyes, //width
    heightEyes //height


    );



  
  //mouth
  noFill();
  beginShape();

  //startPointSmile
  vertex (
    -widthSmile, //x
    jawDropIntensity  //y
    );

  //endPointSmile
  quadraticVertex (
    0,  //x-Curve
    heightSmile + jawDropIntensity, //y-Curve
    widthSmile, //x
    jawDropIntensity  //y
    );

  endShape();

  





}