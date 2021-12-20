**Parametric Design**

## AR/VR

I have created a [repo](https://github.com/FH-Potsdam/ar-prototyping/) with examples on how to build easy prototypes with [ARjs](https://ar-js-org.github.io/AR.js-Docs/) and [AFRAME](https://aframe.io/).

If you want to simply display a 3D-object you created in **JSCAD**, then use the *01_basic_vr* or *02_basic_ar* example from the repo above. To convert your 3D-object into the right format, open it in Blender and save it as **gltf**.

In addition here is an example on how to build a 2D augmented reality tool, which places a p5js canvas in the real world.

### Setup

The easiest is to copy the boilerplate form the prototyping [repo](https://github.com/FH-Potsdam/ar-prototyping/). But you can also add it to your p5js repo:

1. Download [aframe-ar.js](https://github.com/FH-Potsdam/ar-prototyping/blob/main/assets/arjs/aframe-ar.js) and save it to *code/libraries*.
   
2. Download [aframe-v1.2.0.min.js](https://github.com/FH-Potsdam/ar-prototyping/blob/main/assets/aframe/aframe-v1.2.0.min.js) and save it to *code/libraries*.

### p5js + arjs + aframe

Here is the sample HTML setup:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <script src="../libraries/aframe-v1.2.0.min.js"></script>
  <script src="../libraries/aframe-ar.js"></script>
  <script src="../libraries/p5js/p5.min.js"></script>
  <script src="sketch.js"></script>
</head>
<body>
  <a-scene embedded arjs>
    <a-assets id="assets-container"></a-assets>
  </a-scene>
</body>
</html>
```

And here is the sketch.js file:

```js
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
```

In the **setup** we are adding simple plane to our AR/VR scene and then we are using our canvas as the material/texture. After that you can simply draw things like in a normal p5js project. Just make sure to keep the last 4 lines of **draw**, this makes sure the ar/vr object is updated after we draw something new to the canvas.

You could also combine this with a marker setup. Explore the ar-prototyping repo for more examples.
