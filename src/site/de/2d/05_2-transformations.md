---
title: Transformations
eleventyNavigation:
  title: Transformations
  key: de_2d_more_complexity
  parent: de_2d
  order: 8
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{h2('Translate')}}

When building complex layouts it can get tricky calculating all those angles and offsets. p5js offers so called transformations. Those transforms can modify the underlying coordinate system and where things are draw. Lets start with `translate(x, y)`. When using the `translate()` command, the origin (0,0) of our coordinate system is moved. 

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/04-complexity/translate.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

{{ definition('translate', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' },
  { name: 'z', type: 'number', optional: true }
]) }}
```js
point(0, 0); // position 0, 0
translate(100, 100);
point(0, 0); // position 100, 100
```

{{h2('Polar coordinates')}}

This is for example useful, when we are using the polar coordinate system, but we don't want to calculate the offset all the time:

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/04-complexity/translate-polar.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

```js
const sketchWidth = 400;
const sketchHeight = 400;

translate(sketchWidth / 2, sketchHeight / 2);

const rad = Math.PI / 180 * angle;
const x = radius * Math.cos(rad);
const y = radius * Math.sin(rad);

point(x, y);
```

Transforms are applied from top to bottom, and multiplied on top of each other:

```js
point(0, 0); // position 0, 0
translate(100, 100);
point(0, 0); // position 100, 100
translate(100, 100);
point(0, 0); // position 200, 200
```

{{h2('Multiple Transforms')}}

To better keep track, you can save the current transform `push()` and if you are done, return to the last saved state `pop()`:

```js
point(0, 0); // position 0, 0
push();
translate(100, 100);
point(0, 0); // position 100, 100
translate(100, 100);
point(0, 0); // position 200, 200
pop();
point(0, 0); // position 0, 0
```

> push/pop do not only restore the transformations, the same goes for drawing styles (e.g. color). push/pop can also be nested.

Besides offsetting the coordinate origin `translate()`, we can also `scale(zoomFactor)` and `rotate(rad)`. The center of the transformation is always the coordinate system origin (0, 0).

{{h2('Rotation')}}

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/04-complexity/rotation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

{{ definition('rotate', [
  { name: 'angle', type: 'number' }
]) }}
```js
rotate(Math.PI / 180 * 45); // take angleMode into acount
```

{{h2('Scale')}}

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/04-complexity/scale.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

{{ definition('scale', [
  { name: 'scale-factor', type: 'number' }
]) }}
```js
scale(2); // 200%
```
