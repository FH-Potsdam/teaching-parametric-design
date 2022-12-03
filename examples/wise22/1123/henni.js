const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw(){
  const circles = [];

  const colorArray = ["#A8D9FF", "#DE78AB", "#C3E3A8", "#D0BDF0"];

  const circleDefinitions = [
    {
      x: sketchWidth / 2,
      y: sketchHeight / 2,
      step: 12,
      color: "#A8D9FF",
      size: 1
    },
    {
      x: sketchWidth / 4,
      y: sketchHeight / 4,
      step: 10,
      color: "#DE78AB",
      size: 1.2
    },
    {
      x: sketchWidth -100,
      y: sketchHeight -150,
      step: 3,
      color: "#C3E3A8",
      size: 1
    },
    {
      x: sketchWidth -300,
      y: sketchHeight -140,
      step: 6,
      color: "#D0BDF0",
      size: 1.5
    }
  ];

  for (let i = 0; i < 10; i += 1) {
    circleDefinitions.push({
      x: random(0, 400),
      y: random(0, 400),
      step: random(5, 30),
      color: colorArray[Math.round(random(0, 3))],
      size: random(1, 2)
    });
  }

  // blendMode (MULTIPLY)
  background("#EEE1C6");
  stroke(255)
  
  for (let c = 0; c < circleDefinitions.length; c += 1) {
    const colorObj = color(circleDefinitions[c].color);
    colorObj.setAlpha(100);
    fill(colorObj);

    let circleArray = [];
    beginShape();
    for(let angle = 0; angle < 360; angle +=  circleDefinitions[c].step) {
      const radius = random(75, 100);
      const x = radius / circleDefinitions[c].size * cos(Math.PI / 180 * angle) + circleDefinitions[c].x;
      const y = radius / circleDefinitions[c].size * sin(Math.PI / 180 * angle) + circleDefinitions[c].y;
      circleArray.push([x,y]);
      vertex(x, y);
    }
    endShape(CLOSE);
    circles.push(circleArray);
  }

  blendMode(NORMAL);
  for (let c = 0; c < circles.length; c += 1) {
    noFill();
    stroke(255);
    beginShape();
    for (let p = 0; p < circles[c].length; p += 1) {
      vertex(circles[c][p][0], circles[c][p][1]);
    }
    endShape(CLOSE);
  }


  noLoop();


}

