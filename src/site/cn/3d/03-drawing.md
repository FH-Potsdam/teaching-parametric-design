---
title: Drawing
eleventyNavigation:
  title: Drawing
  key: cn_3d_drawing
  parent: cn_3d
  order: 3
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration %}

## 2D primitives

{{video("https://fhpcloud.fh-potsdam.de/s/6wEjNRJBkRz5Xmd/download/en_3d_drawing_2d.mp4", "/images/thumbnails/en_3d_drawing_2d.png", "en_3d_drawing_2d", translations.subtitles[locale], locale)}}

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

{{video("https://fhpcloud.fh-potsdam.de/s/rBCA9q9MfK7LtxB/download/en_3d_drawing_3d.mp4", "/images/thumbnails/en_3d_drawing_3d.png", "en_3d_drawing_3d", translations.subtitles[locale], locale)}}

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

{{task('Task: Getting used to JSCAD', 'Explore the various 2D and 3D elements JSCAD provides, experiment with the various properties and see how it affects the output.')}}