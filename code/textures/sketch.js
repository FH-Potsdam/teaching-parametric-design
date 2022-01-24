const cubeSize = 400;

function setup () {
  createCanvas(cubeSize, cubeSize);
  ellipseMode(CENTER);
  pixelDensity(1);
}

function draw() {
  background(255);
  noStroke();
  loadPixels();
  for (let p = 0; p < pixels.length; p += 4) {
    const y = Math.floor(p / 4 / cubeSize);
    const x = p / 4 - y * cubeSize;
    const c = noise(x / cubeSize, y / cubeSize) * 255;
    pixels[p] = c;
    pixels[p + 1] = c;
    pixels[p + 2] = c;
    pixels[p + 3] = 255;
  }
  updatePixels();
  save('plane-displacement.png');

  for (let p = 0; p < pixels.length; p += 4) {
    const y = Math.floor(p / 4 / cubeSize);
    const x = p / 4 - y * cubeSize;
    const c = noise(x / cubeSize, y / cubeSize) * 255;
    pixels[p] = c;
    pixels[p + 1] = 255 - c;
    pixels[p + 2] = 255;
    pixels[p + 3] = 255;
  }
  updatePixels();
  save('plane-texture.png');
  // for (let c = 0; c < 20; c += 1) {
  //   push();
  //   const size = random(20, 100);
  //   const max = random(0.5, 1);
  //   translate(random(0, cubeSize), random(0, cubeSize));
  //   for (let i = 0; i < size; i += 1) {
  //     fill(0, 3);
  //     circle(0, 0, size - i, size - i);
  //   }  
  //   pop();
  // }



  // save('plane-z.png');

  // stroke('black');
  // fill('red');
  // rect(0, cubeSize, cubeSize, cubeSize);
  // fill('green');
  // rect(cubeSize, 0, cubeSize, cubeSize);
  // fill('blue');
  // rect(cubeSize * 2, cubeSize, cubeSize, cubeSize);
  // fill('yellow');
  // rect(cubeSize, cubeSize, cubeSize, cubeSize);
  // fill('purple');
  // rect(cubeSize, cubeSize * 2, cubeSize, cubeSize);
  // fill('orange');
  // rect(cubeSize, cubeSize * 3, cubeSize, cubeSize);
  // save('texture.png');
  
  // background(255);

  // noStroke();

  // fill(125);

  // circle(cubeSize / 2, cubeSize / 2 + cubeSize, 150);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2, 150);
  // circle(cubeSize / 2 + cubeSize * 2, cubeSize / 2 + cubeSize, 150);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2 + cubeSize, 150);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2 + cubeSize * 2, 150);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2 + cubeSize * 3, 150);


  // fill('black');

  // circle(cubeSize / 2, cubeSize / 2 + cubeSize, 50);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2, 50);
  // circle(cubeSize / 2 + cubeSize * 2, cubeSize / 2 + cubeSize, 50);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2 + cubeSize, 50);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2 + cubeSize * 2, 50);
  // circle(cubeSize / 2 + cubeSize, cubeSize / 2 + cubeSize * 3, 50);

  // filter(BLUR, 5);

  

  noLoop();
}