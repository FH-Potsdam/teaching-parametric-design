---
title: Operations
eleventyNavigation:
  title: Operations
  key: de_3d_operations
  parent: de_3d
  order: 5
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from "../../_includes/parts/macros.njk" import img %}

### Align

After creating multiple objects, `align` allows you to align an array of objects:

```js
const shapes = [
  cube({center: [0, 0, 10]}),
  cube({center: [0, 10, 20]}),
  cube({center: [10, 0, 30]})
];

const alignedShapes = align(
  {
    modes: ['center', 'max', 'none'], // align along axis: center, min, max, none
    realtiveTo: [0,0,0]
  },
  shapes
);
```

REMOVE!!!
### Combining multiple transforms
<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/transform-combinations.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Transforms and Loops example
<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/transform-example.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Boolean Operations

```js
const {union, subtract, intersect, scission} = jscad.booleans;
```

<!--
de: https://fhpcloud.fh-potsdam.de/s/H6pxGHAK3L2toz8
en: https://fhpcloud.fh-potsdam.de/s/CTpg3ZoW4MeTbg4
-->

<img src="./assets/boolean.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

### Union

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/union.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/Qx4nJMdWEMZJcLH
en: https://fhpcloud.fh-potsdam.de/s/W7nGNox8GxSgaZx
-->

<img src="./assets/union.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

Combines an array of geometries into one new geometry:

```js
const shapes = [
  cube({size: 4}),
  sphere({radius: 2, center: [2, 2, 2]})
];
const unionShape = union(shapes);
return unionShape;
```

### Subtract

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/subtract.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/tNptWrS8MsR8Wgc
en: https://fhpcloud.fh-potsdam.de/s/YBSTc2sotQqjjL4
-->

<img src="./assets/subtract.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

Cut out shapes from the first shape in the list:

```js
const shapes = [
  cube({size: 4}),
  sphere({radius: 2, center: [2, 2, 2]})
];
const subtractShape = subtract(shapes);
return subtractShape;
```

### Intersect

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/intersect.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/AbTmmBszxJebZSf
en: https://fhpcloud.fh-potsdam.de/s/aagrSLH7RxbPQnD
-->

<img src="./assets/intersect.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

The overlapping areas of the object in the array:

```js
const shapes = [
  cube({size: 4}),
  sphere({radius: 2, center: [2, 2, 2]})
];
const intersectShape = intersect(shapes);
return intersectShape;
```

### Scission

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/scission.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--
de: https://fhpcloud.fh-potsdam.de/s/YsaMsWnaqQYDfQr
en: https://fhpcloud.fh-potsdam.de/s/iPkWfwqLNzFFQyA
-->

Scission can cut elements apart that are not connected anymore. This requires that there is at least a little gap inbetween two elements. If one for example would use `subtract` on two shapes in both directions and afterwards `union`. The cut would be so perfect, that the edges would still touch. Here is an example where the shapes are translated before `union` is applied, thereby, creating a big gap:

```js
const cubeShape = cube({size: 4});
const sphereShape = sphere({radius: 2, center: [2, 2, 2]});

const cut1 = subtract([cubeShape, sphereShape]);
const cut2 = subtract([sphereShape, cubeShape]);
const unionShape = union([
  translate([0,0,0], cut1),
  translate([0,0,5], cut2)
]);

const scissionShapes = scission(unionShape);
```

The above `scission` returns an array with two elements, which are the object that went into the `union` command.