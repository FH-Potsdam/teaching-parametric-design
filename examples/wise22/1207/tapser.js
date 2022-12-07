/*
Idee: Katzentapser, die über den Bildschirm laufen...

//-------------------------------------------

The Nature of Code 2 - The Coding Train
-1.1 What is a Vector?
-1.2 Vector Math
-1.3 Random Vectors
-1.4 Static Funktions
-1.5 A Unit Vector (Normalize)
-3.3 Angles and Vectors
 */

let sketchWidth = 400;
let sketchHeight = 400;
let tapser = [];

//-----------------------------------------------
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  for (let t = 0; t < 10; t += 1) {
    tapser.push(new Tapser());
  }
}

function draw() {
  background(0);

  tapser.forEach(t => {
    t.move();
    t.bouncing();
    t.print();   
  })
  
}

function mouseClicked() {
  fill(color(random(255), random(255), random(255)));
}

class Tapser {
  constructor() {
    this.position = createVector(sketchWidth/4, sketchHeight/4);
    // this.speed = createVector(2, 1);
    this.colorVariable = color(random(255), random(255), random(255));
    this.speed = p5.Vector.random2D(); //für eine Random Richtung
  }

  move() {
    this.position.add(this.speed);
  }

  bouncing() {
    if(
      (this.position.x > sketchWidth) ||
      (this.position.x < 0)
    ) {
      this.speed.x = this.speed.x * -1;
      this.colorVariable = color(random(255), random(255), random(255));
    }
    if(
      (this.position.y > sketchHeight) ||
      (this.position.y < 0)
    ) {
      this.speed.y = this.speed.y * -1;
      this.colorVariable = color(random(255), random(255), random(255));
    }
  }

  print() {
    push();
    noStroke();

    fill(this.colorVariable);
    // translate(this.position.x, this.position.y);
    let r = createVector(5,10);

    // if (this.speed.x < 0) {
    //   rotate(Math.atan(this.speed.y / this.speed.x) + Math.PI/1.5);
    // } else {
    //   rotate(Math.atan(this.speed.y / this.speed.x) * -1);
    // }

    translate(this.position.x, this.position.y + 3); 
    
    ellipse(- 10, - 3 - 3, r.x, r.y);
    ellipse(+ 10, - 3 - 3, r.x, r.y);
    ellipse(- 4, - 10 - 3, r.x, r.y);
    ellipse(+ 4, - 10 - 3, r.x, r.y);

    
    rotate(Math.PI / 180 * 270);

    noFill();
    stroke('white');

    beginShape();
    let t = 0;
    for(let angle = 0; angle < 60; angle += 5) {
      let radius = 8 - t;
      const x = radius * cos(Math.PI / 180 * angle);
      const y = radius * sin(Math.PI / 180 * angle);
      vertex(x, y);
      t += 0.2;
    }
    let t1 =0
    for(let angle = 60; angle < 120; angle += 5) {
      let radius = 5.6 + t1;
      const x = radius * cos(Math.PI / 180 * angle);
      const y = radius * sin(Math.PI / 180 * angle);
     vertex(x, y);
      t1 += 0.2;
    }
    let t2 = 0;
    for(let angle = 120; angle < 180; angle += 5) {
      let radius = 8 - t2;
      const x = radius * cos(Math.PI / 180 * angle);
      const y = radius * sin(Math.PI / 180 * angle);
      vertex(x, y);
      t2 += 0.2;
    }
    let t3 =0
    for(let angle = 180; angle < 240; angle += 5) {
      let radius = 5.6 + t3;
      const x = radius * cos(Math.PI / 180 * angle);
      const y = radius * sin(Math.PI / 180 * angle);
      vertex(x, y);
      t3 += 0.2;
    }
    let t4 = 0;
    for(let angle = 240; angle < 300; angle += 5) {
      let radius = 8 - t4;
      const x = radius * cos(Math.PI / 180 * angle);
      const y = radius * sin(Math.PI / 180 * angle);
      vertex(x, y);
      t4 += 0.2;
    }
    let t5 =0
    for(let angle = 300; angle < 360; angle += 5) {
      let radius = 5.6 + t5;
      const x = radius * cos(Math.PI / 180 * angle);
      const y = radius * sin(Math.PI / 180 * angle);
      vertex(x, y);
      t5 += 0.2;
    }
    endShape(CLOSE);
    pop();
  }
}