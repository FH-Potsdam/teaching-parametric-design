**Parametric Design**

# From 2D to 3D

## SVG shapes to 3D objects

Working with 3D-objects is a bit more complex than dealing with 2D designs. But in many cases, it is not even neccessary to directly switch to 3D, but remain in 2D and then use the 2D export (SVG) as a basis to continue working in a GUI-based 3D software like [Fusion 360](https://www.autodesk.com/products/fusion-360/overview), [Rhino](https://www.rhino3d.com/) or [Blender](https://www.blender.org/). Following an example of importing an SVG into Fusion and using the extrusion tool to turn a 2D shape into a 3D form:

VIDEO

## 3D object from code

But sometimes we want to directly create a 3D shape from code. 2D pixel and vector graphics are very forgiving, if objects overlap or paths are not closed, the output might not look perfect, but its still fine. When building 3D objects for rapid prototyping (e.g. 3D-printing or CNC), we need to make sure that our solid bodies are correctly constructed, otherwise the software we will use to send our design to the milling or printing machines will fail.

The open source community has developed the [OpenSCAD](https://openscad.org/) software. In contrast to tools like Fusion 360, OpenSCAD's focus is script/code-based design, which makes this tool great for parametric design. Over the years developers have ported the OpenSCAD programming language to other languages like [JavaScript](https://github.com/jscad/OpenJSCAD.org) or [Python](https://github.com/CadQuery/cadquery). Thanks to this work, we can continue using our JavaScript skills to build our own 3D objects. Similar to p5js' online editor, there is a new platform with similar capabilities for OpenSCAD: [cadhub.xyz](https://cadhub.xyz/) (this website is a community project still under development).

IMAGE

# OpenJSCAD / JSCAD

## Inspect 3D project in the browser

To create your first 3D project, the process is the same as for p5js, we just use a different boilerplate. Duplicate the `3D-example` folder. You will find a couple of commands as examples in the `index.js` file. We will go through all those commands in a moment. For now let's open the new 3D code in the browser. Navigate to the folder `/code/libraries/OpenJSCAD/` select the `index.html` and use the **Go Live** function to open this html-file in your browser. You should be presented with an empty coordinate system. In the upper left click on *Load JSCAD project*. Now you need to select the folder you created (do not select the index.js, select the whole folder). If your code did not include any errors, you should now see your 3D design. (I am working on an easier solution similar to our p5js sketches, but its sadly not done yet.)

You can use your mouse-wheel or trackpad scrolling to zoom in and out. Hold your mouse-pressed and drag to rotate the coordinate system. More controls are explained under the settings button in the upper right. There you can also change language and theme. Please note that the edit button in the upper right does not fully work, best simply ignore it. The most interesting part is the Export feature. In the upper left you find a dropdown with a variety of formats. For our use cases the binary STL file is best suited.

You can find the full reference for all JSCAD features [here](https://openjscad.xyz/docs).

## Boilerplate

```js
// importing jscad functions
const jscad = require('@jscad/modeling');
// creating shortcuts
const {cube} = jscad.primitives;

// this is where we draw our shapes
const main = () => {
  const cubeObject = cube();

  // when we are done we return one shape or an array of shapes
  return cubeObject;
}

// this lets javascript know what to execute once we import this
module.exports = { main }
```

Let's start from the top. In our p5js boilerplate everything is ready to use. Here we need to load the JSCAD library ourselves. `const jscad = require('@jscad/modeling');` loads the JSCAD commands. Some commands are hidden deep inside the JSCAD library structure. To create a cube, we need to write `jscad.primitives.cube()`. To help us write less code, we can import specific commands and then directly use them: `const {cube} = jscad.primitives;` now we can write `cube()`. Here is another example: `jscad.transforms.translate()` > `const { translate } = jscad.transforms;` `translate();`.

```js
const main = () => {
  // Here we draw
};
```

Similar to p5js' `draw()` the main is our drawing function. Please note, that in contrast to p5js this function is only called once and not as a loop.

> `() => {}` is short for `function () {}`

> `const main = () => {};` stores the function in the variable `main`, so we can execute it with `main();`.

The `main` function needs to return something that the system can render for us. The return is either a single 3D body or an array of bodies.

## 3D-Primitives

A documentation of all primitives can be found [here](https://openjscad.xyz/docs/module-modeling_primitives.html).

### Cube

### Sphere

### Cylinder

### Polyhedron

## From 2D to 3D 

### Polygon


### Extruding & Expanding


## Colors




## Coordinate system transformations

A documentation of all transformations can be found [here](https://openjscad.xyz/docs/module-modeling_transforms.html).

p5js

### Translate

### Rotate

### Scale


## Boolean Operations 
