function preload() {
    // preload assets
  }
  
  const sketchWidth = 400;
  const sketchHeight = 450;
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
  }
  
  
  
  function draw() {
    stroke(80);
    strokeWeight:(3);
    //fill(0);
    // noFill();
    
    beginShape();
  
    frameRate (10);
    vertex(0, 0);
    vertex(40, 0);
    
    for (let y = 1; y < 6; y += 1.5) {
      const x = noise(5);
      const cX = noise(5);
      let direct = 1;
      if (y%2===0) {
        direct = -1;
      }
  
      quadraticVertex(
        100 + cX * direct,
        400 / 5 * y - (400 / 5 * 0.5),
        100 + (x + 100) * direct * -1 ,
        400 / 5 * y
      );
    }
  
    vertex(0, 400);
    vertex(0, 400);
    
    endShape(CLOSE);
  
    draw(30);
  }