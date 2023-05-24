let sketchWidth = window.innerWidth;
const sketchHeight = 250;

const divisionSets = [3,4,5,8,12,20];
const spheres = [];
let colors = [];
const radius = 70;
const buffer = 40;
let shapeCount = 1;
const padding = radius;

let color1;
let color2;

let cam;
let font;

function preload () {
  font = loadFont('/fonts/inter/inter-v7-vietnamese_latin-ext-700.ttf');
}

function updateSize () {
  sketchWidth = window.innerWidth;
  resizeCanvas(sketchWidth, sketchHeight);
  shapeCount = Math.min(divisionSets.length, Math.floor(sketchWidth / ((radius + buffer) * 2)));
  ortho(
    -width / 2,
     width / 2,
     -height / 2,
     height / 2,
     0,
     800
  );
  colors = [];
  for (let d = 0; d < shapeCount; d += 1) {
    colors.push(lerpColor(color1, color2, shapeCount === 1 ? 0 : d / (shapeCount-1)));
  }
}

function debounce(func, time = 100){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
}

window.addEventListener("resize", debounce( updateSize, 150 ));

function setup () {
  // blue to green
  color1 = color(20,168,115);
  color2 = color(16,139,208);

  const canvas = createCanvas(sketchWidth, sketchHeight, WEBGL);
  canvas.parent('header-sketch');
  updateSize();

  noLights();


  for (let d = 0; d < divisionSets.length && d < shapeCount; d += 1) {
    spheres.push(spherePoly(radius, divisionSets[d]));
  }

  textFont(font);
  textSize(14);
}

function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = Math.round(radius * Math.cos(rad) * 100) / 100;
  const y = Math.round(radius * Math.sin(rad) * 100) / 100;
  return {x, y};
}

function dist0(p1) {
  return Math.sqrt(Math.pow(p1.x, 2) + Math.pow(p1.y, 2));
} 

let rotation = 150;

const rotationOffset = {
  x: 0,
  y: 0,
  z: Math.PI / 4
};

function draw() {
  clear();
  push();

  for (let d = 0; d < shapeCount; d += 1) {
    push();
    const c = colors[d];;
    stroke(c);
    translate(-sketchWidth/2 + sketchWidth / shapeCount * d + (sketchWidth / shapeCount / 2), 0, 0);
    fill(c);
    strokeWeight(4);
    push();
    translate(-20, radius + 25, 0);
    text('d=' + divisionSets[d], 0, 0, 0);
    translate(-5, 4);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    pop();
    noFill();
    strokeWeight(2);
    const rotAngle = Math.PI / 180 * rotation;
    rotateZ(mouseX/window.innerWidth * Math.PI * 2 + rotationOffset.z + rotAngle);
    rotateY(mouseY/window.innerHeight * Math.PI * 2 + rotationOffset.y + rotAngle);
    rotateX(rotAngle + rotationOffset.x);
    model(spheres[d]);
    pop();
  }
  rotation += 0.25;

  pop();
}

function spherePoly (radius, divisions) {
  const obj = new p5.Geometry(1, 1);

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

  const vertexMap = {};

  const getVertexId = (x,y) => {
    const id = x + '_' + y;
    if (id in vertexMap)  {
      return vertexMap[id];
    }
    const v = createVector(points[x][y].x, points[x][y].y, points[x][y].z);
    obj.vertices.push(v);
    const idx = obj.vertices.length - 1;
    vertexMap[id] = idx;
    return idx;
  };

  for (let x = 0; x < points.length; x += 1) {
    for (let y = 0; y < points[x].length - 1; y += 1) {
      const nextX = x === points.length - 1 ? 0 : x + 1;
      const nextY = y === points[x].length - 1 ? 0 : y + 1;
      const face = [];
      face.push(getVertexId(x,y));
      face.push(getVertexId(nextX,y));
      face.push(getVertexId(nextX,nextY));
      face.push(getVertexId(x,nextY));
      obj.faces.push(face);
    }
  }

  obj.gid = 'geom_' + divisions;
  // obj.computeNormals();
  return obj;
}