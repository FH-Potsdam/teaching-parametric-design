---
title: More Complexity
eleventyNavigation:
  title: More Complexity
  key: de_2d_more_complexity
  parent: de_2d
  order: 7
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{h2('Arrays')}}

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/arrays.mp4', "/images/video-thumb.png")}}

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

{{h2('Array examples')}}

We create a random shape (array of `[x,y]`), in addition to the x and y, we will add a direction `dx, dy`, which we will use to modify the location inside a loop:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const numPoints = 30;
// We use velocity to modify how fast the points move in the random directions
// Higher velocity faster moving
const velocity = 2;
const points = [];
for (let p = 0; p < numPoints; p += 1) {
  points.push([
    Math.random() * sketchWidth, // x
    Math.random() * sketchHeight, // y
    Math.random() * velocity, // dx
    Math.random() * velocity // dy
  ]);
}

const numLoops = 20;
const minOpacity = 200;
function draw() {
  noLoop();
  for (let l = 0; l < numLoops; l += 1) {
    noFill();
    stroke(0,minOpacity/numLoops * l)
    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l * points[p][2],
        points[p][1] + l * points[p][3]
      );
    }
    endShape();
  }
}
```

<img src="array.png" alt="" style="max-width:400px; width:100%; display:block; margin: 0 auto; border: 5px solid black;" />

> Sometimes we might not know how long our array is exactly: `array.length` returns the length of the array.

More infos on array features can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

{{h2('Objects')}}

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/objects.mp4', "/images/video-thumb.png")}}

Story information in arrays can get confusing at a certain level. To keep things organized we can use objects. Objects are very similar to arrays, but instead of a number-based index, objects use a string-based index:

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

> TODO: point.x

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