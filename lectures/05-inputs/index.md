**Parametric Design**

# Export

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/05-input/save.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Pixels

The purpose of learning about how to build design with code, is so we can quickly generate complex shapes and patterns to use in other design processes. So far our output format was a pixel based image. To export our pixels into a convenient PNG format, simply call the `save()` command:

```js
function draw() {
  // drawing code
  noLoop();
  save();
}
```

> When calling the save command, make sure you use `noLoop()` or an event. Otherwise the save function will be called continously.

## Vectors

While pixels are a good start,  we cannot easily modify our designs once they are stored in pixels. The best alternative are vectors, which we can export as **SVGs**. SVGs are a standard for vector graphics and they can be displayed in the browser and easily imported into any graphics software (e.g. Illustrator, Sketch, Figma, etc.). To do so, we need to tell p5js that we want to switch from pixels to vectors. So upon initializing our canvas, we need to define the correct render-engine:

```js
function setup() {
  createCanvas(400, 400, SVG);
}
```

> Not all functions work (or make sense to use), when working with vectors. But all 2D-commands work just fine.

> If you are creating your own p5js vector project, make sure you include the [SVG-library](https://github.com/zenozeng/p5.js-svg) in your `index.html`. Our boilerplate has this already included.

# Interactions

So far we have created our parameters manually or by using the `random()` function. In this section we will look at a few input options which we will turn into parameters to modify our layouts and designs.

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/05-input/input.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Text field

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

> This input will always return a string. If you want to convert it into a number, use: `parseInt(textField.value())` or `parseFloat(textField.value())`

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
  myAge = parseInt(this.value()) * 365;
}

function draw() {
  background(255);
  text('Age in days: ' + myAge, 20, 20);
}
```

The textfield does not need to be inside the canvas its independent from the canvas and when we export our canvas later, the field will not be part of it.

> Notice `this.value()`: This will return the current value of the input.

We can add as many text fields as we want. There are a few other input elements, that work similar to the text field:

- [Button](https://p5js.org/reference/#/p5/createButton)
- [Checkbox](https://p5js.org/reference/#/p5/createCheckbox)
- [Dropdown list](https://p5js.org/reference/#/p5/createSelect)
- [Radio-Button](https://p5js.org/reference/#/p5/createRadio)
- [Color Picker](https://p5js.org/reference/#/p5/createColorPicker)
  
Check the corresponding documentation in the reference for more info. 

## Keyboard events

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/05-input/keyboard.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Sometimes you don't need an actual input, but you rather want to trigger something, maybe simply increase or decrease a value:

```js
let counter = 0;
function keyPressed() {
  counter += 1;
}
```

You can also use the `keyCode` to do different things:

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

Inside our draw function we can also find out, if a key is currently pressed:

```js
function draw() {
  if (keyIsPressed === true) {
    background(255);
  } else {
    background(0);
  }
}
```

## Mouse events

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/05-input/mouse_Trim.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The mouse events are very similar to the keyboard events:

```js
let counter = 0;
function mouseClicked() {
  counter += 1;
}
```

We can also use the current coordinates of the mouse cursor:

```js
function draw() {
  point(mouseX, mouseY);
}
```

### Application

First off, let's combine the array from the last section with the mouse and create a trail:

```js
let trail = [];
const trailMax = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  trail.push({x: mouseX, y: mouseY});
  if (trail.length > trailMax) {
    // this selects the last n elements from the array
    trail = trail.slice(-trailMax);
  }
  noFill();
  stroke('black');
  beginShape();
  for (let t = 0; t < trail.length; t += 1) {
    vertex(trail[t].x, trail[t].y);
  }
  endShape();
}
```

# This is just the beginning

In the last few sessions we have covered the basics of p5js, but there is a lot more to discover and do:

- Checkout the [reference](https://p5js.org/reference/) for more commands
- Some people have build [additional commands](https://p5js.org/libraries/) (libraries) that you can add to your setup
- If you want more tutorials, the [coding train](https://thecodingtrain.com/) comes strongly recommended
- The coding examples from the book "Generative Gestaltung", are [available online](http://www.generative-gestaltung.de/)

As a fun bonus, i have written an example to show how to add other p5js-libraries and used the gif-export from [createLoop](https://github.com/mrchantey/p5.createLoop#readme) as an example: [GIF-Bonus](gif.md)
