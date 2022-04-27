function preload() {
    // preload assets
  }
  
  const sketchWidth = 400;
  const sketchHeight = 400;
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
  }
  
  function draw() {
    stroke(0);
    fill(0);
    // noFill();
    
    beginShape();
  
    vertex(0, 0);
    vertex(200, 0);
    
    for (let y = 1; y < 5; y += 1) {
      const x = random(25);
      const cX = random(25);
      let direct = -1;
      if (y%2===0) {
        direct = 1;
      }
  
      quadraticVertex(200 + cX * direct, 400 / 5 * y - (400 / 5 * 0.5), 200 + x * direct * -1, 400 / 5 * y)
    }
  
    vertex(200, 400);
    vertex(0, 400);
    11
    endShape(CLOSE);
  
    noLoop();
  }