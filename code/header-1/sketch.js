const sketchWidth = window.innerWidth;
const sketchHeight = 500;

const divisionSets = [3,4,5,8,12,20];
const spheres = [];
const radius = 70;
const buffer = 40;
const shapeCount = Math.min(divisionSets.length, Math.floor(sketchWidth / ((radius + buffer) * 2)));
const padding = radius;

let color1;
let color2;

let cam;
let font;

function preload () {
  font = loadFont('./assets/IBMPlexMono-MediumItalic.otf');
}


function setup () {
  createCanvas(sketchWidth, sketchHeight, WEBGL);

  ortho(
    -width / 2,
     width / 2,
     -height / 2,
     height / 2,
     0,
     800
    );

  for (let d = 0; d < shapeCount; d += 1) {
    spheres.push(spherePoly(radius, divisionSets[d]));
  }

  // orange to pink
  // color1 = color(231,111,0);
  // color2 = color(231,0,83);

  // blue to green
  color1 = color(20,168,115);
  color2 = color(16,139,208);

  colorMode(RGB);

  textFont(font);
  textSize(14);
}

function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {x, y};
}

function dist0(p1) {
  return Math.sqrt(Math.pow(p1.x, 2) + Math.pow(p1.y, 2));
} 

let rotation = 0;

const rotationOffset = {
  x: 0,
  y: 0,
  z: Math.PI / 4
};

function draw() {
  background(255);
  push();

  for (let d = 0; d < shapeCount; d += 1) {
    push();
    const c = lerpColor(color1, color2, d / (shapeCount-1));
    stroke(c);
    translate(-sketchWidth/2 + sketchWidth / shapeCount * d + (sketchWidth / shapeCount / 2), 0, 0);
    fill(c);
    strokeWeight(2);
    push();
    translate(-radius - 25, radius + 25, 0);
    text('d=' + divisionSets[d], 0, 0, 0);
    translate(-5, 4);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    pop();
    noFill();
    strokeWeight(1);
    const rotAngle = Math.PI / 180 * rotation;
    rotateZ(mouseX/sketchWidth * Math.PI * 2 + rotationOffset.z + rotAngle);
    rotateY(mouseY/sketchHeight * Math.PI * 2 + rotationOffset.y + rotAngle);
    rotateX(rotAngle + rotationOffset.x);
    drawSpherePoly(spheres[d]);
    pop();
  }
  rotation += 0.5;

  pop();
}

function drawSpherePoly(poly) {
  poly.forEach(p => {
    beginShape();
    p.forEach(pos => {
      vertex(pos.x, pos.y, pos.z);
    });
    endShape();
  });
}

function spherePoly (radius, divisions) {
  const shapes = [];
  const points = JSON.parse(JSON.stringify(new Array(divisions).fill(new Array(divisions).fill([]))));
  for (let d1 = 0; d1 < divisions; d1 += 1) {
    const p1 = polar(radius, 180 / (divisions - 1) * d1);
    const shape = [];
    for (let d2 = 0; d2 < divisions; d2 += 1) {
      const p2 = polar(p1.y, 360 / divisions * d2);
      points[d2][d1] = {x: p1.x, y: p2.y, z: p2.x};
      shape.push({x: p1.x, y: p2.y, z: p2.x});
    }
    shape.push(shape[0]);
    shapes.push(shape);
  }
  points.forEach(p => {
    const shape = [];
    p.forEach(pos => {
      shape.push({x: pos.x, y: pos.y, z: pos.z});
    });
    shapes.push(shape);
  });
  return shapes;
}