---
title: Complexity
eleventyNavigation:
  title: Complexity
  key: de_2d_complexity
  parent: de_2d
  order: 3
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{h2('Random')}}

We use numbers to define colors, positions and sizes. But sometimes, we want to slightly alter our objects and layout without us defining all those alterations in detail. An option to achive such things is the random command, random generates a value between **0** and **1** or a value between the **min** and **max** value provided as first and second parameter:

```js
background(random() * 255);
background(random(0, 255));
```

> `random()` is a p5js function. If you are using JavaScript without p5js, you can use `Math.random()`.

{{h2('Draw Cycle')}}

### Stopping the draw-cycle

When you are using random values, you often don't want your layout to be continously redrawn. To stop the draw-cycle, simply call the `noLoop()` command.

```js
function draw() {
  noLoop();
  // your code
}
```

### Slowing down the draw-cycle

Normally the draw-cycle is called every 60 seconds. You can slow this down to a so called framerate of your choice:

```js
function setup() {
  frameRate(10);
}
```

> While the default framerate is 60, complex visuals can reduce the actual framerate. For smooth animations a framerate of at least 24 should be achieved.

{{h2('Variables')}}

Sometimes we want to reuse a certain information in our code, for example a color or a size value for a shape. To help us with that, JavaScript has **variables**. Variables are like containers we can use for storing information, so we can later use or modify them.

### Variable-Types

In JavaScript there are two ways of declaring a function:

```js
const sketchWidth = 400;
let colorValue = 200;
```

With `const` we define a constant variable. This variable cannot be changed later on in our code. `let` is a more flexible variable, that can be modified and changed.

> If you are not sure what to use, simply use `let`.

A variable in JavaScript is not type-sensitive. This means you don't need to define in advance what you want to store inside a variable and you can change it at any time. For now the three data types we will mostly use are:

1. number
2. string (text), don't forget the "/'
3. boolean (true/false)

> While JavaScript is not type-sensitive, which is nice for prototyping, its bad for production code. Good code tries to only store one type of data inside a variable.

#### Boolean

Booleans are very simple they can be either `true` or `false`. We can use them for conditions (see below).

### Variabel naming

When naming our variables we need to watch out for a couple of things:

1. Don't use names of commands that are already in use (like the ones we alredy learned).
2. Write them in english, so you don't get tempted using special german or other characters.
3. Variable names cannot contain spaces, a space tells the system that something else is coming afterwards.
4. A variable name should not start with a number.
5. Use only letters, numbers, - and _.

In JavaScript, most developers are using the so called camel case 🐪 writing style. Multiple words are connected by using a capital for each first letter of a word:

```js
let colorValue;
let myFirstVariable;
```

> In other programming languages, other styles are preferred. Python for example uses so called snake case 🐍, where each word is combined by a "_" : `my_first_variable`

### Using variables

Once we have defined a variable we can use it and also modify the content:

```js
let backgroundColor; // define it in the global scope

function setup () {
  backgroundColor = random(0, 100); // set the backgroundColor to a random value
}

function draw () {
  background(backgroundColor); // use the number stored in backgroundColor
  backgroundColor += 1; // everytime the draw cycle is repeated 1 is added to the color
}
```

In the above example we define `backgroundColor` in the global scope (see below), outside `setup()` and `draw()`, so we can access it everywhere. We define it with `let` so we can modify it later on. In `setup()` we set `backgroundColor` to a random value between 0 and 100. In `draw()` we use the variable to draw the `background`, then we add 1 to the current value. This results in the number getting bigger and, thereby, the color getting brighter, until the number reaches 255. While our code will still increase the number, anything above 255 is still white.

> `variable += i` is short for `variable = variable + 1`. The same works for other math operations `variable -= 1`

### Scopes

In our first session learned about `setup()` and `draw()`. Those two functions encapsulate their content with curly brackets `{}`. Everything inside those brackets belongs to the function. This is also called the scope of the function. Scoping makes sure that what you do in a certain context, does not mess with something in your code somewhere else. But it also introduces the problem, that we sometimes want to pass information between different scopes:

```js
// global scope
let colorValue = 0;

function setup () {
  // setup() scope
  let anotherColorValue = 0;
}

function draw () {
  // draw() scope
  background(colorValue); // works
  background(anotherColorValue); // error!!!
}
```

The solution to share information between or across all scopes is to use the global scope, at the root of the document, not inside any curly brackets. Scopes can be nested. And variables from a parent scope are always accessible, but never the other way around.

> Be careful when using the same variable name across multiple scopes, as it can get confusing, because while they have the same name, they might not have the same value.

{{h2('Loops')}}

After the first few experiments, you have probably realized, that when you want to build more complex layouts, you have to write a lot of code. While some code will always need to be written, some repetetive layouts can be easily accomplished with a loop. Similar to our draw-cycle, a loop repeats the same code several times:

### For-Loop

```js
for(let i = 0; i < 5; i += 1) {
  circle(20 * i, 20, 5);
}
```

To initiate a for-loop, we need to define 3 things:

1. The start value: `let i = 0;`
2. Under what condition should our loop continue: `i < 5;`
3. What should happen at the end of each loop interval: `i += 1`

In our case, we set the variable `i` to be `0` when we start our loop. And the loop should be continued as long as `i < 5`, if `i` is `5` or bigger than `5` the loop will stop. At each interval we than add `1` to `i`. The result of this loop, is that our loop runs 5 times. Inside the loop (curly brackets > another nested scope), we can use the variable `i`. In the example above, we increase the x-value of our circle 

### Nested loops

We can nest as many loops as we want. If we want to build a grid of circles, we could use two nested loops:

```js
for(let x = 0; x < 10; x += 1) {
  for(let y = 0; y < 10; y += 1) {
    circle(20 * x, 20 * y, 5);
  }
}
```

### While-Loop

Using the for-loop we can define a variable that we can use for counting our iterations. Sometimes we already have a variable or our iteration process is more complex. The **while-loop** works exactly like the **for-loop** but it only has one parameter, the condition under which it keeps running:

```js
while (x < 10) {
}
```

In the example above the while function keeps iterating until x is equal or bigger than 10.

> Be careful with while loops, they can potentially crash your code if they never reach their end condition.

### Loop-Examples

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

{{h2('Conditions (if)')}}

We already learned one condition, inside the for-loop, the second parameter is a condition. We tell the system when it should end the loop. There are several options how to define a condition:

1. `a === b` a and b are the same
2. `a !== b` a and b are not the same
3. `a > b` a is bigger than b
4. `a < b` a is smaller than b
5. `a >= b` a is bigger or equal b
6. `a <= b` a is smaller or equal b

> You will also find `==` instead of `===`. `===` is a more strict comparison it compares the data type and the data value.

We can combine multiple conditions with either `&&` (and) or `||` (or):

```js
if (a < b && b < c) {
  // do something
}
```

We can use such conditions to only draw certain elements (execute certain commands):

```js
for (let i = 0; i < 10; i += 1) {
  fill("black");
  if (i < 5) { // turn fill to red when i is smaller 5
    fill("red");
  }
  circle(i * 5, i * 5, 5);
}
```

If we want to catch different cases, we can also use one if after another:

```js
if (i === 1) {
  fill("red");
} else if (i === 2) {
  fill("blue");
} else if (i === 3) {
  fill("green");
} else {
  fill("yellow");
}
```

The commands inside `else` catch all coniditions that were not matched above.

In such a series of `if` conditions, the system works from the top to the bottom, as soon as one conidition is met, the others are ignored. If you want to catch conditions not connected to one another, don't use the `else if` command:

```js
if (i < 5) {
  circle(5, 5, 5);
}
if (i < 10) {
  rect(0, 0, 5, 5);
}
```

In the above example a circle is draw if `i` is smaller 5. In addition a rectangle is draw if `i` is smaller 10. For the cases `i` smaller 5, a circle and a rectangle are draw.

There is a useful command to differentiate between even and odd numbers:

```js
for (let i = 0; i < 10; i += 1) {
  if (i%2 === 0) {
    fill('red');
  } else {
    fill('green');
  }
}
```

The above command `i%2 === 0` checks if a number, when divided by 2, has decimal places. `6/2 = 3 > true`, `5/2 = 2.5 > false`.

{{h2('Scopes (again)')}}

Scopes cover not only functions like `setup` and `draw`, but also things like loops and if statements. Most of the times when commands are wrapped inside curly brackets (`{}`) its a new scope level. An example:

```js
// global scope
function setup () {
  // setup() scope
  for (let i = 0; i < 10; i += 1) {
    // for-loop scope
    if (i < 5) {
      // if scope
    }
  }
}
```