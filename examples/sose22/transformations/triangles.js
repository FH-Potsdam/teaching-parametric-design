function preload() {
    // preload assets
  }
  
  function setup() {
    createCanvas(400, 400);
    frameRate(2);
    colorMode(HSL);
  }
  
  let saturationValue = 100;
  let brightnessValue = 70;
  
  function draw() {
    background(255);
  
    let weiß = [255, random(0, 25), 255, 255, 255, 255]; //zufall zwischen weiß oder zufälliger Farbe
  
    for (let x = 0; x < 10; x += 1) {
      //x wert
      for (let y = 0; y < 10; y += 1) {
        //y wert
        push();
  
        translate(100 * x, 200 * y);
        fill(random(0,255), saturationValue, brightnessValue);
        triangle(50, 0, 100, 100, 0, 100);
        fill(random(0,255), saturationValue, brightnessValue);
        triangle(50, 0, -50, 0, 0, 100);
  
        fill(random(0,255), saturationValue, brightnessValue);
        triangle(0, 100, -50, 200, 50, 200);
        fill(random(0,255), saturationValue, brightnessValue);
        triangle(100, 100, 0, 100, 50, 200);
        pop();
      }
    }
  }