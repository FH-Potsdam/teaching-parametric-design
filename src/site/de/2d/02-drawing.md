---
title: Basics
eleventyNavigation:
  title: Basics
  key: de_2d_Basics
  parent: de_2d
  order: 2
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, task, inspiration %}

{{h2('Canvas')}}

{{video("https://fhpcloud.fh-potsdam.de/s/CjcYw4HxyPokZWo/download/en_canvas.mp4", "/images/thumbnails/en_2d_drawing_canvas.png", "en_2d_drawing_canvas", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/7Rif9aTymHobY5R/download/de_canvas.mp4
en:https://fhpcloud.fh-potsdam.de/s/CjcYw4HxyPokZWo/download/en_canvas.mp4
-->

First we need to create a canvas, an area we can draw upon. To do this we add the `createCanvas` command into our **setup** function. All sizes in p5js are always pixel sizes:

{{ definition('createCanvas', [
  { name: 'width', type: 'number' },
  { name: 'height', type: 'number' }
]) }}

```js
function setup() {
  createCanvas(400, 400);
}
```

> If you finish a command, don't forget the semicolon.


{{h2('Background')}}

{{video("https://fhpcloud.fh-potsdam.de/s/tiaKGpCJWtZGwCi/download/en_background.mp4", "/images/thumbnails/en_2d_drawing_background.png", "en_2d_drawing_background", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/8YfsfmB4jRf2RCY/download/de_background.mp4
en:https://fhpcloud.fh-potsdam.de/s/tiaKGpCJWtZGwCi/download/en_background.mp4
-->


In the begining our canvas is blank. But we can give our full canvas a uniform fill color. By adding the `background` command to the `draw` function:

{{ definition('background', [
  { name: 'fill', type: 'color' }
]) }}
```js
function draw() {
  background(220);
}
```

Different to the `createCanvas` command, we can use a variety of inputs to define the color (see next section for a color overview).

{{h2('Colors')}}

{{video("https://fhpcloud.fh-potsdam.de/s/wYTfzgFEwB92xSN/download/en_colors.mp4", "/images/thumbnails/en_2d_drawing_colors.png", "en_2d_drawing_colors", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/5WJa8y7Yqc29sXd/download/de_colors.mp4
en:https://fhpcloud.fh-potsdam.de/s/wYTfzgFEwB92xSN/download/en_colors.mp4
-->

In p5js we can define colors in a variety of different forms:

1. Grayscale: one number from 255 (white) to 0 (black)
```js
background(150);
```

2. Red, Green & Blue (RGB): three numbers from 0 to 255
```js
background(255, 0, 0);
```

3. CSS Colors: [name](https://www.w3.org/wiki/CSS/Properties/color/keywords) of the color
```js
background('red');
```
> Notice the single quotes around the word 'red'. Whenever we use text as a value (string) for a command, we need to set single (or double) quotes around it. Otherwise JavaScript will think **red** is also a command or variable.

4. Hexadecimal RGB: hex text
```js
background('#ff0000');
```

5. RGB + Alpha (transparency): rgba as a text, alpha is between 0 and 1
```js
background('rgba(255,0,0,0.5)');
```

> JavaScript uses english numbers, therefore a point is used as a decimal separator.<br />German: 0,5 > English: 0.5

Those are the things we will use, but there are even more possibilites to define colors, see [here](https://p5js.org/reference/#/p5/background).

{{h2('Shapes')}}

{{video("https://fhpcloud.fh-potsdam.de/s/rJa6ZHe5e2oKPYg/download/en_shapes.mp4", "/images/thumbnails/en_2d_drawing_shapes.png", "en_2d_drawing_shapes", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/t6pWTGAY4m6KHTs/download/de_shapes.mp4
en:https://fhpcloud.fh-potsdam.de/s/rJa6ZHe5e2oKPYg/download/en_shapes.mp4
-->


Or as the p5js reference calls them *2D primitives*. All those shapes are created in a coordinate system. The origin (0/0) of that coordinate system is in the upper left corner of our canvas. Units as always in pixels.

### Point

{{ definition('point', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' }
]) }}
```js
point(20, 20);
```
> A point has no radius. To increase the size of a point, set a higher **strokeWeight** (see below).


### Line

{{ definition('line', [
  { name: 'x1', type: 'number' },
  { name: 'y1', type: 'number' },
  { name: 'x2', type: 'number' },
  { name: 'y2', type: 'number' }
]) }}
```js
line(10, 10, 40, 40);
```


### Ellipse

{{ definition('ellipse', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' },
  { name: 'width', type: 'number' },
  { name: 'height', type: 'number' }
]) }}
```js
ellipse(20, 20, 5, 10);
```
> **x** and **y** describe the center of the ellipse and circle

### Circle

{{ definition('circle', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' },
  { name: 'diameter', type: 'number' }
]) }}
```js
circle(20, 20, 5);
```

### Rectangle

{{ definition('rect', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' },
  { name: 'width', type: 'number' },
  { name: 'height', type: 'number' }
]) }}
```js
rect(10, 10, 40, 20);
```

### Square

{{ definition('square', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' },
  { name: 'size', type: 'number' }
]) }}
```js
square(10, 10, 40);
```

{{editor('/code/shapes', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/shapes/sketch.js')}}

{{h2('Fills & Strokes')}}

{{video("https://fhpcloud.fh-potsdam.de/s/WmMdRoixoGNeXxd/download/en_fills.mp4", "/images/thumbnails/en_2d_drawing_fills.png", "en_2d_drawing_fills", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/5xTn45W62CKkwsQ/download/de_fills.mp4
en:https://fhpcloud.fh-potsdam.de/s/WmMdRoixoGNeXxd/download/en_fills.mp4
-->

Code in any programming language is always interpreted from top to bottom. p5js has a default color setting: fill and strokes are black. We can change the fill and stroke at any time. Everything painted after the fill or stroke command (top to bottom) is painted in the new color.

{{ definition('fill', [
  { name: 'fill', type: 'color' }
]) }}
```js
fill(255, 0, 0);
```

> **stroke** and **fill** take the same color parameters as the **background** command

{{ definition('stroke', [
  { name: 'stroke', type: 'color' }
]) }}
```js
stroke(255, 0, 0);
```

Besides colors we can also modify the stroke width of the shapes we draw:

{{ definition('strokeWeight', [
  { name: 'weight', type: 'number' }
]) }}
```js
strokeWeight(5);
```

{{editor('/code/fill', '[https://...](https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/fill/sketch.js)')}}

{{h2('Arcs')}}

{{video("https://fhpcloud.fh-potsdam.de/s/3erXfj7WFcyF27t/download/en_arc.mp4", "/images/thumbnails/en_2d_drawing_arc.png", "en_2d_drawing_arc", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/HSkH336q6pXXP3b/download/de_arc.mp4
en:https://fhpcloud.fh-potsdam.de/s/3erXfj7WFcyF27t/download/en_arc.mp4
-->

A bit more advanced shape is the arc:

{{ definition('arc', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' },
  { name: 'width', type: 'number' },
  { name: 'height', type: 'number' },
  { name: 'startAngle', type: 'number' },
  { name: 'endAngle', type: 'number' },
  { name: 'arcMode', type: 'OPEN, PIE, CHORD' }
]) }}
```js
arc(100, 100, 50, 50, 0, Math.PI, OPEN);
```

> The **startAngle** and **endAngle** are provided in rad not degrees. 360 degrees are `2 * Math.PI`. So an easy way to work with degrees, is to simply convert it:<br />`Math.PI / 180 * YOUR_ANGLE`.

{{editor('/code/arc', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/arc/sketch.js')}}

{{task("Task: Abstract Art", "Only use the commands we have learned so far, to create an abstract piece of art. For inspiration see the sketch below, or checkout the art section on the inspiration <a href='/de/inspiration'>page</a>.")}}

{{inspiration('Hilma af Klint')}}

{{editor('/code/klint', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/klint/sketch.js', true)}}