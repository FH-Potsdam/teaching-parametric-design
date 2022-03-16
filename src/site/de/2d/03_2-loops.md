---
title: Loops
eleventyNavigation:
  title: Loops
  key: de_2d_loops
  parent: de_2d
  order: 4
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

After the first few experiments, you have probably realized, that when you want to build more complex layouts, you have to write a lot of code. While some code will always need to be written, some repetetive layouts can be easily accomplished with a loop. Similar to our draw-cycle, a loop repeats the same code several times:

{{h2('While loop')}}

{{video("MISSING", "/images/thumbnails/en_2d_loops_while.png", "en_2d_loops_while", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/Yt5xr8GX8RE6b6g/download/de_while.mp4
en:MISSING
-->

For using the while-loop, we need to define a condition, as long as this condition is met, the loop continues running. In the example below, the while-loop keeps iterating until the variable `x` is equal or bigger than 10:

{{editor('/code/while', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/while/sketch.js')}}

> Be careful with while loops, they can potentially crash your code if they never reach their end condition.

{{h2('Nested loops')}}

We can nest as many loops as we want. If we want to build a grid of circles, we could use two nested loops:

{{editor('/code/while_nested', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/whilenested/sketch.js')}}

{{h2('For-Loop')}}

{{video("https://fhpcloud.fh-potsdam.de/s/dzWFAFiZiYes9HZ/download/en_for.mp4", "/images/thumbnails/en_2d_loops_for.png", "en_2d_loops_for", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/2e55m4LqkzpYKPy/download/de_for.mp4
en:https://fhpcloud.fh-potsdam.de/s/dzWFAFiZiYes9HZ/download/en_for.mp4
-->

The for-loop is very similar to the while-loop:

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

In many cases, the for-loop is the quicker way of defining a loop, as we can define the start value of our loop variable, the condition, as well, as what happens at the end of each loop, in one simple line:

{{editor('/code/for', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/for/sketch.js')}}

In the case above, we set the variable `x` to be `1` when we start our loop. And the loop should be continued as long as `x < 20`, if `x` is bigger than `20` the loop will stop. At each interval we than add `1` to `x`. The result of this loop, is that our loop runs 19 (!) times. Inside the loop (curly brackets > another nested scope), we can use the variable `x`. In the example above, we increase the x-value of our circle.

{{h2('Examples')}}

Following two of examples for loops.

Generating a grid, that fills the whole canvas area:

{{editor('/code/forfilling', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/forfilling/sketch.js')}}

We can also modify the loop-variable inside the loop (try re-running the code):

{{editor('/code/forrandom', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/forrandom/sketch.js')}}

The while loop can be interesting if we want to generate a number that is different to an existing number (this becomes more interesting in the next chapter when we introduce arrays):

```js
const num1 = Math.round(Math.random() * 10);
let num2 = num1;
while (num2 === num1) {
  num2 = Math.round(Math.random() * 10);
}
```

In the above example we create two numbers. If the numbers are the same. The loop will try to find a new number that is different, running another iteration.

{{task("Task: Loops", "Try combining the random command from the last section, with the loops to create a grid of shapes.")}}

{{inspiration('Color variations II', 'Try changing the size or the fill command (and re-run the code) to see how it affects the outcome.')}}

{{editor('/code/randomcolor2', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/randomcolors/sketch.js', true)}}