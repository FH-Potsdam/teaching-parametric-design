const SIZE = 400;

const SNOWFLAKES = []
const NUMBER_OF_SNOWFLAKES = 200

noiceScale = 100;
noiseStrength = 1;

function setup() {
  createCanvas(SIZE, SIZE);

  for (let i=0; i < NUMBER_OF_SNOWFLAKES; i++) {

    let x = Math.floor(Math.random() * SIZE);
    let y = Math.floor(Math.random() * SIZE);

    r = 255;
    g = 255;
    b = Math.floor(Math.random() * 200 + 100);

    SNOWFLAKES.push(new Snowflake(x, y, color(r,g,b)))
  }
}

function draw() {
  background(0)

  drawTree(200, 280)

  SNOWFLAKES.forEach( agent => {
    agent.draw()
    agent.update()
  })

  drawSnow()
}

function drawSnow() {
  let width = SIZE;
  let verticesCount = 40;
  let level = SIZE - 50;

  let noiseStrength = 7;
  let noiseScale = 60;

  const vertices = []

  for (let i = 0; i <= verticesCount; i ++) {
    vertices.push(
      { 
        x: i * (width / verticesCount),
        y: noise(i * (width / verticesCount) / noiseScale) * TWO_PI * noiseStrength + level
        // y: sin(i * (width / verticesCount)) * amplitude + level
      }
    )
  }

  fill('#fff')
  beginShape()
  vertex(0, SIZE)
  
  for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y)
  }
  
  vertex(SIZE, SIZE)
  endShape()

}

function drawTree(x, y) {
  noStroke()
  fill('brown')
  rect(x - 10, y + 60, 20, 80)
  renderBranch(x, y + 60, 180, 70, 2)
  renderBranch(x, y + 30, 160, 60, 1.5)
  renderBranch(x, y, 120, 40, 1)
  renderBranch(x, y - 25, 80, 40, 1)
}

function renderBranch(_x, _y, width, height, factor) {
  let pivot = {x: _x - width / 2, y: _y}; 
  
  let lPoint = {x: _x, y: _y - height};
  let lControllPoint_1 = {x: _x, y: _y - height + 10 * factor};
  let lControllPoint_2 = {x: _x - 30 * factor, y: _y - height + 30 * factor};

  let rPoint = {x: _x + width / 2, y: _y};
  let rControllPoint_1 = {x: _x + width / 2 - 50 * factor, y: _y - 15 * factor};
  let rControllPoint_2 = {x: _x + width / 2, y: _y};

  fill('green')
  beginShape()
  vertex(pivot.x, pivot.y)
  bezierVertex(lControllPoint_1.x, lControllPoint_1.y, lControllPoint_2.x, lControllPoint_2.y, lPoint.x, lPoint.y)
  bezierVertex(rControllPoint_1.x, rControllPoint_1.y, rControllPoint_2.x, rControllPoint_2.y, rPoint.x, rPoint.y)
  endShape()
}

class Snowflake {
  constructor(_x, _y, _color) {
    this.size = random(2, 5);
    this.position = { x: _x, y: _y};
    this.speed = 0.2;
    this.iterations = 0;

    this.initialAngle = random(0, 2 * PI);
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.draw = function() {
      fill('#fff')
      circle(this.position.x, this.position.y, this.size);
    };

    this.update = function() {

      this.position.y += this.speed * this.size;
      
      let angle = 0.6 * frameCount / 60 + this.initialAngle;

      this.position.x = width / 2 + this.radius * sin(angle);

      this.moveOnEdge();
    }

    this.moveOnEdge = function() {
      if ( this.position.y >= SIZE ) {
        this.position.y = 0
        this.position.x = Math.floor(Math.random() * SIZE)
      }
      
      if ( this.position.x >= SIZE ) {
        this.position.x = 0
      } else if ( this.position.x <= 0 ) {
        this.position.x = SIZE
      }
    }
  }
}