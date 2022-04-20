function preload() {
    // preload assets
  }
  
  const sketchWidth = 400;
  const sketchHeight = 400;
  const size = 20;
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
    frameRate(10);
  }
  
  function draw() {
    background(255);
    strokeweight = 1;
    const columns = sketchWidth / size;
    const rows = sketchHeight / size;
  
    push();
    translate(200, 200);
  
    for (let rot = 0; rot < 4; rot += 1) {
      rotate(Math.PI / 180 * 90);
      for (let counter = 0; counter < 100; counter++) {
        const startX = -200; // random(0, 400);
        const startY = random(-200, 200);
        const endX = random(-200, 200);
        const endY = -200; // random(0, 400);
  
        const distX = startX - endX;
        const distY = startY - endY;
  
        const dist = Math.sqrt(distX * distX + distY * distY);
  
        if (dist < 400) {
          line(startX, startY, endX, endY);
        }
  
      }
    }
    pop();
  
    rect(150, 150, 75, 75);
  }