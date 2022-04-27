function preload() {
    // preload assets
  }
  
  const sketchWidth = 400;
  const sketchHeight = 400;
  const size = 20;
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
  }
  
  function draw() {
    noStroke();
    fill("orange");
    rect(0, 0, 400, 200);
  
    fill("yellow");
    rect(00, 200, 400, 200);
  
    fill(23, 69, 158);
    beginShape();
  
    curveVertex(0, 140);
    curveVertex(60, 180);
    curveVertex(120, 140);
    curveVertex(180, 180);
    curveVertex(240, 140);
    curveVertex(300, 180);
    curveVertex(360, 140);
    curveVertex(420, 180);
  
    curveVertex(420, 280);
    curveVertex(360, 240);
    curveVertex(300, 280);
    curveVertex(240, 240);
    curveVertex(180, 280);
    curveVertex(120, 240);
    curveVertex(60, 280);
    curveVertex(0, 240);
  
    endShape(CLOSE);
  
    const columns = sketchWidth / size;
    const rows = sketchHeight / size;
  
    for (let x = 2; x < columns; x += 4) {
      for (let y = 15; y < rows; y += 2) {
        fill(0, 0, 0);
  
        circle(x * size, y * size, size);
      }
    }
  
    for (let x = 2; x < columns; x += 4) {
      for (let y = 15; y < rows; y += 2) {
        fill(0, 0, 0);
  
        circle(x * size, y * size, size);
      }
    }
  
    noFill();
    stroke(0);
    strokeWeight(3);
    
    for (let x = 0; x < 5; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        push();
        const reihenAbstand = x * 90;
        const zeilenAbstand = y * 40;
        translate(reihenAbstand, zeilenAbstand);
        beginShape();
        curveVertex(60, 0);
        curveVertex(20, 40);
        curveVertex(40, 20);
        curveVertex(60, 40);
        curveVertex(80, 20);
        curveVertex(40, 0);
        endShape();
        pop();
      }
    }
  
    // beginShape();
    // curveVertex(160, 0);
    // curveVertex(120, 40);
    // curveVertex(140, 20);
    // curveVertex(160, 40);
    // curveVertex(180, 20);
    // curveVertex(140, 0);
    // endShape();
  
    // beginShape();
    // curveVertex(260, 0);
    // curveVertex(220, 40);
    // curveVertex(240, 20);
    // curveVertex(260, 40);
    // curveVertex(280, 20);
    // curveVertex(240, 0);
    // endShape();
  
    // beginShape();
    // curveVertex(360, 0);
    // curveVertex(320, 40);
    // curveVertex(340, 20);
    // curveVertex(360, 40);
    // curveVertex(380, 20);
    // curveVertex(340, 0);
    // endShape();
  
    // //2. Reihe
  
    // beginShape();
    // curveVertex(60, 50);
    // curveVertex(20, 90);
    // curveVertex(40, 70);
    // curveVertex(60, 90);
    // curveVertex(80, 70);
    // curveVertex(40, 50);
    // endShape();
  
    // beginShape();
    // curveVertex(160, 50);
    // curveVertex(120, 90);
    // curveVertex(140, 70);
    // curveVertex(160, 90);
    // curveVertex(180, 70);
    // curveVertex(140, 90);
    // endShape();
  
    // beginShape();
    // curveVertex(260, 50);
    // curveVertex(220, 90);
    // curveVertex(240, 70);
    // curveVertex(260, 90);
    // curveVertex(280, 70);
    // curveVertex(240, 90);
    // endShape();
  
    // beginShape();
    // curveVertex(360, 50);
    // curveVertex(320, 90);
    // curveVertex(340, 70);
    // curveVertex(360, 90);
    // curveVertex(380, 70);
    // curveVertex(340, 90);
    // endShape();
  
    // //3. Reihe
  
    // beginShape();
    // curveVertex(60, 100);
    // curveVertex(20, 140);
    // curveVertex(40, 120);
    // curveVertex(60, 140);
    // curveVertex(80, 120);
    // curveVertex(40, 100);
    // endShape();
  
    // beginShape();
    // curveVertex(160, 100);
    // curveVertex(120, 140);
    // curveVertex(140, 120);
    // curveVertex(160, 140);
    // curveVertex(180, 120);
    // curveVertex(140, 100);
    // endShape();
  
    // beginShape();
    // curveVertex(260, 100);
    // curveVertex(220, 140);
    // curveVertex(240, 120);
    // curveVertex(260, 140);
    // curveVertex(280, 120);
    // curveVertex(240, 100);
    // endShape();
  
    // beginShape();
    // curveVertex(360, 100);
    // curveVertex(320, 140);
    // curveVertex(340, 120);
    // curveVertex(360, 140);
    // curveVertex(380, 120);
    // curveVertex(340, 100);
    // endShape();
  
    for (let x = sketchWidth/2; x < sketchWidth; x += 1) {
      circle(x, 50 + sin(Math.PI * 2 * (x / sketchWidth)) * 40, 5);
    }
  }