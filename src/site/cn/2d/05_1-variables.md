---
title: Variables II
eleventyNavigation:
  title: Variables II
  key: cn_2d_variables2
  parent: cn_2d
  order: 7
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, task, inspiration %}

{{h2('Arrays')}}

{{video("https://fhpcloud.fh-potsdam.de/s/tYFWZMsrRskSqBf/download/en_2d_variables2_array.mp4", "/images/thumbnails/en_2d_variables2_array.png", "en_2d_variables2_array", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/qWH96q7N4fnGLTH
en: https://fhpcloud.fh-potsdam.de/s/tYFWZMsrRskSqBf
-->

As our concepts are getting more complex, we need to be able to store more information. Imagine your creating a shape with the vertex command. Depending on the number of points of the shape, this will take a lot of variables. To overcome this we can use arrays. Arrays are another type of variable which can hold multiple values. Arrays can also be nested. As an example, lets create an array of points, each point is stored as another array `[x,y]`:

```js
const points = [
  [0, 0],
  [10, 0],
  [10, 10],
  [0, 10]
];
```

To access an element inside an array we use its so called index:

```js
points[0] // [0, 0]
points[0][0] // 0
```

The index always starts with **0** not **1**. We can also add elements programmatically:

```js
const sketchWidth = 400;
const sketchheight = 400;
const points = []; // empty array
for (let p = 0; p < 20; p += 1) {
  points.push([
    Math.random() * sketchWidth,
    Math.random() * sketchHeight
  ]); // adds an element to the end of the array
}
```

{{h2('Array example')}}

We create a random shape (array of `[x,y]`), we then draw this shape multiple times, but with increasing opacity, to create the gradient effect:

{{editor('/code/arrayexample', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/arrayexample/sketch.js')}}

> Sometimes we might not know how long our array is exactly: `array.length` returns the length of the array.

More infos on array features can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

{{h2('Objects')}}

{{video("https://fhpcloud.fh-potsdam.de/s/DLRECDPmbN3T7RR/download/en_2d_variables2_objects.mp4", "/images/thumbnails/en_2d_variables2_objects.png", "en_2d_variables2_objects", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/74cqFK4GH2FGKdz
en: https://fhpcloud.fh-potsdam.de/s/DLRECDPmbN3T7RR
-->

Storing information in arrays can get confusing at a certain level. To keep things organized we can use objects. Objects are very similar to arrays, but instead of a number-based index, objects use a string-based index:

```js
const point = {
  'x': 0,
  'y': 0
};
```
To access the elements inside of an object we use the same syntax as for the arrays, but use the strings instead of numbers:

```js
point['x'] // 0
```

And we can also use a short form (this only works if the key has no spaces or other special characters):

```js
point.x // 0
```

And to make it a bit more confusing, we can store objects in arrays, and arrays in objects:

```js
const points = [
  {x: 0, y: 0, vel: [0, 0]},
  {x: 10, y: 0, vel: [1, 0]},
  {x: 10, y: 10, vel: [1, 1]},
  {x: 0, y: 10, vel: [0, 1]}
];

points[1]['vel'][0] // 1
```

### Object example

Similar to the array example, we create a list of points, in addition to x/y, we also store a velocity, the velocity of each point, to move each point after each loop-cycle. To stop the points from leaving the canvas, we simply reverse the velocity (*-1), when the position is outside the canvas:

{{editor('/code/objectexample', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/objectexample/sketch.js')}}

{{h2('Noise')}}

{{video("https://fhpcloud.fh-potsdam.de/s/f4EmxzC38ToxGCb/download/en_2d_variables_noise.mp4", "/images/thumbnails/en_2d_variables_noise.png", "en_2d_variables_noise", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/MNQ3gQzWQyKFpMq
en: https://fhpcloud.fh-potsdam.de/s/f4EmxzC38ToxGCb
-->

We already learned about the `random()` command. The noise command also returns random values. When our sketch starts a 3D-space of random values is created. We can then pick individual values from this space. Unlike the `random()` command, the values in this "random" space represent a smooth noise field (see visualisation below).

{{ definition('noise', [
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number', optional: true },
  { name: 'z', type: 'number', optional: true }
]) }}
```js
function setup() {
  const noiseValue = noise(0,1.5,1);
}
```

If a new random field is required, the noise values can be regenerated through the noiseSeed command:
{{ definition('noiseSeed', [
  { name: 'seed', type: 'number' }
]) }}
```js
function setup() {
  noiseSeed(5);
}
```

{{editor('/code/noise', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/noise/sketch.js')}}

> Reminder: The smooth curves of the noise field only become visible if you use small coordinates to retrieve the values.

{{task("Task: Arrays & Objects", "Try creating a list of variables and use them in the draw loop. To go further modify the variables with each draw loop, to create an animation.")}}

{{inspiration('Moving through the cloud')}}

{{editor('/code/noiseani', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/noiseani/sketch.js', true)}}