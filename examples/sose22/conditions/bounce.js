function preload() {
    // preload assets
  }
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
  }
  
  const sketchWidth = 400;
  const sketchHeight = 400;
  
  let x = Math.random()*400;
  let y = Math.random()*400;
  
  let dx = 5;
  let dy = 5;
  
  let size = 20;
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
  }
  
  function draw() {
    background(255);
  
    circle(x, y, size);
  
    x += dx;
    y += dy;
  
    if (x > sketchWidth || x < 0){
      dx *= -1;
    }
    if (y > sketchHeight || y < 0) {
      dy *= -1;
    }
  }