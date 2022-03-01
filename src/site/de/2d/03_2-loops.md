---
title: Loops
eleventyNavigation:
  title: Loops
  key: de_2d_loops
  parent: de_2d
  order: 4
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

After the first few experiments, you have probably realized, that when you want to build more complex layouts, you have to write a lot of code. While some code will always need to be written, some repetetive layouts can be easily accomplished with a loop. Similar to our draw-cycle, a loop repeats the same code several times:

{{h2('While loop')}}

{{video("https://fhpcloud.fh-potsdam.de/s/Yt5xr8GX8RE6b6g/download/de_while.mp4", "/images/thumbnails/de_2d_loops_while.png")}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/Yt5xr8GX8RE6b6g/download/de_while.mp4
en:https://fhpcloud.fh-potsdam.de/s/2YGT8gYzyZdWg5D/download/en_while.mp4
-->


Using the for-loop we can define a variable that we can use for counting our iterations. Sometimes we already have a variable or our iteration process is more complex. The **while-loop** works exactly like the **for-loop** but it only has one parameter, the condition under which it keeps running:

{{editor('/code/while', 'https://...')}}

In the example above the while function keeps iterating until x is equal or bigger than 10.

> Be careful with while loops, they can potentially crash your code if they never reach their end condition.

{{h2('Nested loops')}}

We can nest as many loops as we want. If we want to build a grid of circles, we could use two nested loops:

{{editor('/code/while_nested', 'https://...')}}

{{h2('For-Loop')}}

{{video("https://fhpcloud.fh-potsdam.de/s/2e55m4LqkzpYKPy/download/de_for.mp4", "/images/thumbnails/de_2d_loops_for.png")}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/2e55m4LqkzpYKPy/download/de_for.mp4
en:https://fhpcloud.fh-potsdam.de/s/dzWFAFiZiYes9HZ/download/en_for.mp4
-->

{{editor('/code/for', 'https://...')}}

TODODODOD:

We can also use the while-loop in the same way, we use the for-loop:

```js
let i = 0;
while (i < 10) {
  i += 1;
}
// the same as:
for (let i = 0; i < 10; i += 1) {
}
```

To initiate a for-loop, we need to define 3 things:

1. The start value: `let i = 0;`
2. Under what condition should our loop continue: `i < 5;`
3. What should happen at the end of each loop interval: `i += 1`

In our case, we set the variable `i` to be `0` when we start our loop. And the loop should be continued as long as `i < 5`, if `i` is `5` or bigger than `5` the loop will stop. At each interval we than add `1` to `i`. The result of this loop, is that our loop runs 5 times. Inside the loop (curly brackets > another nested scope), we can use the variable `i`. In the example above, we increase the x-value of our circle 

{{h2('Examples')}}

Following a couple of examples for loops.

Generating a grid, that fills the whole canvas area:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const circleSize = 20;
const circleDistance = 20;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw () {
  for(let x = 0; x <= sketchWidth; x += (circleSize + circleDistance)) {
    for(let y = 0; y <= sketchHeight; y += (circleSize + circleDistance)) {
      circle(x, y, circleSize);
    }
  }
}
```

We can also modify the loop-variable inside the loop:

```js
const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw () {
  // we add a random number as the distance to the next rectangle
  for(let y = 0; y < sketchHeight; y += random(10, 20)) {
    const rectHeight = random(10, 20);
    rect(0, y, sketchWidth, rectHeight);
    // next we add the random height of the last rectangle
    i += rectHeight;
  }
}
```

Nested loops and the polar-coordinate system (see [math](../extras/math.md)):

```js
const sketchWidth = 400;
const sketchHeight = 400;
const angleDistance = 3;
const maxAngle = 720; // two complete circles

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw () {
  for (let layer = 0; layer < 10; layer += 1) {
    for(let angle = 0; angle < maxAngle; angle += angleDistance) {
      const rad = Math.PI / 180 * (angle + layer * 2); // each layer the angle is offset
      // const x = radius * cos(angle);
      const x = angle * cos(rad); // we use the angle also as a radius in the polar function
      const y = angle * sin(rad);
      circle(x, y, angle / 100);
    }
  }
}
```

The while loop can be interesting if we want to generate a number that is different to an existing number (this becomes more interesting in the next chapter when we introduce arrays):

```js
const num1 = Math.round(Math.random() * 10);
let num2 = num1;
while (num2 === num1) {
  num2 = Math.round(Math.random() * 10);
}
```

In the above example we create two numbers. If the numbers are the same. The loop will try to find a new number that is different, running another iteration.
