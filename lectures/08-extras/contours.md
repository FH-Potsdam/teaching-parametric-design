**Parametric Design**

## Contours

### Setup

You will need to add [D3js](https://d3js.org/d3.v7.min.js) to your *libraries* folder.

### Contours from a pixel array

The noise example is taken from [osaft](https://github.com/Osaft/teaching-parametric-design/blob/main/code/spender%20v3%20mehr%20FARBEN/sketch.js).

D3 has a nice little function that takes an array of values, similar to the pixels data from p5js (see [images](images.md)). In the example below we have a grayscale noise image and we want to generate contour lines. The actual magic happens here:

```js
const contours = d3.contours()
  .size([cols, rows]) // width and height of the image area
  .smooth(true) // apply smoothing: true/false
  (values); // the 0-255 values for each pixel in an array
```

```js
function make2DArray(cols,rows){
	let arr = new Array(cols);
	for(let i=0; i<arr.length; i++){
		arr[i] = new Array(rows);
	}
	return arr;
}

let grid;
let cols, rows;
let resolution = 10;
let xoff = 0;
let yoff = 0;
let zoff = 0;

function setup() {
	createCanvas(400, 400); // get slow: , SVG	

  cols = width / resolution;
	rows = height / resolution;
	grid = make2DArray(cols, rows);
}

function draw() {
	background(255);

	for (let i = 0; i< cols; i++){
    xoff = 0;
		for (let j = 0; j< rows; j++){
      grid[i][j] = noise(xoff,yoff,zoff) * 15;
      xoff = xoff+0.02;        
		}
    yoff = yoff+0.02;
	}

  yoff = 0;
  xoff = 0;
  zoff = zoff +0.005;
  noStroke();
	for (let i = 0; i < cols; i++){
		for (let j = 0; j < rows; j++){
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] < 1){
        fill("#480ca8");
      } else if (grid[i][j] < 2){
        fill("#560bad");
      } else if (grid[i][j] < 3){
        fill("#7209b7");
      } else if (grid[i][j] < 4){
        fill("#b5179e");
      } else if (grid[i][j] < 5){
        fill("#f72585");
      } else if (grid[i][j] < 6){
        fill("#3a0ca3");
      } else if (grid[i][j] < 7){
        fill("#3f37c9");
      } else if (grid[i][j] < 8){
        fill("#4361ee");
      } else if (grid[i][j] < 9){
        fill("#4895ef");
      } else {
        fill("#4cc9f0");
      }
			rect(x, y, resolution, resolution);
		}
	}

  if (mouseIsPressed) {
    let values = [];
    let k = 0;
    for (let i = 0; i < grid.length; i += 1) {
      for(let j = 0; j < grid[i].length; j += 1) {
        values.push(grid[j][i]);
        k += 1;
      }
    }
  
    const contours = d3.contours()
      //.thresholds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
      .size([cols, rows])
      .smooth(true)
      (values);
    
    noFill();
    stroke('red');
    for (let c = 0; c < contours.length; c += 1) {
      beginShape();
      for(let p = 0; p < contours[c].coordinates[0][0].length; p += 1) {
        vertex(
          contours[c].coordinates[0][0][p][0] * resolution,
          contours[c].coordinates[0][0][p][1] * resolution
        );
      }
      // holes
      for (let h = 1; h < contours[c].coordinates.length; h += 1) {
        beginContour();
        for(let p = 0; p < contours[c].coordinates[h][0].length; p += 1) {
          vertex(
            contours[c].coordinates[h][0][p][0] * resolution,
            contours[c].coordinates[h][0][p][1] * resolution
          );
        }
        endContour();
      }
      endShape();
    }
  
    noLoop();
  } 
}
```