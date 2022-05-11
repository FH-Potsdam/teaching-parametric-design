const sketchWidth = 400;
const sketchHeight = 400;

//inputs
let selectInput;
let slider;

let textDropdown = 'mood';
let textSlider = 'slider that does something';
let textArrows = 'speed, i am speed. (arrow keys)';



const radius = 0;

 

//objectParameters
let amountTriangle = 9;
let triangleWidth = 50;

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


  //Dropdown
  selectInput = createSelect ();
  selectInput.position(10, 410);
  selectInput.option('okay mood');
  selectInput.option('feelin good');
  selectInput.option('feelin extra good');
  selectInput.option('okay stop it pllease.');
  selectInput.option('pretty sweet');

  selectInput.changed(mySelectEvent);


  function mySelectEvent () {
      let item = selectInput.value ();
      if (item === 'okay mood'){
        widthSmile = 20;
        heightSmile = 5;
      }

      else if (item === 'feelin good'){
        widthSmile = 20;
        heightSmile = 20;
      }

      else if (item === 'feelin extra good'){
        widthSmile = 45;
        heightSmile = 40;
      }

      else if (item === 'okay stop it pllease.'){
        widthSmile = 70;
        heightSmile = 80;
      }

      else if (item === 'pretty sweet'){
        widthSmile = 10;
        heightSmile = 5;
        jawDropIntensity = 5;
      }
  }

  //Slider
  slider = createSlider(0.1, 100, 50, 10);
  slider.position (10, 440);
  slider.size (138);
  
  //Text
  textSize (18);
  fill(0);
  text(textDropdown, 10, 400);
  text(textSlider, 10, 430);
  text(textArrows, 10, 450);





}


// Polar Function
function polar (radius, angle){
  const x = radius * cos(Math.PI / 180 * angle);
  const y = radius * sin(Math.PI / 180 * angle);

  return {
    'x': x,
    'y':y
  }


  

}

//Draw
function draw() {

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
    const p = polar (radius, angle); 

  //trianlge reproduction
  for (let c = 0; c < amountTriangle; c += 1){
  
  // rotate triangle

  rotate(Math.PI / 180 * 360/amountTriangle);

  //trianlge
  triangle (0, 0, 300, -slider.value(), 300, slider.value());

  pop();

  }
}



  //rotateSpeed
  rotateAngle += rotateSpeed;

  stroke(255);
  strokeWeight (3);
  strokeCap(ROUND);
  fill (255);

  //eye01
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

  if (keyIsDown(LEFT_ARROW)){
    rotateSpeed += 0.5
  }

  else if (keyIsDown(RIGHT_ARROW)){
      rotateSpeed -= 0.5
  }


  }


  // function keyReleased() {
  //   if (keyCode === LEFT_ARROW) {
  //     rotateSpeed -= 0.1;
  //   } 
  //   if (keyCode === RIGHT_ARROW) {
  //     rotateSpeed += 0.1;
  //   }
  // }
  

  // function keyPressed (){

    
  // }
  
  




