const sketchHeight = 700;
const sketchWidth = 400;
let sliderC; 
let textInput;
let randomValue;

function setup() {
  randomValue = random(360);

  createCanvas(sketchWidth, sketchHeight);
  //circle
  sliderC = createSlider(0, 200, 150, 10);
  sliderC.position(0, 700);
  sliderC.size(100);
  sliderC.input(restart);
 //rect
  sliderRX = createSlider(0, 200, 50, 10);
  sliderRX.position(100, 700);
  sliderRX.size(100);
  sliderRX.input(restart);

  sliderRY = createSlider(0, 200, 50, 10);
  sliderRY.position(100, 750);
  sliderRY.size(100);
  sliderRY.input(restart);

  sliderR2X = createSlider(0, 200, 50, 10);
  sliderR2X.position(100, 800);
  sliderR2X.size(100);
  sliderR2X.input(restart);
//rect mitte
  sliderRMX = createSlider(0, 200, 50, 10);
  sliderRMX.position(200, 700);
  sliderRMX.size(100);
  sliderRMX.input(restart);

  sliderRMY = createSlider(0, 200, 50, 10);
  sliderRMY.position(200, 750);
  sliderRMY.size(100);
  sliderRMY.input(restart);
  //text header

  textInput = createInput(); // default value
  textInput.position(10, 10); // position of the input
  textInput.size(372, 45); // size of input
  textInput.input(restart);
//text Footer
  textInput = createInput(); // default value
  textInput.position(10, 640); // position of the input
  textInput.size(372, 45); // size of input
  textInput.input(restart);
  
  const randButton = createButton();
  randButton.position(10, 800);
  randButton.mousePressed(function () {
    randomValue = random(360);
    loop();
  });

}

function restart() {
  loop();
}


function draw() {
  background("beige");
  circle(80, 150, sliderC.value());
  circle(80, 500, sliderC.value())

  rect(200,80, sliderRX.value(),sliderRY.value()) //oben links
  rect(250,80, sliderR2X.value(),sliderRY.value()) //oben rechts

  rect(10, 10, 380, 50) //header
  rect(10, 640, 380, 50) //footer

  rect(10, 250, sliderRMX.value(), sliderRMY.value())




 // Rect random darf nicht loopen aber die slider brauchen loop
  rect(200, 250, sliderRMX.value(), randomValue)
  noLoop()
  
 // text(textField.value(), 20, 20);


}
