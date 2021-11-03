const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  noLoop();
  background(255);

  noFill();
  stroke("black");

  let radius = 50;

  circle(sketchWidth / 2, sketchHeight / 2, 50);

  let maxCount = 30;
  for (let circleCount = 0; circleCount < maxCount; circleCount += 1) {
    let theta = (Math.PI / 180) * (360 / maxCount * circleCount + 90);

    let x = radius / 2 * cos(theta);
    let y = radius / 2 * sin(theta);

    circle(
      x + sketchWidth / 2,
      y + sketchHeight / 2,
      radius
    );
  }


  radius = 70
  maxCount = 20;
  for (let circleCount = 0; circleCount < maxCount; circleCount += 1) {
    let theta = (Math.PI / 180) * (360 / maxCount * circleCount + 90);

    let x = radius / 2 * cos(theta);
    let y = radius / 2 * sin(theta);

    rect(
      x + sketchWidth / 2 - radius / 2,
      y + sketchHeight / 2 - radius / 2,
      radius
    );
  }
}

