**Parametric Design**

# GIF Bonus

p5js has a lot of build in commands to create graphics. Over the years, a lot of people have written so called libraries to add new features, that makes building your projects easier. One example is the [createLoop library](https://github.com/mrchantey/p5.createLoop#readme).

## Adding a library

To add a new library you need to edit the `index.html` file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sketch</title>
    <link rel="stylesheet" type="text/css" href="../libraries/p5js/p5.css">
  </head>
  <body>
    <script src="../libraries/p5js/p5.min.js"></script>
    <script src="../libraries/p5js/libraries/p5.svg.js"></script>
    <!-- HERE WE CAN ADD MORE LIBRARIES -->
    <script src="sketch.js"></script>
  </body>
</html>
```

When adding libraries you need to make sure that the library is loaded **after** the main p5js library is loaded and **before** your own `sketch.js` file is loaded, because the library needs access to the p5js functionality and similar your code wants access to both the library as well as p5js.

There are two options for adding a new library, starting from our boilerplate. 1) You can download the library and add it to our `./code/libraries/p5js/libraries/` folder and then add `<script src="../libraries/p5js/libraries/NAME_OF_YOUR_FILE.js"></script>`. This gives you offline access to the library. Or you can include the library from a URL, for example: `<script src="https://unpkg.com/p5.createloop@0.2.8/dist/p5.createloop.js"></script>`. Many libraries are hosted on so called CDNs (content delivery networks).

So for our example the final `index.html` looks like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sketch</title>
    <link rel="stylesheet" type="text/css" href="../libraries/p5js/p5.css">
  </head>
  <body>
    <script src="../libraries/p5js/p5.min.js"></script>
    <script src="../libraries/p5js/libraries/p5.svg.js"></script>
    <script src="../libraries/p5js/libraries/p5.createloop.js"></script>
    <script src="sketch.js"></script>
  </body>
</html>
```

You can find the full code [here](https://github.com/FH-Potsdam/teaching-parametric-design/tree/main/code/gif).

## Quick note about GIFs

[GIFs](https://de.wikipedia.org/wiki/Graphics_Interchange_Format) (Graphics Interchange Format) are an ancient format. They were once great, because they gave designers a lot of control over building animations and optimizing the file size. The problem with gifs today is, that people use them to basically build videos. And for videos we have far more superior formats like MPEG. So when you still want to create GIFs and don't want them to become to big in file size, make sure to watch out for the following things:

- use a reduced color pallete, the more colors the bigger the file
- keep the image size small, don't create 1920*1080 GIFs
- experiment with the number of frames and the framerate

Alternatively you could export a series of images and then stitch them together and export as a movie (for example using Photoshop image series feature). Further reading:

- [https://p5js.org/reference/#/p5/saveFrames](https://p5js.org/reference/#/p5/saveFrames)
- [https://github.com/spite/ccapture.js/](https://github.com/spite/ccapture.js/)

## Building a simple GIF animation

Some definitions and our polar function to get started: 

```js
const sketchWidth = 400;
const sketchHeight = 400;

function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {x: x, y: y};
}
```

In the setup we need to make sure that we define our framerate: `frameRate(number)`. Lower framerate equals less frames in our gif-animation. Then we setup the gif-creation with the `createLoop()` command and provide a few attributes:

```js
function setup () {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(30)
  createLoop({
    duration:3, // duration in seconds for our gif animation
    gif:true
  });
}
```

Our draw function is exactly as we would write it normally:

```js
function draw() {
  background(255);
  fill(0);
  translate(sketchWidth / 2, sketchHeight / 2);
  // animLoop.progress > value between 0 and 1 showing the progress of our animation
  const pos = polar(100, 360 * animLoop.progress);
  circle(pos.x, pos.y, 25);
}
```

After createLoop is done creating our gif its added to the website. You can then simply download it using *right-click > save image*.

Here is the final result:

![resulting gif](image.gif)