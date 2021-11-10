const SIZE = 400;

function setup() {
  createCanvas(SIZE, SIZE);
}

function draw() {
  background(255, 255, 255);
  fill(255, 255, 255);
  strokeWeight(3)

  let sqaureSize = 120;

  // Unterste Ebene
  cube(
    SIZE / 2 - 70,
    SIZE / 2 + 70,
    sqaureSize,
    true,
    20
  )

  cube(
    SIZE / 2 + 70,
    SIZE / 2 - 70,
    sqaureSize,
    true,
    20,
    true
  )

  // Zweite Ebene
  cube(
    SIZE / 2 - 30,
    SIZE / 2 + 30,
    sqaureSize,
    true,
    20,
    false
  )

  cube(
    SIZE / 2 + 30,
    SIZE / 2 - 30,
    sqaureSize,
    true,
    20,
    true
  )

  // Höhste ebene
  cube(
    SIZE / 2,
    SIZE / 2,
    sqaureSize
  )
}

function cube(xPos, yPos, size, volume=false, depth=15, down=false) {

  verticeTopLeft = { x : xPos - size / 2, y : yPos - size / 2 }
  verticeTopRight = { x : xPos + size / 2, y : yPos - size / 2 }
  verticeBottomLeft = { x : xPos - size / 2, y : yPos + size / 2 }
  verticeBottomRight = { x : xPos + size / 2, y : yPos + size / 2 }

  beginShape()
  vertex(verticeTopLeft.x, verticeTopLeft.y)
  vertex(verticeTopRight.x, verticeTopRight.y)
  vertex(verticeBottomRight.x, verticeBottomRight.y)
  vertex(verticeBottomLeft.x, verticeBottomLeft.y)
  endShape(CLOSE)

  let factor = down ? -1 : 1;

  if (volume) {
    beginShape()
    vertex(verticeTopLeft.x, verticeTopLeft.y)
    vertex(verticeTopLeft.x - depth * factor, verticeTopLeft.y + depth * factor)
    !down 
      ? vertex(verticeBottomLeft.x - depth * factor, verticeBottomLeft.y + depth * factor)
      : vertex(verticeTopRight.x - depth * factor, verticeTopRight.y + depth * factor)
    vertex(verticeBottomRight.x - depth * factor, verticeBottomRight.y + depth * factor)
    vertex(verticeBottomRight.x, verticeBottomRight.y)
    !down 
      ? vertex(verticeBottomLeft.x, verticeBottomLeft.y)
      : vertex(verticeTopRight.x, verticeTopRight.y)
    endShape(CLOSE)
  }
}

