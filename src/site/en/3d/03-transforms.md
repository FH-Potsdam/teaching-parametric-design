---
title: Transformations
eleventyNavigation:
  title: Transformations
  key: en_3d_transformations
  parent: en_3d
  order: 3.5
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration %}

Each **transformation** of a 2D or 3D object returns a new instance of the transformed object. This means, you can simply save the output of the transformation into a new variable. While its a bit counter-intuitive, this means you can send the original object into multiple transformations. At the bottom of the page is also an example for how to code multiple transformations more efficiently.

{{h2('Colors')}}

{{video("https://fhpcloud.fh-potsdam.de/s/J4yoWNnmawzrYQM/download/en_3d_transformations_colorize.mp4", "/images/thumbnails/en_3d_transformations_colorize.png", "en_3d_transformations_colorize", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/48gsXjqzbbLxGmz
en: https://fhpcloud.fh-potsdam.de/s/J4yoWNnmawzrYQM
-->

```js
const {colorize, colorNameToRgb} = jscad.colors;
```

> Colors can help us for prototyping and design our shapes. But have in mind, that depending on what you are going to do with your 3D object, you will likely have to reassign materials to your shapes.

We can either use RGB values:

```js
const shape = colorize([R, G, B], cube());
```

> Important: RGB are not 0 to 255, but 0 to 1.

Or use color names:

```js
const shape = colorize(colorNameToRgb('black'), cube());
```

## Transformations

{{video("https://fhpcloud.fh-potsdam.de/s/ycBJZ2a88Y8gc5i/download/en_3d_transformations_transformations.mp4", "/images/thumbnails/en_3d_transformations_transformations.png", "en_3d_transformations_transformations", translations.subtitles[locale], locale)}}

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

{{h2('Loops & Transforms')}}

Saving each transformation outcome into a new variable, becomes especially complicated if you run lots of transformations in a loop for example. To overcome this, we can use arrays and we can overwrite variables.

{{video("https://fhpcloud.fh-potsdam.de/s/HyCYdBfaWi49Lzm/download/en_3d_transformations_loops.mp4", "/images/thumbnails/en_3d_transformations_loops.png", "en_3d_transformations_loops", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/3gpzE9x3CiHFySf
en: https://fhpcloud.fh-potsdam.de/s/HyCYdBfaWi49Lzm
-->

{{task('Task: Multiple Transformations', 'The transformations and handling of objects is quite different to p5js. Try building a loop that transforms some basic 3D bodies (e.g. translate and rotate). Try creating a 3D pattern.')}}