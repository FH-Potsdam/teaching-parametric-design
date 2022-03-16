---
title: Drawing
eleventyNavigation:
  title: Drawing
  key: de_3d_drawing
  parent: de_3d
  order: 3
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from "../../_includes/parts/macros.njk" import img %}

## 2D primitives

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/2d-primitives-final.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/gJSXCSgYinskq6X
en: https://fhpcloud.fh-potsdam.de/s/6wEjNRJBkRz5Xmd
-->

```js
const {line, arc, circle, ellipse, rectangle} = jscad.primitives;
```

2D primitives are often a good start. You can use extrusion and expansion commands, to turn 2D shapes into 3D bodies (see below).

A documentation of all primitives can be found [here](https://openjscad.xyz/docs/module-modeling_primitives.html). 

{{h2('Line')}}

The line command takes two arrays of two numbers each:

```js
const shape = line([
  [x1, y1],
  [x2, y2]
]);
```

> You can also pass an array with more points to create a path.

{{h2('Arc')}}

The arc also produces a line and works similar to the p5js arc function:

```js
const shape = arc({
  center: [0, 0],
  radius: 1,
  startAngle: 0,
  endAngle: Math.PI * 2, //full arc
  segments: 32 // level of detail
});
```

> Most properties in JSCAD are optional and have a default value, so you only need to provide the ones you really need.

{{h2('Circle')}}

```js
const shape = circle({
  center: [0, 0],
  radius: 1,
  startAngle: 0,
  endAngle: Math.PI * 2, //full arc
  segments: 32 // level of detail
});
```

> Circle looks exactly like arc, the important difference is, that arc returns a line and circle a polygon.

{{h2('Ellipse')}}

Circle and ellipse take similar parameters, radius is an array for ellipse, defining the radius on x and y axis:

```js
const shape = ellipse({
  center: [0, 0],
  radius: [1,1],
  startAngle: 0,
  endAngle: Math.PI * 2, //full arc
  segments: 32 // level of detail
});
```

> Most round features, like ellipses, spheres or rounded corners, have a segment parameter. This defines the level of detail of curves. More segments lead to rounder curves, but also more complex objects (bigger files, longer rendering times, etc.).

{{h2('Rectangle')}}

```js
const shape = rectangle({
  size: [2, 2],
  center: [0, 0, 0]
});
```


## 3D-Primitives

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/3d-primitives.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/LxYHETDD3QJayF9
en: https://fhpcloud.fh-potsdam.de/s/rBCA9q9MfK7LtxB
-->

```js
const {cube, sphere, cylinder} = jscad.primitives;
```

A documentation of all primitives can be found [here](https://openjscad.xyz/docs/module-modeling_primitives.html).

{{h2('Cube')}}

```js
const shape = cube({
  size: 1,
  center: [0, 0, 0]
});
```

### Sphere

```js
const shape = sphere({
  radius: 1,
  center: [0, 0, 0]
});
```

### Cylinder

```js
const shape = cylinder({
  center: [0, 0, 0],
  height: 2,
  radius: 1,
  segments: 32
});
```

There are a few more 3D primitives to explore, examples for how to construct them are included in the boilerplate:

- [cuboid](https://openjscad.xyz/docs/module-modeling_primitives.html#.cuboid)
- [roundedCuboid](https://openjscad.xyz/docs/module-modeling_primitives.html#.roundedCuboid)
- [geodesicSphere](https://openjscad.xyz/docs/module-modeling_primitives.html#.geodesicSphere)
- [ellipsoid](https://openjscad.xyz/docs/module-modeling_primitives.html#.ellipsoid)
- [roundedCylinder](https://openjscad.xyz/docs/module-modeling_primitives.html#.roundedCylinder)
- [cylinderElliptic](https://openjscad.xyz/docs/module-modeling_primitives.html#.cylinderElliptic)
- [torus](https://openjscad.xyz/docs/module-modeling_primitives.html#.torus)


NEW CHAPTER TRANSFORMS
## Colors

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/3d-colors.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/48gsXjqzbbLxGmz
en: https://fhpcloud.fh-potsdam.de/s/J4yoWNnmawzrYQM
-->

```js
const {colorize, colorNameToRgb} = jscad.colors;
```

Colors can help us for prototyping and design our shapes. But have in mind, that depending on what you are going to do with your 3D object, you will likely have to reassign materials to your shapes.

We can either use RGB values:

```js
const shape = colorize([R, G, B], cube());
```

> Important: RGB are not 

Or use color names:

```js
const shape = colorize(colorNameToRgb('black'), cube());
```

## Transformations

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/transforms.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/QPkkPMNra3GcfJT
en: https://fhpcloud.fh-potsdam.de/s/ycBJZ2a88Y8gc5i
-->

```js
const {translate, rotate, scale, center, align} = jscad.transforms;
```


A documentation of all transformations can be found [here](https://openjscad.xyz/docs/module-modeling_transforms.html).

Similar to the p5js coordinate system transformations, we can transform individual objects. In contrast to p5js we don't transform the whole coordinate system, but only individual objects.

### Translate

Move object along three dimensions:

```js
const shape = translate([0, 0, 5], cube());
```

### Rotate

Rotate object along x/y/z-axis:

```js
const shape = rotate([0, 0, Math.PI / 2], cube());
```

### Scale

Resize (multiply) along dimensions:

```js
const shape = scale([0, 2, 0], cube());
```

### Center

The center function allows us to center an object on one or multiple axis. If all set to `true` its placed on the center at `[0,0,0]`:

```js
const shape = center([true, true, true], cube());
```

Multi Transforms in Loops!!!!

<!--
de: https://fhpcloud.fh-potsdam.de/s/3gpzE9x3CiHFySf
en: https://fhpcloud.fh-potsdam.de/s/HyCYdBfaWi49Lzm
-->