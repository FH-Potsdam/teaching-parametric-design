//  Dimitri Balzer
//  02.11.2021
//
//
//  Ich hatte leider echt keine Ahnung was die Hausaufgabe war.
//  Ich habe die Lectures durchgelesen, konnte aber keine Info dazu finden.
//  Deswegen hab ich einfach dieses kleine Programm geschrieben.


const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
}

function draw() {
  background(40);
  fill(100, 24, 255);
  
  generateComposition(5, 5, 25, 5, 'center', true)
}

/**
 * Renders a set of circles
 *
 * @param {number} [rows=5] - Number of rows
 * @param {number} [columns=5] - Number of columns
 * @param {number} [circleSize=25] - Size of each circle in px
 * @param {number} [distance=5] - Vertical and Horizontal distance betweeen each Circle in px
 * @param {string} [alignment=center] - Alignment of the set on the horizontal axis
 * @param {boolean} [randomizeColor=false] - If true, each circle will get a random color, otherwise will keep inital color
 */
function generateComposition( rows, columns, circleSize, distance, alignment, randomizeColor ) {
  noLoop() //For this case re-render is deactivated

  distance = distance + circleSize;

  let startPosition = { x: 0, y: 0 };

  switch(alignment) {
    case 'left' : startPosition = { x: circleSize / 2, y: ( SIZE - circleSize * rows - distance * 2 ) / 2 }; break;
    case 'center' : startPosition = { x: ( SIZE - circleSize * columns - distance * 2 ) / 2, 
                                      y: ( SIZE - circleSize * rows - distance * 2 ) / 2 }; break;
    default : startPosition = { x: circleSize / 2, y: circleSize / 2 }
  }

  for (let i = 0; i <= columns; i++) {
    for (let j = 0; j <= rows; j++) {
      // circle(x, y, s)
      if (randomizeColor) {
        fill(Math.random() * 255, Math.random() * 255, Math.random() * 255)
      }
      circle( startPosition.x + distance * i,
              startPosition.y + distance * j,
              circleSize
      )
    }
  }
}

// Re-renders everytime mouse is clicked
function mouseClicked() {
  redraw()
}