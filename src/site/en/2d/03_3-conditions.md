---
title: Conditions
eleventyNavigation:
  title: Conditions
  key: en_2d_conditions
  parent: en_2d
  order: 5
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

{{h2('Comparisons')}}

{{video("https://fhpcloud.fh-potsdam.de/s/9JQD5NcnFeHERio/download/en_conditions.mp4", "/images/thumbnails/en_2d_conditions_conditions.png", "en_2d_conditions_conditions", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/7857tAkFNXA8Yjb/download/de_conditions.mp4
en:https://fhpcloud.fh-potsdam.de/s/9JQD5NcnFeHERio/download/en_conditions.mp4
-->

We already learned one condition, inside the for-loop, the second parameter is a condition. We tell the system when it should end the loop. There are several options how to define a condition:

|Operator|Example|Explanation|
|---|---|---|
|===|1 === 1|Exactly the same|
|==|1 == '1'|The same, but variable type is ignored.|
|!==|1 != 2 |Not the same|
|<|1 < 2|Smaller than|
|>|2 > 1|Bigger than|
|<=|1 <= 2|Smaller than or eqal|
|>=|2 >= 1|Bigger than or eqal|

We can combine multiple conditions with either `&&` (and) or `||` (or):

```js
if (a < b && b < c) {
  // do something
}
if (a === b || a === c) {
  // do something else
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

The commands inside `else`, catch all coniditions that were not matched above.

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

{{video("https://fhpcloud.fh-potsdam.de/s/i4n7ETnjWjMqijH/download/en_scopes2.mp4", "/images/thumbnails/en_2d_conditions_scopes.png", "en_2d_conditions_scopes", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/BdSbeYGttJnTK2K/download/de_scopes2.mp4
en:https://fhpcloud.fh-potsdam.de/s/i4n7ETnjWjMqijH/download/en_scopes2.mp4
-->

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

{{task("Task: Conditions & Random", "Create a random value and use it in a condition, to switch between drawing commands (shapes, colors, etc.).")}}

{{inspiration('Shape switch')}}

{{editor('/code/randomshape', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/conditions/randomshapes/sketch.js', true)}}