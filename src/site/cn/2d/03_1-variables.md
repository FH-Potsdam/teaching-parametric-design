---
title: Variables
eleventyNavigation:
  title: Variables
  key: cn_2d_variables
  parent: cn_2d
  order: 3
---

{% from "../../_includes/parts/macros.njk" import video, task, inspiration, h2, definition, editor %}

{{video("https://fhpcloud.fh-potsdam.de/s/pRWC3RCBAkomJQc/download/en_variables.mp4", "/images/thumbnails/en_2d_variables_variables.png", "en_2d_variables_variables", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/i3XWqysaaJZSqKS/download/de_variables.mp4
en:https://fhpcloud.fh-potsdam.de/s/pRWC3RCBAkomJQc/download/en_variables.mp4
-->

Sometimes we want to reuse a certain information in our code, for example a color or a size value for a shape. To help us with that, JavaScript has **variables**. Variables are like containers we can use for storing information, so we can later use or modify them.

{{h2('Variable Types')}}

In JavaScript there are two ways of declaring a variable:

```js
const sketchWidth = 400;
let colorValue = 200;
```

With `const` we define a constant variable. This variable cannot be changed later on in our code. `let` is a more flexible variable, that can be modified and changed.

> If you are not sure what to use, simply use `let`.

A variable in JavaScript is not type-sensitive. This means you don't need to define in advance what you want to store inside a variable and you can change it at any time. For now the three data types we will mostly use are:

1. number
2. string (text), don't forget the " or '
3. boolean (true/false)

> While JavaScript is not type-sensitive, which is nice for prototyping, its bad for production code. Good code tries to only store one type of data inside a variable.

#### Boolean

Booleans are very simple they can be either `true` or `false`. We can use them for [conditions](03_3-conditions.md).

### Variabel naming

When naming our variables we need to watch out for a couple of things:

1. Don't use names of commands that are already in use (like the ones we alredy learned).
2. Write them in english, so you don't get tempted using special german or other characters.
3. Variable names cannot contain spaces, a space tells the system that something else is coming afterwards.
4. A variable name should not start with a number.
5. Use only letters, numbers and _.

In JavaScript, most developers are using the so called camel case 🐪 writing style. Multiple words are connected by using a capital for each first letter of a word:

```js
let colorValue;
let myFirstVariable;
```

> In other programming languages, other styles are preferred. Python for example uses so called snake case 🐍, where each word is connected through a "_" : `my_first_variable`

{{h2('Using variables')}}

Once we have defined a variable we can use it and also modify the content:

{{editor('/code/using_variables', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables/using/sketch.js')}}

In the above example we define `backgroundColor` in the global scope (see below), outside `setup()` and `draw()`, so we can access it everywhere. We define it with `let` so we can modify it later on. In `setup()` we set `backgroundColor` to be **0**. In `draw()` we use the variable to draw the `background`, then we add 1 to the current value. This results in the number getting bigger and, thereby, the color getting brighter, until the number reaches 255. While our code will still increase the number, anything above 255 is still white.

> `variable += i` is short for `variable = variable + 1`. The same works for other math operations `variable -= 1`

{{h2('Storing color values')}}

A color consists of three or four values (RGB + opacity). You could store a color in multiple variables, but that means a lot of writing. In a later chapter we will meet arrays and objects, which will be more suitable. But, there is a helper function from p5js, allowing us, to store a color in a single variable: color.

{{ definition('color', [
  { name: 'R', type: 'number' },
  { name: 'G', type: 'number' },
  { name: 'B', type: 'number' },
  { name: 'opacity', type: 'number', optional: true }
]) }}
```js
const backgroundColor = color(255, 0, 100, 150);
```

> You can also use color with other parameters, similar to fill, stroke and background (see last [section](02-drawing.md)).


{{h2('Scopes')}}

{{video("https://fhpcloud.fh-potsdam.de/s/pqPoc8X82zsY8Mn/download/en_scopes.mp4", "/images/thumbnails/en_2d_variables_scopes.png", "en_2d_variables_scopes", translations.subtitles[locale], locale)}}

<!--
de:https://fhpcloud.fh-potsdam.de/s/eWosHwNS6ZkDxSe/download/de_scopes.mp4
en:https://fhpcloud.fh-potsdam.de/s/pqPoc8X82zsY8Mn/download/en_scopes.mp4
-->

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

{{h2('Random')}}

{{video("https://fhpcloud.fh-potsdam.de/s/BcpyHGz7bq5sazY/download/en_random.mp4", "/images/thumbnails/en_2d_variables_random.png", "en_2d_variables_random", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/RNgAQseAJQedsFJ/download/de_random.mp4
en:https://fhpcloud.fh-potsdam.de/s/BcpyHGz7bq5sazY/download/en_random.mp4
-->

We use numbers to define colors, positions and sizes. But sometimes, we want to slightly alter our objects and layout without us defining all those alterations in detail. An option to achive such things is the random command, random generates a value between **0** and **1** or a value between the **min** and **max** value provided as first and second parameter:

{{ definition('random', [
  { name: 'min', type: 'number', optional: true },
  { name: 'max', type: 'number', optional: true }
]) }}
```js
const backgroundColor = random() * 255;
const otherColor = random(0, 255);
```

> `random()` is a p5js function. If you are using JavaScript without p5js, you can use `Math.random()`.

{{task("Task: Random", "Random values can be used for everything. Try exploring the possibilities to use it in the various shape commands we already learned about.")}}

{{inspiration('Color variations I', 'Try re-running the code, to get a different color variation.')}}

{{editor('/code/randomcolor', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables/randomcolor/sketch.js', true)}}