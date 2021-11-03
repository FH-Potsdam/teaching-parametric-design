//  Dimitri Balzer
//  03.11.2021
//


const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
}

function draw() {
  noLoop();
  background(255);

  fill('black')

  for(
    let rectY = 0;
    rectY <= SIZE;
    rectY += random(30, 40)
  ) {
    rect(0, rectY, SIZE, random(20, 25))
  }

  for ( let layer = 0; layer <= 3; layer++) {
    let layerColor = 100 + layer * 50;
    fill(layerColor)

    for ( let x = 0; x <= SIZE + 50; x += 60 ) {
      for ( let y = 0; y <= SIZE + 50; y += 60 ) {
        rect (
          -100 + y + 20 + random(0, 30),
          -100 + x + 20 + random(0, 30),
          20
        )
      }
    }
  }
}