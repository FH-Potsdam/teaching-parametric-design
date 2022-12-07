
let x = 170;
let y = 210;
let radius = 20;
let breite = 20;

//let inputField;
let counter = 0;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);

  //inputField = createInput();
  //inputField.position(100, 400); 
  //inputField.size(100);

  //let span = createSpan('Dein Score:');
  //span.position(10, 400);

  let span = createSpan(counter);
  span.position(100, 420);

}

function draw() {
  background('lightgrey');

  fill('black');
  rect(0, 0, 400, 20); //Rand
  rect(0, 0, 20, 400); //Rand
  rect(380, 0, 20, 400); //Rand
  rect(0, 380, 400, 20); //Rand
  
  fill('red');
  strokeWeight(0);
  circle(x, y, radius); //Figur

  fill('black');
  //Maze
  rect(340, 40, 60, breite); 
  rect(20, 60, 100, breite);
  rect(340, 80, 20, breite); // 3
  rect(40, 120, 160, breite); //4
  rect(260, 140, 100, breite);
  rect(180, 180, 200, breite);
  rect(100, 220, 220, breite);
  rect(340, 220, 40, breite);
  rect(200, 280, 120, breite);
  rect(20, 320, 80, breite);
  rect(200, 280, 120, breite);

  rect(60, 260, breite, 60); //11
  rect(60, 140, breite, 60);
  rect(80, 340, breite, 20);
  rect(140, 20, breite, 280); //14
  rect(180, 320, breite, 60);
  rect(200, 20, breite, 40); //16
  rect(220, 240, breite, 40);
  rect(220, 80, breite, 100); //18
  rect(280, 20, breite, 60);
  rect(300, 260, breite, 100);
  rect(320, 80, breite, 60); //21
  
  fill('yellow');
  noStroke();
  circle(230, 30, radius); //Punkte
  circle(350, 110, radius);
  circle(110, 170, radius);
  circle(270, 270, radius);
  circle(30, 350, radius);


  //rect(100, 400, 100, 20); //Ausgabebox
  rect(100, 420, 20, 60);


  if  (x === 230 && y === 30) {  
    fill('lightgrey')
    circle(230, 30, radius);
    span = counter ++;
    
  } 
    else if (x === 350 && y === 110) { 
      //fill('lightgrey')
      //circle(350, 110, radius).hide();
      circle(350, 110, radius).visible = false;
      counter += 1;
      console.log(counter);
    }
      else if (x === 110 && y === 170) { 
        fill('lightgrey')
        circle(110, 170, radius);
        counter ++;
        console.log(counter);
     }
       else if (x === 270 && y === 270) { 
        fill('lightgrey')
        circle(270, 270, radius);
        counter ++;
      }
        else if (x === 270 && y === 270) { 
          fill('lightgrey')
          circle(30, 350, radius);
          counter ++;
        }
  // loadPixels();
  // console.log(
  //   pixels[(x + y * 400) * 4 + 1],
  //   pixels[(x + y * 400) * 4 + 2],
  //   pixels[(x + y * 400) * 4 + 3],
  //   pixels[(x + y * 400) * 4 + 4]
  // );
}

function keyPressed() {
  loadPixels();
  if  (keyCode === 37) {  //Pfeil links
    if (pixels[(x - 20 + y * 400) * 4] != 0) {
      x -= 20;
    }
  } 
    else if (keyCode === 39) { // Pfeil recht
      if (pixels[(x + 20 + y * 400) * 4] != 0) {
      x += 20;
      }
  }
      else if (keyCode === 38) { // Pfeil oben 
        if (pixels[(x + (y-20) * 400) * 4] != 0) {
      y -= 20;
        }
    }
       else if (keyCode === 40) { // Pfeil unten
        if (pixels[(x + (y+20) * 400) * 4] != 0) {
       y += 20
        }
      }
}