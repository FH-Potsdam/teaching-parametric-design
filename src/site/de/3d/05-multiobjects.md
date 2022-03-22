---
title: Operations
eleventyNavigation:
  title: Operations
  key: de_3d_operations
  parent: de_3d
  order: 5
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration, link3d, github %}

{{h2('Align')}}

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

{{h2('Boolean Operations')}}

```js
const {union, subtract, intersect, scission} = jscad.booleans;
```
{{video("https://fhpcloud.fh-potsdam.de/s/CTpg3ZoW4MeTbg4/download/de_3d_operations_intro.mp4", "/images/thumbnails/de_3d_operations_intro.png", "de_3d_operations_intro", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/H6pxGHAK3L2toz8
en: https://fhpcloud.fh-potsdam.de/s/CTpg3ZoW4MeTbg4
-->

{{img('boolean.png', 'boolean operations')}}

### Union

{{video("https://fhpcloud.fh-potsdam.de/s/W7nGNox8GxSgaZx/download/de_3d_operations_union.mp4", "/images/thumbnails/de_3d_operations_union.png", "de_3d_operations_union", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/Qx4nJMdWEMZJcLH
en: https://fhpcloud.fh-potsdam.de/s/W7nGNox8GxSgaZx
-->

{{img('union.png', 'union: combining multiple shapes or bodies')}}

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

{{video("https://fhpcloud.fh-potsdam.de/s/YBSTc2sotQqjjL4/download/de_3d_operations_subtract.mp4", "/images/thumbnails/de_3d_operations_subtract.png", "de_3d_operations_subtract", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/tNptWrS8MsR8Wgc
en: https://fhpcloud.fh-potsdam.de/s/YBSTc2sotQqjjL4
-->

{{img('subtract.png', 'subtract: remove one or multiple shapes/bodies from another object')}}

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

{{video("https://fhpcloud.fh-potsdam.de/s/YBSTc2sotQqjjL4/download/de_3d_operations_intersect.mp4", "/images/thumbnails/de_3d_operations_intersect.png", "de_3d_operations_intersect", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/AbTmmBszxJebZSf
en: https://fhpcloud.fh-potsdam.de/s/aagrSLH7RxbPQnD
-->

{{img('intersect.png', 'intersect: get the overlap of multiple objects')}}

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

{{video("https://fhpcloud.fh-potsdam.de/s/iPkWfwqLNzFFQyA/download/de_3d_operations_scission.mp4", "/images/thumbnails/de_3d_operations_scission.png", "de_3d_operations_scission", translations.subtitles[locale], locale)}}

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

{{task('Union & Subtract', 'First create an object by combining multiple 3D bodies through **union**. Then use *subtract* to remove bits from the union-object.')}}

{{inspiration('Raspberry Pi Case')}}

Based on the [mechanical drawings](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html) of the Raspberry Pi, particularly the screw holes, this case is constructed. Using variables the size can be easily modified.

{{link3d('/code/3d/case', 'Open "Raspi Case"')}}

{{img('example3d-case.png', 'A Raspberry Pi case, with screw sockets and cover')}}

{{github('https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/3d/case')}}