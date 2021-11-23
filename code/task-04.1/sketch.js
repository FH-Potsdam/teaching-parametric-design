const sketchWidth = 400;
const sketchHeight = 400;

const swirlTopLeft = new Swirl(47, -40, -15, 5, 1.2, 200-50, 200-40)
const swirlBottom = new Swirl(47, -160, -15, 5, 1.2, 200, 200+50)
const swirlTopRight = new Swirl(47, 90, -15, 5, 1.2, 200+50, 200-40)

function setup () {
  createCanvas(sketchWidth, sketchHeight, SVG);

  swirlTopLeft.calculatePoints()
  swirlBottom.calculatePoints()
  swirlTopRight.calculatePoints()
}

function draw() {
  background(255);
  noFill();
  stroke('black');
  strokeWeight(10);

  swirlTopLeft.draw();
  swirlBottom.draw();
  swirlTopRight.draw();

  noLoop()
  // un-comment to save
  // save()
}

function Swirl(_limit, _offset, _angleInterval, _startRadius, _radiusInterval, _posX, _posY) {
  this.points = [];
  this.limit = _limit;
  this.offset = _offset;
  this.angleInterval = _angleInterval;
  this.startRadius = _startRadius;
  this.radiusInterval = _radiusInterval;
  this.posX = _posX;
  this.posY = _posY;

  this.calculatePoints = function() {
    for (let i = 0; i < this.limit; i += 1){
      const angle = this.offset - i * this.angleInterval;
      const radius = this.startRadius + this.radiusInterval * i;
      this.points.push({
        x: polarX(radius, angle),
        y: polarY(radius, angle) 
      });
    }
  }

  this.draw = function() {
    push()
    translate(this.posX, this.posY);

    beginShape();
    for (let i = 0; i < this.limit; i += 1){
      vertex(this.points[i].x, this.points[i].y);
    }
    endShape();
    pop()
  }
}

function polarX(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  return x;
}

function polarY(radius, angle) {
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return y;
}