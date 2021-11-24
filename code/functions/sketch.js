function setup() {
  createCanvas(400, 400);
}

const quadWidth = 30;

function draw() {
  background(255);
  let counter = 0;
  for (let x = 0; x < 6; x += 1) {
    for (let y = 0; y < 6; y += 1) {
      let quadType = true;
      if (counter%2 === 0) {
        quadType = false;
      }
      lineQuad(
        x * quadWidth,
        y * quadWidth,
        quadType
      );
      counter += 1;
    }
  }
}

function lineQuad (x, y, quadType) {
  const lineNum = 5;
  for (let l = 0; l < lineNum; l += 1) {
    if (quadType) {
      line(
        x,
        y + quadWidth / lineNum * l,
        x + quadWidth / lineNum * l,
        y);
      line(
        x + quadWidth / lineNum * l,
        y + quadWidth,
        x + quadWidth,
        y + quadWidth / lineNum * l);
    } else {
      line(
        x + quadWidth / lineNum * l,
        y,
        x + quadWidth,
        y + quadWidth - quadWidth / lineNum * l);
      line(
        x,
        y + quadWidth / lineNum * l,
        x + quadWidth - quadWidth / lineNum * l,
        y + quadWidth);
    }
  }
}

