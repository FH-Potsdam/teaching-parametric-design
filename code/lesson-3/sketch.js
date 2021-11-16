const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
  noLoop()
}

function draw() {
  background(color('#a3a3a3'));
  fill(color('#808080'))
  noStroke()

  distance = SIZE / 12;                       // distance between two rectangles
  length = SIZE / 6;                          // width of a rectangle
  height = SIZE / 12;                         // height of a rectangle

  // Factors to determine the x start position of a row
  // dunno how it works... if it's stupid, but it works, it ain't stupid
  const factors = [-1, -2, 1, 0]
  let count = 0;

  for ( let i = 0; i < 7; i++) {
    row(distance * factors[count], i * 2);
    count = count === 3 ? 0 : count + 1;      //reset count if it iterates the fourth time, increment elsewise
  }

  // un-comment to save the image
  // save()
}

/** 
 * Renders a row of shapes
 * 
 * @param {number} start The horizontal start position x of the row
 * @param {number} paddingTop Count of rows above, vertical position of the row
 * 
*/
function row(start, paddingTop) {
  for ( let i = 0; i < SIZE; i++) {
    for ( let j = 0; j < 2; j++ ) {
      rect(start + (length + distance * 2) * i + (distance - length * 2) * j, 
           paddingTop * height + height * j, 
           length, 
           height)
    }
  }
}