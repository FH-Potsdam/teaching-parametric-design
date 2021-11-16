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

You can find the full code here.