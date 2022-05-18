const canvasWidth = 400;
const canvasHeight = 400;

const rectSize = 40;
const rectAbstand = 25;

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
      if (counter%2 == 0) {
        circle(
          (rectSize + rectAbstand) * x,
          (rectSize + rectAbstand) * y,
          rectSize/2
        );  
      } else {
        rect(
          (rectSize + rectAbstand) * x,
          (rectSize + rectAbstand) * y,
          rectSize/2, rectSize/2
        );  
      }
      // text(x + "/" + y + "/" + counter, 
      //  (rectSize + rectAbstand) * x,
      //      (rectSize + rectAbstand) * y);
      counter += 1;
    }
    if(limit%2 == 0) {
      counter += 1;
    }
  }

  // let tf1;
  // let tf2;
  // for (let x = 0; x < limit; x += 1) {
  //   if (x%2 == 0) {
  //     tf1 = true;
  //   } else {
  //     tf1 = false;
  //   }

  //   for (let y = 0; y < limit; y += 1) {
  //     if (y%2 == 0) {
  //       tf2 = true;
  //     } else {
  //       tf2 = false;
  //     }

  //     if ((tf1 && tf2) || (!tf1 && !tf2)) {
  //       circle(
  //         (rectSize + rectAbstand) * x,
  //         (rectSize + rectAbstand) * y,
  //         rectSize/2
  //       );  
  //     } else {
  //       rect(
  //         (rectSize + rectAbstand) * x,
  //         (rectSize + rectAbstand) * y,
  //         rectSize/2, rectSize/2
  //       );  
  //     }

  //     text(x + "/" + y + "/" + tf1 + "/" + tf2, 
  //     (rectSize + rectAbstand) * x,
  //         (rectSize + rectAbstand) * y);

  //   }
  // }

  // for (let x = 0; x < limit; x += 1) {
  //   for (let y = 0; y < limit; y += 1) {
  //     let offset = 0;
  //     if (y%2==0) {
  //       offset = rectSize/2;
  //     }

  //     rect(
  //       (rectSize + rectAbstand) * x + offset,
  //       (rectSize + rectAbstand) * y,
  //       rectSize/2, rectSize/2
  //     );  
  //   }
  // }

  // for (let x = 0; x < limit; x += 1) {
  //   for (let y = 0; y < limit; y += 1) {
  //     let offset = rectSize/2;
  //     if (y%2==0) {
  //       offset = 0;
  //     }

  //     circle(
  //       (rectSize + rectAbstand) * x + offset,
  //       (rectSize + rectAbstand) * y,
  //       rectSize/2, rectSize/2
  //     );  
  //   }
  // }

  noLoop();
}