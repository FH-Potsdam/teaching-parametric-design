---
title: Functions
eleventyNavigation:
  title: Functions
  key: en_2d_more_complexity
  parent: en_2d
  order: 9
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

{{video("https://fhpcloud.fh-potsdam.de/s/L9iR9Mbkw4KGHxi/download/en_2d_functions.mp4", "/images/thumbnails/en_2d_functions.png", "en_2d_functions", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/J7pfTLNaNKxDW89
en: https://fhpcloud.fh-potsdam.de/s/L9iR9Mbkw4KGHxi
-->

Through the for-loop we can draw the same element multiple times. But sometimes a single for-loop is not enough and we end up writing the same code multiple times. Let's say, we want to draw little crop marks into each corner of our sketch:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const margin = 20;
push();
translate(margin, margin);
line(-margin/2, 0, margin/2, 0); // horizontal line
line(0, -margin/2, 0, margin/2); // vertical line
pop();
// repeat the above code 3 more times
```

Instead of writing this code four times, we could create a so called function:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const margin = 20;

function cropMark () {
  line(-margin/2, 0, margin/2, 0); // horizontal line
  line(0, -margin/2, 0, margin/2); // vertical line
}

push();
translate(margin, margin);
cropMark();
pop();
// repeat the above code 3 more times
```

Like the p5js commands, we can now call our function inside our code. But we still have a few lines that repeat every time, because we need to set the translate parameters. To overcome this, we can pass parameters into our function, that we can use inside the function:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const margin = 20;

function cropMark (x, y) {
  push();
  translate(x, y);
  line(-margin/2, 0, margin/2, 0); // horizontal line
  line(0, -margin/2, 0, margin/2); // vertical line
  pop();
}

cropMark(margin, margin);
cropMark(sketchWidth - margin, margin);
cropMark(sketchWidth - margin, sketchHeight - margin);
cropMark(margin, sketchHeight - margin);
```

You can pass as many variables into your function as you like.

> Remember the variable scopes. Variables defined inside a function are only accessible inside the function. Global variables are also accessible inside a function.

Sometimes you might not want a function to draw something but instead only calculate something. Then it is helpful when a function also returns something:

```js
function polarX(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  return x;
}

function polarY(radius, angle) {
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return y;
}

point(polarX(20, 45), polarY(20, 45));
```

The return value needs to be **one** value, but it can be of **any kind** also an array or object:

```js
function polar(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return {
    'x': x,
    'y': y
  };
}

const p = polar(20, 45);
point(p.x, p.y);
```

> If you are building more complex code, functions will not only help you to write less code, but they can also be used to structure your code and build reusable functions, that you can use in your next project.

{{task("Task: Functions", "Take a look at your previous sketches and see if you can optimize one of them by turning repetitive code into functions.")}}

{{inspiration('Fractals')}}

Try changing the various variables in the example below to create different so called L-Trees or fractal trees. Start with the `max` variable and set it to `2` and then slowly increase it, to better understand how the system works. Be aware, setting it to a very high value can take a while to process (but its worth it). Don't set `max` to a value higher than 20 (20 levels already generates more than 1 Million lines).

{{editor('/code/fractals2', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/functions/fractals/sketch.js', true)}}

While the output looks quite magical, the code behind it, is quite simple. You are just calling the same function over and over again. Inside this function there is a loop, which creates branches at the end of the last line. Thanks to the transformation functions we don't need to calculate angles and positions, but can simple transform again from the last known location.