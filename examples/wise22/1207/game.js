
let x = 1;
let y = 1;
let radius = 20;
let breite = 20;

//let inputField;
let counter = 0;

const fieldDefinition = [
[1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,1,0,3,1],
[1,0,2,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1],
];

function preload(){
  // preload assets
}

let span;

function setup() {
  createCanvas(400, 400);

  //inputField = createInput();
  //inputField.position(100, 400); 
  //inputField.size(100);

  //let span = createSpan('Dein Score:');
  //span.position(10, 400);

  span = createSpan(counter);
  span.position(100, 420);

}

const gridSize = 20;

function draw() {
  background('lightgrey');
  noStroke();

  for (let fy = 0; fy < fieldDefinition.length; fy += 1) {
    for (let fx = 0; fx < fieldDefinition[fy].length; fx += 1) {
      const f = fieldDefinition[fy][fx];
      fill('lightgrey');
      if (f === 1) {
        fill('black');
        rect(fx * gridSize, fy * gridSize, gridSize, gridSize);
      } else if (f === 3) {
          fill('green');
          rect(fx * gridSize, fy * gridSize, gridSize, gridSize);
      } else if (f === 2) {
        fill('yellow');
        circle((fx + 0.5) * gridSize, (fy+0.5) * gridSize, gridSize, gridSize);
        fill('black');
        text(1, (fx + 0.5) * gridSize, (fy+0.5) * gridSize);
      }
      
    }
  }

  fill('red');
  circle(gridSize * x + gridSize*0.5, gridSize * y + gridSize*0.5, gridSize);

  // fill('black');
  // rect(0, 0, 400, 20); //Rand
  // rect(0, 0, 20, 400); //Rand
  // rect(380, 0, 20, 400); //Rand
  // rect(0, 380, 400, 20); //Rand
  
  // fill('red');
  // strokeWeight(0);
  // circle(x, y, radius); //Figur

  // fill('black');
  // //Maze
  // rect(340, 40, 60, breite); 
  // rect(20, 60, 100, breite);
  // rect(340, 80, 20, breite); // 3
  // rect(40, 120, 160, breite); //4
  // rect(260, 140, 100, breite);
  // rect(180, 180, 200, breite);
  // rect(100, 220, 220, breite);
  // rect(340, 220, 40, breite);
  // rect(200, 280, 120, breite);
  // rect(20, 320, 80, breite);
  // rect(200, 280, 120, breite);

  // rect(60, 260, breite, 60); //11
  // rect(60, 140, breite, 60);
  // rect(80, 340, breite, 20);
  // rect(140, 20, breite, 280); //14
  // rect(180, 320, breite, 60);
  // rect(200, 20, breite, 40); //16
  // rect(220, 240, breite, 40);
  // rect(220, 80, breite, 100); //18
  // rect(280, 20, breite, 60);
  // rect(300, 260, breite, 100);
  // rect(320, 80, breite, 60); //21
  
  // fill('yellow');
  // noStroke();
  // circle(230, 30, radius); //Punkte
  // circle(350, 110, radius);
  // circle(110, 170, radius);
  // circle(270, 270, radius);
  // circle(30, 350, radius);


  // //rect(100, 400, 100, 20); //Ausgabebox
  // rect(100, 420, 20, 60);


  // if  (x === 230 && y === 30) {  
  //   fill('lightgrey')
  //   circle(230, 30, radius);
  //   span = counter ++;
    
  // } 
  //   else if (x === 350 && y === 110) { 
  //     //fill('lightgrey')
  //     //circle(350, 110, radius).hide();
  //     circle(350, 110, radius).visible = false;
  //     counter += 1;
  //     console.log(counter);
  //   }
  //     else if (x === 110 && y === 170) { 
  //       fill('lightgrey')
  //       circle(110, 170, radius);
  //       counter ++;
  //       console.log(counter);
  //    }
  //      else if (x === 270 && y === 270) { 
  //       fill('lightgrey')
  //       circle(270, 270, radius);
  //       counter ++;
  //     }
  //       else if (x === 270 && y === 270) { 
  //         fill('lightgrey')
  //         circle(30, 350, radius);
  //         counter ++;
  //       }
  span.html('Deine Punktestand: <span class="counter">' + counter + '</span>');
}

function keyPressed() {
  loadPixels();
  if  (keyCode === 37) {  //Pfeil links
    if (fieldDefinition[y][x-1] != 1) {
      x -= 1;
    }
  } 
    else if (keyCode === 39) { // Pfeil recht
      if (fieldDefinition[y][x+1] != 1) {
      x += 1;
      }
  }
      else if (keyCode === 38) { // Pfeil oben 
        if (fieldDefinition[y-1][x] != 1) {
      y -= 1;
        }
    }
       else if (keyCode === 40) { // Pfeil unten
        if (fieldDefinition[y+1][x] != 1) {
       y += 1
        }
      }
  if(fieldDefinition[y][x] === 2) {
    counter++;
    fieldDefinition[y][x] = 0;
  }
}