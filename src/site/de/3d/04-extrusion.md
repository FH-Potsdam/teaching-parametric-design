---
title: Extrusion
eleventyNavigation:
  title: Extrusion
  key: de_3d_extrusion
  parent: de_3d
  order: 4
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from "../../_includes/parts/macros.njk" import img %}

## From 2D to 3D 

When ever we modify something in JSCAD, not matter if extrusion or transformation, we pass the shape we want to modify into that command and the command will return the modified version of the shape, which we can then store in a new variable (or the same).

### Extruding

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/06-3d-intro/extrude-final.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

```js
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
```

Extrusion is the process of taking a geometry and extending along one dimension.

#### ExtrudeLinear

Linear extrude allows you to extrude on the z-axis `{height: 20}`:

<img src="./assets/extrudeLinear.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeLinear({height: 20}, circleShape);
```

You can add a rotation to the extrusion `twistAngle` and how many steps inbetween should be created `twistSteps`:

<img src="./assets/extrudeLinear-1.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

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

<img src="./assets/extrudeLinear-2.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

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


#### extrudeRectangular

For this extrusion imagine a cube walking along the outline of the shape and, thereby, creating the extrusion. You can define size and heigth of the rectangle and result ing extrusion:

<img src="./assets/extrudeRectangular.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

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

#### extrudeRotate

For this extrusion the shape is rotated around the z-axis, the angles define start and end, segments the amount of steps:

<img src="./assets/extrudeRotate-1.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

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

In the above example the shape is located on `[0,0,0]` and, therefore, rotated around itself. Similar to `extrudeLinear`, adding an offset, the shape rotates differentyl:

<img src="./assets/extrudeRotate-2.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

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

## Expand & Offset

```js
const {expand, offset} = jscad.expansions;
```

In the last session we look at extrusion. Taking a shape and extending it along an axis. Another similar method is `expand` and `offset`.

### Offset

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/07-3d-adv/offset.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Offset can be used on 2D shapes. It simply offsets the outline by given delta. A negative delta shrinks the shape. For the corners three different types of offsets can be achieved:

<img src="./assets/offset.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

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

**Expand for 2D**
<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/07-3d-adv/expand-2d.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Expand for 3D**
<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/07-3d-adv/expand-3d.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


Expand has the same `effect` as `offset` for 3D shapes. It only offers the corner method `'round'`, but you can define the segments:

<img src="./assets/segments.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />

```js
const rectShape = cuboid({size: [50, 25, 2]});

const offsetShape1 = expand({
  delta: 10,
  segments: 4
}, rectShape); 
```