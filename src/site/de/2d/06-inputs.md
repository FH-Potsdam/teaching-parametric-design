---
title: Input
eleventyNavigation:
  title: Input
  key: de_2d_more_input
  parent: de_2d
  order: 10
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

So far we have created our parameters manually or by using the `random()` function. In this section we will look at a few input options which we will turn into parameters to modify our layouts and designs.

{{video("https://fhpcloud.fh-potsdam.de/s/gDGSt2aPMBmpwY5/download/en_2d_input_input.mp4", "/images/thumbnails/en_2d_input_input.png", "en_2d_input_input", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/iadtKNALWYK5ySi
en: https://fhpcloud.fh-potsdam.de/s/gDGSt2aPMBmpwY5
-->

{{h2('Form input')}}

The easiest input is a simple text field.

```js
let textField; 

function setup() {
  createCanvas(400, 400);
  textField = createInput('my name'); // default value
  textField.position(0, 400); // position of the input
  textField.size(100); // size of input
}

function draw() {
  background(255);
  text(textField.value(), 20, 20);
}
```

> This input will always return a string (although most p5js functions won't mind a string instead of a number). If you want to convert it into a number, use: `parseInt(textField.value())` or `parseFloat(textField.value())`

Sometimes you might not want to use the input directly but instead run a function that computes another variable:

```js
let myAge = 0;

function setup() {
  createCanvas(400, 400);
  let textField = createInput(myAge);
  textField.position(0, 400); // position of the input
  textField.size(100); // size of input
  textField.input(inputChange);
}

function inputChange() {
  // notice "this.value()" to access the current value
  myAge = parseInt(this.value()) * 365;
}

function draw() {
  background(255);
  text('Age in days: ' + myAge, 20, 20);
}
```

The textfield does not need to be inside the canvas its independent from the canvas and when we export our canvas later (e.g. as an image), the field will not be part of it.

> Notice `this.value()`: This will return the current value of the input.

We can add as many text fields as we want. There are a few other input elements, that work similar to the text field:

- [Button](https://p5js.org/reference/#/p5/createButton)
- [Checkbox](https://p5js.org/reference/#/p5/createCheckbox)
- [Dropdown list](https://p5js.org/reference/#/p5/createSelect)
- [Radio-Button](https://p5js.org/reference/#/p5/createRadio)
- [Color Picker](https://p5js.org/reference/#/p5/createColorPicker)
  
Check the corresponding documentation in the reference for more info. 

### Slider

{{video("https://fhpcloud.fh-potsdam.de/s/FtaXGCfyZXbFt9M/download/en_2d_input_slider.mp4", "/images/thumbnails/en_2d_input_slider.png", "en_2d_input_slider", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/D6aWPfik6JqriHn
en: https://fhpcloud.fh-potsdam.de/s/FtaXGCfyZXbFt9M
-->

One other input element that is very convenient and fun to use is the slider. We use it exactly as the other input fields:

{{ definition('createSlider', [
  { name: 'min', type: 'number' },
  { name: 'max', type: 'number' },
  { name: 'currentValue', type: 'number', optional: true },
  { name: 'stepSize', type: 'number', optional: true }
]) }}
```js
let slider; 

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 200, 50, 10);
  slider.position(0, 400);
  slider.size(100);
}

function draw() {
  background(255);
  circle(200, 200, slider.value());
}
```

{{h2('Mouse')}}

{{video("https://fhpcloud.fh-potsdam.de/s/DwWqSrH3B8dDsgz/download/en_2d_input_mouse.mp4", "/images/thumbnails/en_2d_input_mouse.png", "en_2d_input_mouse", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/KnTnFYsX8gSGCGy
en: https://fhpcloud.fh-potsdam.de/s/DwWqSrH3B8dDsgz
-->

We can use the current coordinates of the mouse cursor:

```js
function draw() {
  point(mouseX, mouseY);
}
```

The mouse can also trigger certain event-functions:

```js
let counter = 0;
function mouseClicked() {
  counter += 1;
}
```

Other mouse event functions are: `mouseMoved`, `mouseDragged`, `mousePressed`, `mouseReleased`, `mouseClicked`, `doubleClicked`, `mouseWheel`, for more information, check the [reference](https://p5js.org/reference/#/p5/mouseMoved).



### Examples

In this example we draw a circle where the mouse currently is. Thanks to the slightly transparent color in the `background` command, it looks like the mouse is creating a trail, when we are moving slowly:

{{editor('/code/mousesimple', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/mousesimple/sketch.js')}}


In this next example we will do the same, but not rely on the background-hack. Therefore, we push the current position of the mouse at the end of the draw-loop into an array. A small function called [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) helps us make sure the array never gets bigger than 20 items. Through slice we select the last 20 items in the array and use the result to override our variable.

{{editor('/code/mouse', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/mouse/sketch.js', true)}}

{{h2('Keyboard')}}

{{video("https://fhpcloud.fh-potsdam.de/s/c8wXExM8MiF8R5S/download/en_2d_input_keyboard.mp4", "/images/thumbnails/en_2d_input_keyboard.png", "en_2d_input_keyboard", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/5tjrRi5E3t6Akob
en: https://fhpcloud.fh-potsdam.de/s/c8wXExM8MiF8R5S
-->

The keyboard is very similar to the mouse. Its particularly nice if you want to trigger something, maybe simply increase or decrease a value or export something (see next [section](07-export.md)):

```js
let counter = 0;
function keyPressed() {
  counter += 1;
}
```

If you want to trigger different things depending on the key that is actually pressed, you can use the `keyCode` variable. `keyCode` holds a number, the id of the key being pressed. p5js has a couple of shortcuts, like `LEFT_ARROW` or `RIGHT_ARROW`. Those are simply variables that hold the number of specific keys, so we don't need to remember them:

```js
let counter = 0;
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    counter -= 1;
  } else if (keyCode === RIGHT_ARROW) {
    counter += 1;
  } else {
    console.log(keyCode);
  }
}
```

> If you are not sure which key has which code, simply use `console.log(keyCode);`. Open your developer tools and check the console every time you hit a certain key.

Inside our draw function we can also find out, if any key is currently pressed (the `keyCode` variable is also available):

```js
function draw() {
  if (keyIsPressed === true) {
    background(255);
  } else {
    background(0);
  }
}
```

If you are using keyboard input, you often need to click the page or in this case frame first, before the events register. This is a security measurement, so websites don't know what you are typing on your machine. This following is just a silly little demonstration. Click on the black frame and then go wild on your keyboard:

{{editor('/code/keycolors', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/keycolors/sketch.js', true)}}

{{h2('GUI')}}

{{video("https://fhpcloud.fh-potsdam.de/s/55qdt4ofsqakodd/download/en_2d_input_gui.mp4", "/images/thumbnails/en_2d_input_gui.png", "en_2d_input_gui", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/PQG9LZaK3M5afyG
en: https://fhpcloud.fh-potsdam.de/s/55qdt4ofsqakodd
-->

In the bonus section, there is an in-depth [explanation](../../bonus/gui) of the GUI pulgin.

{{task("Task: Inputs", "Start with the mouseX and mouseY to build your first interactive sketch.")}}

{{inspiration('Fractals')}}

Here is the same from the last section, but all variables have been replace with sliders. Be careful with the third slider. Especiall the fourth and fifth slider are intersting to create new shapes.

{{editor('/code/fractals3', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/fractals/sketch.js', true)}}

