const canvasWidth = 400;
const canvasHeight = 400;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

let characterX = canvasWidth/2;
let characterY = canvasHeight/2;
const characterSize = 50;

function draw() {
  background(255);

  rect(characterX, characterY, characterSize, characterSize);

  if (keyIsPressed) {
    if (leftActive) {
      characterX -= 1;
      if (characterX < characterSize/2) {
        characterX += 20;
      }
    } else if (rightActive) {
      characterX += 1;
    }

    if (upActive) {
      characterY -= 1;
    } else if (downActive) {
      characterY += 1;
    }  
  }

  text('left:' + leftActive, 20, 20);
  text('right:' + rightActive, 20, 50);
  text('top:' + upActive, 20, 80);
  text('down:' + downActive, 20, 110);
}

let leftActive = false;
let rightActive = false;
let upActive = false;
let downActive = false;

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    leftActive = true;
  } else if (keyCode == RIGHT_ARROW) {
    rightActive = true;
  } else if (keyCode == UP_ARROW) {
    upActive = true;
  } else if (keyCode == DOWN_ARROW) {
    downActive = true;
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    leftActive = false;
  } else if (keyCode == RIGHT_ARROW) {
    rightActive = false;
  } else if (keyCode == UP_ARROW) {
    upActive = false;
  } else if (keyCode == DOWN_ARROW) {
    downActive = false;
  }
}