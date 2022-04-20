const sketchWidth = 400;
const sketchHeight = 400;
const padding = 20;

function setup() {
  createCanvas(400, 400);
  frameRate(2);
}


let corner = 15;

const quadCount = 5;
let size = (sketchWidth - 2*padding) / quadCount;

let exists = [];

function draw(){
  background(210);
  fill(100, 50);
  noStroke();

  // reset
  exists = [];

  for (let count = 0; count < 5; count) {
    const randX = Math.round(random(0, 4));
    const randY = Math.round(random(0, 4));

    if (!(randX in exists)) {
      exists[randX] = [];
    }

    if (!(randY in exists[randX])) {
      exists[randX][randY] = true;

      // rect(
      //   padding + randX * size,
      //   padding + randY * size,
      //   size, size, corner);

      count += 1;
    }
  }

  Object.keys(exists).forEach(x => {
    Object.keys(exists[x]).forEach(y => {
      // hittest
      fill('black');
      x = parseInt(x);
      for (let tx = x - 1; tx <= parseInt(x) + 1; tx += 1) {
        for (let ty = y - 1; ty <= parseInt(y) + 1; ty += 1) {
          if (
            (tx != x || ty != y) &&
            (tx in exists) &&
            (ty in exists[tx]) && 
            exists[tx][ty]
          ) {
            fill('red');
          }
        }
      }
      rect(
        padding + x * size,
        padding + y * size,
        size, size, corner);
    });
  });


  // for (let y = random(padding,sketchWidth - padding); y < 320; y += random(70, 300)) {
  //   for (let x = random(15,320); x < 320; x += random(70, 300)) {
      
      
  //     let shape1 = rect(x, y, size, size, corner)
  //     //let shape2 = rect(x+60, y+60, size, size, corner)
    
  //   }

  // }
}
 