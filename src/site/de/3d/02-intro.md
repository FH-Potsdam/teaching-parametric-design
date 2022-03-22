---
title: JSCAD
eleventyNavigation:
  title: JSCAD
  key: de_3d_jscad
  parent: de_3d
  order: 2
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, inspiration, task %}

But sometimes we want to directly create a 3D shape from code. 2D pixel and vector graphics are very forgiving, if objects overlap or paths are not closed, the output might not look perfect, but its still fine. When building 3D objects for rapid prototyping (e.g. 3D-printing or CNC), we need to make sure that our solid bodies are correctly constructed, otherwise the software we will use to send our design to the milling or printing machines will fail.

{{h2('OpenSCAD')}}

{{video("https://fhpcloud.fh-potsdam.de/s/w9egGf2MQ9KdbHe/download/de_3d_jscad_openscad.mp4", "/images/thumbnails/de_3d_jscad_openscad.png", "de_3d_jscad_openscad", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/s6nWEmrsK8GtXbG
en: https://fhpcloud.fh-potsdam.de/s/w9egGf2MQ9KdbHe
-->

The open source community has developed the [OpenSCAD](https://openscad.org/) software. In contrast to tools like Fusion 360, OpenSCAD's focus is script/code-based design, which makes this tool great for parametric design. Over the years developers have ported the OpenSCAD programming language to other languages like [JavaScript](https://github.com/jscad/OpenJSCAD.org) or [Python](https://github.com/CadQuery/cadquery). Thanks to this work, we can continue using our JavaScript skills to build our own 3D objects. Similar to p5js' online editor, there is a new platform with similar capabilities for OpenSCAD: [cadhub.xyz](https://cadhub.xyz/) (this website is a community project still under development).


{{h2('JSCAD')}}

{{video("https://fhpcloud.fh-potsdam.de/s/aDz5aNQ2Y5gqrbG/download/de_3d_jscad_jscad.mp4", "/images/thumbnails/de_3d_jscad_jscad.png", "de_3d_jscad_jscad", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/YnZsQTeeQgafFJy
en: https://fhpcloud.fh-potsdam.de/s/aDz5aNQ2Y5gqrbG
-->
## Inspect 3D project in the browser

To create your first 3D project, the process is the same as for p5js, we just use a different boilerplate. Duplicate the `3D-example` folder. You will find a couple of commands as examples in the `index.js` file. We will go through all those commands in a moment. Open the `index.html` in your new folder with the *Go Live* extension. When you make changes to the `index.js` file and save, the website in your browser should reload automatically. (Please note that the last rotation and zoom of the camera will be reset).

You can use your mouse-wheel or trackpad scrolling to zoom in and out. Hold your mouse-pressed and drag to rotate the coordinate system. More controls are explained under the settings button in the upper right. There you can also change language and theme. The most interesting part is the export feature. In the upper left you find a dropdown with a variety of formats. For our use cases the binary STL file is best suited.

You can find the full reference for all JSCAD features [here](https://openjscad.xyz/docs).

{{h2('Boilerplate')}}


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

Similar to p5js' `draw()` the `main()` is our drawing function. Please note, that in contrast to p5js this function is only called once and not as a loop.

> `() => {}` is short for `function () {}`

> `const main = () => {};` stores the function in the variable `main`, so we can execute it with `main();`.

The `main` function needs to return something that the system can render for us. The return is either a single 3D body or an array of bodies:

```js
const main = () => {
  const shapes = [];
  shapes.push(cube());
  shapes.push(cube());
  return shapes;
};
```

{{h2('Function Parameters')}}

In p5js commands like `rect` take a certain amount of parameters: `rect(x, y, width, height)`. In JSCAD most functions take a single object with several properties: `cube({center: [0,0,0], size: 2})`. This approach can have a lot of advantages, e.g. you can create a parameter object and pass it to multiple commands or modify only certain aspects of the object:

```js
const main = () => {
  const shapes = [];
  const cubeProps = {
    size: 1,
    center: [0, 0, 0]
  };
  for (let c = 0; c < 10; c += 1) {
    shapes.push(translate([0, 0, c * 2], cube(cubeProps));
  }
  return shapes;
};
```