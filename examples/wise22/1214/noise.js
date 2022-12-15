function preload(){
    // preload assets
  }
  
  const canvasWidth = 400;
  const canvasHeight = 400;
  
  function setup() {
    createCanvas(400, 400);
    // noiseSeed(50);
  }
  
  const gridSize = 2;
  // let z = 0;
  
  function draw() {
    background(255);
    noStroke();
  
    translate(0, 200);
    for (let x = 0; x < canvasWidth/2; x += 1) {
      fill(0);
      rect(x, noise(x/20) * 50, 2, 2);
    }
  
    // for (let x = 0; x < canvasWidth/2; x += 1) {
    //   for (let y = 0; y < canvasWidth/2; y += 1) {
    //     fill(noise(x / 20, y / 20, z) * 255);
    //     rect(x * gridSize, y * gridSize, gridSize, gridSize);
    //   }
    // }
  
    // z += 0.02;
  }