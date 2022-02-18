---
title: Export
eleventyNavigation:
  title: Export
  key: de_2d_more_export
  parent: de_2d
  order: 7
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/05-input/save.mp4', "/images/video-thumb.png")}}

{{h2('Pixels')}}

The purpose of learning about how to build design with code, is so we can quickly generate complex shapes and patterns to use in other design processes. So far our output format was a pixel based image. To export our pixels into a convenient PNG format, simply call the `save()` command:

```js
function draw() {
  // drawing code
  noLoop();
  save();
}
```

> When calling the save command, make sure you use `noLoop()` or an event. Otherwise the save function will be called continously.

{{h2('Vectors')}}

While pixels are a good start,  we cannot easily modify our designs once they are stored in pixels. The best alternative are vectors, which we can export as **SVGs**. SVGs are a standard for vector graphics and they can be displayed in the browser and easily imported into any graphics software (e.g. Illustrator, Sketch, Figma, etc.). To do so, we need to tell p5js that we want to switch from pixels to vectors. So upon initializing our canvas, we need to define the correct render-engine:

```js
function setup() {
  createCanvas(400, 400, SVG);
}
```

> Not all functions work (or make sense to use), when working with vectors. But all 2D-commands work just fine.

> If you are creating your own p5js vector project, make sure you include the [SVG-library](https://github.com/zenozeng/p5.js-svg) in your `index.html`. Our boilerplate has this already included.
