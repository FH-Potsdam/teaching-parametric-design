---
title: Transformations
eleventyNavigation:
  title: Transformations
  key: cn_2d_more_complexity
  parent: cn_2d
  order: 8
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

{{h2('Translate')}}

When building complex layouts it can get tricky calculating all those angles and offsets. p5js offers so called transformations. Those transforms can modify the underlying coordinate system and where things are draw. Lets start with `translate(x, y)`. When using the `translate()` command, the origin (0,0) of our coordinate system is moved. 

{{video("https://fhpcloud.fh-potsdam.de/s/8mdTinP63eqL4se/download/en_2d_transformations_translate.mp4", "/images/thumbnails/en_2d_transformations_translate.png", "en_2d_transformations_translate", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/9FHm7JK8im2jbp8
en: https://fhpcloud.fh-potsdam.de/s/8mdTinP63eqL4se
-->

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

{{h2('Multiple Transforms')}}

Transforms are applied from top to bottom, and multiplied on top of each other:

```js
point(0, 0); // position 0, 0
translate(100, 100);
point(0, 0); // position 100, 100
translate(100, 100);
point(0, 0); // position 200, 200
```

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

### Example: Polar coordinates

This is for example useful when we are using the polar coordinate system, but we don't want to calculate the offset all the time:

{{editor('/code/polartranslate', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/transformations/polartranslate/sketch.js')}}

{{h2('Rotation')}}

{{video("https://fhpcloud.fh-potsdam.de/s/9p59bc4W663fp4C/download/en_2d_transformations_rotate.mp4", "/images/thumbnails/en_2d_transformations_rotate.png", "en_2d_transformations_rotate", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/Jspak8jQtELyAQa
en: https://fhpcloud.fh-potsdam.de/s/9p59bc4W663fp4C
-->

{{ definition('rotate', [
  { name: 'angle', type: 'number' }
]) }}
```js
rotate(Math.PI / 180 * 45); // take angleMode into acount
```

{{h2('Scale')}}

{{video("https://fhpcloud.fh-potsdam.de/s/AAKPPkFNZKAFS9t/download/en_2d_transformations_scale.mp4", "/images/thumbnails/en_2d_transformations_scale.png", "en_2d_transformations_scale", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/wgSRdgKFSCFgySf
en: https://fhpcloud.fh-potsdam.de/s/AAKPPkFNZKAFS9t
-->

{{ definition('scale', [
  { name: 'scale-factor', type: 'number' }
]) }}
```js
scale(2); // 200%
```

{{task("Task: Loops & Translate", "Try using offset and rotate in a loop to explore new possibilities for patterns.")}}

{{inspiration('Patterns')}}

{{editor('/code/fractals1', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/transformations/fractals/sketch.js', true)}}