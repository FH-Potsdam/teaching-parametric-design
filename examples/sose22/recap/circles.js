const canvasWidth = 400;
const canvasHeight = 400;

const rectSize = 40;
const rectAbstand = 5;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(155);

  let counter = 0;

  const limit = 4;

  translate(
    (rectSize/2) + (canvasWidth - (limit * rectSize + (limit - 1) * rectAbstand)) / 2,
    (rectSize/2) + (canvasHeight - (limit * rectSize + (limit - 1) * rectAbstand)) / 2
  );

  for (let x = 0; x < limit; x += 1) {
    for (let y = 0; y < limit; y += 1) {
      fill(255, 50);
      let r = 0;
      for(let c = 0; c < 3; c += 1) {
        r += random(5, 40);
        circle(
          (rectSize + rectAbstand) * x,
          (rectSize + rectAbstand) * y,
          // random(c * 40 + 5, c * 40 + 45)
          r
        );  
      }
      // if (x > 0){
      // translate(rectSize + padding, 0);
      // }
      // fill('white');
      // rect(
      //   (rectSize + rectAbstand) * x,
      //   (rectSize + rectAbstand) * y,
      //   rectSize, rectSize
      // );

      // fill('black');
      // text(
      //   x + "/" + y + "/" + counter,
      //   (rectSize + rectAbstand) * x - 20,
      //   (rectSize + rectAbstand) * y
      // );

      counter += 1;
    }
  }

  noLoop();
}