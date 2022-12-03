function preload(){
  // preload assets
}

let canvasHeight = 750;
let canvasWidth = 1200;
let colorPalet = 'rgb(0, 0, ' + Math.random() * 255 + ')';
// console.log(Math.random(), Math.random(), colorPalet);
// let colorPalet = `rgb(0, 0, ${Math.floor(Math.random()*255)})`;
let colorGrey;
let inputField;
let x = 150;
let y = 150;
let j = 1;
let counter = 0;

// let rectangleKl = rect(0, 100, x/2, y/2);
// let rectangleMed = rect(0, 100, x, y/2);
// let rectangleGr = rect(0, 100, x, y);
// let rectangles = [rectangleKl, rectangleMed, rectangleGr];
//let ractangle = random(rectangles);

const htmlInput = document.querySelector('#inputfield');
htmlInput.addEventListener('keyup', function () {
  loop();
});

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);

  colorGrey = random(0, 255);

  let span = createSpan('my input field');
  span.position(10, 730);

  inputField = createSlider(1, 100, 33);
  inputField.position(10, 755); 
  inputField.size(100);
  inputField.input(function () {
    // const header = document.querySelector('#header');
    // header.innerHTML = inputField.value();
    loop();
  });
  outputField = createInput();
  outputField.position(120, 755);
  outputField.size(30);
  
}

function draw() {
  background('beige');
  //background(colorPalet);
  fill('grey');
  rect(0, 0, canvasWidth, 50);

  counter = 0;

  translate(20, 75);
  
  for (
    let i = 0;
    i <= (inputField.value()-1)
    && counter < (inputField.value()-1);
    i += 1) {
  
  push();

  const row = Math.floor(i / 9);
  const col = i - row * 9;
  // Math.ceil
  // Math.round
  // const 

  translate(100 * col, 100 * row);
  // fill(random(0, 255));
  
  fill("grey");
  
  const rectType = random(0,3);
  
  if (rectType < 1) {
    rect(0, 0, 100, 100); //kleines Rect4
    counter += 1;
  } else if (rectType < 2) {
    if (counter < inputField.value()) rect(0, 0, 50, 50); //kleines Rect
    counter += 1;
    if (counter < inputField.value()) rect(0, 50, 50, 50); //kleines Rect
    counter += 1;
    if (counter < inputField.value()) rect(50, 0, 50, 50); //kleines Rect
    counter += 1;
    if (counter < inputField.value()) rect(50, 50, 50, 50); //kleines Rect
    counter += 1;
  } else {
    if (counter < inputField.value()) rect(0, 0, 100, 50); //kleines Rect
    counter += 1;
    if (counter < inputField.value()) rect(0, 50, 100, 50); //kleines Rect
    counter += 1;
  }
  



  fill("white");

  text(i, 10, 10);
  text(Math.floor(i/9), 10, 30);
  text(Math.floor(i/9) * 9, 10, 50);
  text(document.querySelector('#inputfield').value, 10, 70);
  //random(rectangles);

  //console.log();
  //if (i % 19 == 0){
    //j += 1;
    //noLoop();
    //console.log(j);
  //}

  //if (random(rectangles) == rectangleKl) {
  //  counter ++ 4;
  //} else if (random(rectangles) == rectangleMed) {
  //  counter ++ 2;
  //} else {
  //  counter ++ 1;
  //}


  pop();
  }
  noLoop();
  // noLoop();
}

// random(choices);

  //inputField.value()
