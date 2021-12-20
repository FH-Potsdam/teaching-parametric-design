function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('assets-container');
  const canvasEl = document.querySelector('a-assets>canvas');
  canvasEl.setAttribute('id', 'textureCanvas');

  const plane = document.createElement('a-plane');
  plane.setAttribute('id', 'planeObject')
  plane.setAttribute('position', '0 2 -5');
  plane.setAttribute('rotation', '0 0 0');
  plane.setAttribute('width', '4');
  plane.setAttribute('height', '4');
  plane.setAttribute('material', 'src: #textureCanvas; transparent: true; opacity: 0.75;');
  document.querySelector('a-scene').appendChild(plane);
}

function draw() {
  background('red');
  stroke('black');
  fill('blue');
  rect(10, 10, 380, 380);

  fill('white');
  for (let c = 0; c < 10; c += 1) {
    circle(random(15, 385), random(15, 385), 5);
  }

  let material = document.querySelector('#planeObject').getObject3D('mesh').material;
  if (material.map) {
    material.map.needsUpdate = true;
  }
}