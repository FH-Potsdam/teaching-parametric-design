---
title: Conditions
eleventyNavigation:
  title: Conditions
  key: de_2d_conditions
  parent: de_2d
  order: 3.2
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{h2('Comparisons')}}

{{video("https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/02-basics/conditions.mp4", "/images/video-thumb.png")}}

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

{{h2('Examples')}}

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

{{video("https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/02-basics/more-scopes.mp4", "/images/video-thumb.png")}}

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