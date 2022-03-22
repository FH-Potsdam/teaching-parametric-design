---
title: Extrusion
eleventyNavigation:
  title: Extrusion
  key: en_3d_extrusion
  parent: en_3d
  order: 4
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration, link3d, github %}

## From 2D to 3D 

When ever we modify something in JSCAD, not matter if extrusion or transformation, we pass the shape we want to modify into that command and the command will return the modified version of the shape, which we can then store in a new variable (or the same).

{{h2('Extruding')}}

{{video("https://fhpcloud.fh-potsdam.de/s/y5sL6K5kfwW6CfL/download/en_3d_extrusion_extrude.mp4", "/images/thumbnails/en_3d_extrusion_extrude.png", "en_3d_extrusion_extrude", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/iWeFYYkP4qx3HTJ
en: https://fhpcloud.fh-potsdam.de/s/y5sL6K5kfwW6CfL
-->

```js
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
```

Extrusion is the process of taking a geometry and extending along one dimension.

### ExtrudeLinear

Linear extrude allows you to extrude on the z-axis `{height: 20}`:

{{img('extrudeLinear.png', 'extrudeLinear example')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeLinear({height: 20}, circleShape);
```

You can add a rotation to the extrusion `twistAngle` and how many steps inbetween should be created `twistSteps`:

{{img('extrudeLinear-1.png', 'extrudeLinear with rotation')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeLinear({
  height: 20,
  twistAngle: Math.PI * 2,
  twistSteps: 12
}, circleShape);
```

The rotation works along the z-axis relative to `[0,0,0]`. If an object is not located on `[0,0,0]`, the twist effect from above will look different:

{{img('extrudeLinear-2.png', 'extrudeLinear with rotation and offset')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 4]
});

const extrudeShape = extrudeLinear({
  height: 20,
  twistAngle: Math.PI * 2,
  twistSteps: 12
}, circleShape);
```


### extrudeRectangular

For this extrusion imagine a cube walking along the outline of the shape and, thereby, creating the extrusion. You can define size and heigth of the rectangle and result ing extrusion:

{{img('extrudeRectangular.png', 'extrudeRectangular example')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeRectangular({
  size: 1,
  height: 1
}, circleShape);
```

### extrudeRotate

For this extrusion the shape is rotated around the z-axis, the angles define start and end, segments the amount of steps:

{{img('extrudeRotate-1.png', 'extrudeRotate example')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeRotate({
  angle: Math.PI / 180 * parameters.end,
  startAngle: Math.PI / 180 * parameters.start,
  segments: parameters.segments
}, circleShape);
```

{{video("https://fhpcloud.fh-potsdam.de/s/cqc84F3sZP3g5pb/download/en_3d_operations_extrude_rotate.mp4", "/images/thumbnails/en_3d_operations_extrude_rotate.png", "en_3d_operations_extrude_rotate", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/yj6E3gx63bbPFwp
en: https://fhpcloud.fh-potsdam.de/s/cqc84F3sZP3g5pb
-->

In the above example the shape is located on `[0,0,0]` and, therefore, rotated around itself. Similar to `extrudeLinear`, adding an offset, the shape rotates differently:

{{img('extrudeRotate-2.png', 'extrudeRotate with an offset example')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 4]
});

const extrudeShape = extrudeRotate({
  angle: Math.PI / 180 * parameters.end,
  startAngle: Math.PI / 180 * parameters.start,
  segments: parameters.segments
}, circleShape);
```

{{h2('Expand & Offset')}}

```js
const {expand, offset} = jscad.expansions;
```

In the last session we look at extrusion. Taking a shape and extending it along an axis. Another similar method is `expand` and `offset`.

### Offset

{{video("https://fhpcloud.fh-potsdam.de/s/KWCPMqMPzf8s6t2/download/en_3d_extrusion_offset.mp4", "/images/thumbnails/en_3d_extrusion_offset.png", "en_3d_extrusion_offset", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/oMGcyBAiBTB7JQd
en: https://fhpcloud.fh-potsdam.de/s/KWCPMqMPzf8s6t2
-->

Offset can be used on 2D shapes. It simply offsets the outline by given delta. A negative delta shrinks the shape. For the corners three different types of offsets can be achieved:

{{img('offset.png', 'offset for a 2D shape, with corner options')}}

```js
const rectShape = rectangle({size: [50, 25]});

const offsetShape2 = offset({
  delta: 10,
  corners: 'chamfer'
}, rectShape);

const offsetShape3 = offset({
  delta: 20,
  corners: 'round',
  segments: 20
}, rectShape);

const offsetShape1 = offset({
  delta: 30,
  corners: 'edge'
}, rectShape);
```

### Expand

{{video("https://fhpcloud.fh-potsdam.de/s/nDrxii2jHXXxR79/download/en_3d_extrusion_expand.mp4", "/images/thumbnails/en_3d_extrusion_expand.png", "en_3d_extrusion_expand", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/8ztZLysdzqbCdq9
en: https://fhpcloud.fh-potsdam.de/s/nDrxii2jHXXxR79
-->


Expand has the same `effect` as `offset` for 3D shapes. It only offers the corner method `'round'`, but you can define the segments:

{{img('segments.png', 'expand with different segment options')}}

```js
const rectShape = cuboid({size: [50, 25, 2]});

const offsetShape1 = expand({
  delta: 10,
  segments: 4
}, rectShape); 
```

{{task('Offset extrusions', 'Explore the various extrusions when you combine them with an offset. Create a grid of extruded objects.')}}

{{inspiration('Extruded rectangle with rounded corners')}}

{{link3d('/code/3d/extrude', 'Open "Rounded Rectangle Demo"')}}

{{img('example3d-round.png', 'Combining an extruded rectangle and circles')}}

{{github('https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/3d/extrude')}}
