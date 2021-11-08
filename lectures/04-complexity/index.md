**Parametric Design**
# Adding Complexity

## arrays
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

### Application

We create a random shape (array of `[x,y]`), in addition to the x and y, we will add a direction `dx, dy`, which we will use to modify the location inside a loop:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const numPoints = 30;
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

> Sometimes we might not know how long our array is exactly: `array.length` returns the length of the array.

## objects
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

## transformations

When building complex layouts it can get tricky calculating all those angles and offsets. p5js offers so called transformations. Those transforms can modify the underlying coordinate system and where things are draw. Lets start with `translate(x, y)`. When using the `translate()` command, the origin (0,0) of our coordinate system is moved. 

```js
point(0, 0); // position 0, 0
translate(100, 100);
point(0, 0); // position 100, 100
```

This is for example useful, when we are using the polar coordinate system, but we don't want to calculate the offset all the time:

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

```js
scale(2); // 200%
rotate(Math.PI / 2); // 90°
scale(1/2); // 50%
```

## function

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

The return value needs to be one value, but it can be of any kind also an array or object:

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