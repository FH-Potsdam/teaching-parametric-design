**Parametric Design**
# Basics

GENERATIVE PATTERNS!!!
> File for SVG / PNG
> 
>   apps for that
> 

For creating our code-based design tools, we will be using the JavaScript framework [p5js](). p5js is the successor to the java-based [Processing]() system. Why learn JavaScript? Isn't JavaScript for building websites? Yes and no. JavaScript was originally developed to allow developers build interactivity into websites (and it still is). But since then NodeJS emerged, which allows you to run JavaScript code indepently from any browser on your computer. In this context JavaScript has become a lot more powerfull. You can now use it for example to read, edit and create files on your computer. So JavaScript has become an extremely versatile programming language. In addition its rather easy to get started with and quite "flexible" (more experienced coders hate JavaScript for its "flexibility", but for getting started this is perfect, don't let them fool you).

## p5js

There are a lots of frameworks / libraries / packages for JavaScript out there. Those tools are collections of so called functions, other people have written, so we can use them to do certain things, in the case of p5js for example the drawing and creation of shapes. You can think of them as little toolboxes. So every time you need to put a nail into a wall, you don't need to create a hammer from scratch, but instead you can simple take the hammer from the box and use it.

*So let's create our first p5js project!*

### Creating a project

1. Go to the `code` folder and create a new folder called `02-basics-start`.
2. Create a copy of the `code/example/index.html` and `code/example/script.js` in your new folder (copy, don't move, you will need them later)
3. Click on the new `index.html` and click on the Go Live button at the bottom of VS Code.
4. Open `code/02-basics-start/script.js`
5. Let's go!

IMAGE

### Sketches

In the p5js documentation you will sometimes read, that a project is called a **sketch**. This is a bit of a legacy from the former Processing tool. But let's stick with this for now. A sketch has at least two files `index.html` and `script.js`. In this seminar we will not edit the `index.html` file, this file basically tells the browser to load the p5js library and our `script.js` file and execute it.

For those who are interested, i have created a super [short introduction](html.md) to html. But you don't need any of this for this class.

### sketch.js

The `sketch.js` file is where all the magic happens. Here we will write our code to generate our designs. When you create a fresh copy from the example directory your file should look like this:

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

There is already a lot going on. Above you see two so called functions (we will talk about functions more later). The **setup** function and the **draw** function. Everything that is written inside the two curly brackets `{` and `}` belongs to that function.

#### setup function

The **setup** function is called only once in the beginning when our project starts. Inside the setup function we place preparations like creating the canvas that we want to draw on (`createCanvas`).

#### draw function

The **draw** function is continously called once **setup** is finished. In the begining this does not really matter as we are draw static elements, but later ony we will create moving elements, then this becomes very helpful.

### Let's draw

#### createCanvas
First we need to create a canvas, an area we can draw upon. To do this we add the `createCanvas` command into our **setup** function:

```js
function setup() {
  createCanvas(400, 400);
}
```

The first number defines the *width* and the second number the *height*. The size is in pixel units. In the example above 400 x 400 pixels.

*If you finish a command don't forget the semicolon!*

[Online reference](https://p5js.org/reference/#/p5/createCanvas)

#### background
In the begining our canvas is blank. But we can give our full canvas a uniform fill color. By using the `background` command. For now we will place it in the **draw** function:

```js
function draw() {
  background(220);
}
```

Different to the `createCanvas` command, we can use a variety of inputs to define the color (see next section for a color overview).

[Online reference](https://p5js.org/reference/#/p5/background)

#### colors

In p5js we can define colors in a variety of different forms:

1. Grayscale: one number from 255 (white) to 0 (black)
```js
background(150);
```

2. Red, Green & Blue (RGB): three numbers from 0 to 255
```js
background(255, 0, 0);
```

3. CSS Colors: [name](https://www.w3.org/wiki/CSS/Properties/color/keywords) of the color
```js
background('red');
```
*Notize the single quotes around the word 'red'. When every we use text as a value (string) for a command, we need to set single quotes around it. Otherwise JavaScript will think `red` is also a command.*

4. Hexadecimal RGB: hex text
```js
background('#ff0000');
```

5. RGB + Alpha (transparenz): rgba as a text, alpha is between 0 and 1
```js
background('rgba(255,0,0,0.5)');
```

*JavaScript uses english numbers, therefore a point is used as a decimal separater. German: 0,5 > English: 0.5 !*

Those are the things we will use, but there are even more possibilites, see [here](https://p5js.org/reference/#/p5/background).

#### basic shapes

Or as the p5js reference calls them *2D primitives*. All those shapes are created in a coordinate system. The origin (0|0) of that coordinate system is in the upper left corner of our canvas. Units as always in pixels.

IMAGES!!!

1. **Point** 1: **x-coordinate** (number), 2: **y-coordinate** (number)
```js
point(20, 20);
```

2. **Circle** 1: **x-coordinate** (number), 2: **y-coordinate** (number), 3: **radius** (number)
```js
point(20, 20, 5);
```

3. **Ellipse** 1: **x-coordinate** (number), 2: **y-coordinate** (number), 3: **width** (number), 4: **height** (number)
```js
ellipse(20, 20, 5, 10);
```

4. **Line** 1: **x-start** (number), 2: **y-start** (number), 3: **x-end** (number), 4: **y-end** (number)
```js
line(10, 10, 40, 40);
```

5. **Square**  1: **x-coordinate** (number), 2: **y-coordinate** (number), 3: **size** (number)
```js
square(10, 10, 40);
```

6. **Rectangle**  1: **x-coordinate** (number), 2: **y-coordinate** (number), 3: **width** (number), 4: **height** (number)
```js
rect(10, 10, 40, 20);
```

### fills & strokes

Code in any programming language is always interpreted from top to bottom. p5js has a default color setting: fill and strokes are black. We can change the fill and stroke at any time. Everything painted after the fill or stroke command (top to bottom) is painted in the new color.

1. **fill** (see background)
```js
fill(255, 0, 0);
```

*stroke and fill take the same color parameters as the background command*

2. **stroke**
```js
stroke(255, 0, 0);
```

The following code creates two red circle first, and then a second blue circle.

```js
fill(255, 0, 0);
circle(10, 10, 5);
circle(20, 20, 5);

fill(0, 0, 255);
circle(30, 30, 5);
```

Besides colors we can also modify the stroke width of the shapes we draw:

3. **stroke width**: 1: width in pixels (number)
```js
strokeWidth(5);
```

#### comments
If you want to write a comment in your code or you want to temporarily disable a line of code, there are two ways:

1. Single line comment
```js
// this is a one line comment
```

2. Multi line comment
```js
/* 
inside this comment we can add
as mayn lines
as we like
*/
```

#### indenting
In some coding languages like python, the indenting of code has meaning. In JavaScript it has not. You could write everything in one line. But indenting code helps keeps things organized. Especially later when have more `{}` brackets, its easy to loose track, so try to indent your code. For now, simple rule, after every open `{` indent and reverse when it closes `}`. If you are using VS Code the indenting will likely happen automatically.

```js
{
  //Hello
  {
    //World
  }
}
```
*The above code makes no sense, just for illustration purposes*