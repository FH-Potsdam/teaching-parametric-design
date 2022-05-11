function preload(){
    // preload assets
    }
  
    function setup() {              
    createCanvas(400, 400);
    }
    let x = 1;
    let angle = 0; 
  
    function draw() {
      translate(200, 200);        // Koordinatenmittelpunkt in die Mitte verschieben
      background(255);
      
      strokeWeight(10);           // "Rahmen"
      fill('white');
      circle(0, 0, 310);
  
      rotate(Math.PI / 180 * angle);
      strokeWeight(0);
      fill(0);
      circle(0, 0, 50);
  
      beginShape();               
      vertex(0, 0);               // Flügel 1 
      vertex(-50, 150);
      vertex(50, 150);
  
      vertex(0, 0);               // Flügel 2
      vertex(-50, -150);
      vertex(50, -150);
    
      vertex(0, 0);               // Flügel 3
      vertex(150, -50); 
      vertex(150, 50);
  
      vertex(0, 0);               // Flügel 4
      vertex(-150, 50);
      vertex(-150, -50);
  
      endShape(CLOSE);
  
      fill(255);                   //Mittelkreis in weiß
      circle(0, 0, 20);
  
      
      angle += x * 3;                 // drehschnelligkeit und -Richtung
    
      
   
  }
  
  let state = true;
  
  function keyReleased() {
    if (keyCode === LEFT_ARROW) {
      x -= 0.1;
    } 
    if (keyCode === RIGHT_ARROW) {
      x += 0.1;
    }
    if (keyCode === 32) {
      if (state === true) {
        noLoop();
        state = false;
      } else {
        loop();
        state = true;
      }
    } 
    if (keyCode === CONTROL) {
      x = -1;
    } 
    if (keyCode === SHIFT) {
      x = 1;
    } 
  }
    
  
      
  
  
    
  
  
  
  
    