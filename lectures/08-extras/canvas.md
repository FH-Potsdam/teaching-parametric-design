**Parametric Design**

## Canvas

### Canvas Location

Per default, **createCanvas** creates a canvas at the end of the html **body**. If we want our canvas to be place in a specific location, we can add an HTML-element and give it an ID and place it inside that element: `<div id="canvas-container"></div>`:

```js
function setup() {
  const canvas = createCanvas(100, 100);
  canvas.parent('sketch-container');
}
```

### Canvas Size

If you want to make your canvas fill the whole page:

```js
createCanvas(windowWidth, windowHeight);
```

If there is a white border. Add this to your HTML-head:

```html
<style>
  body, html {
    margin:0;
    padding:0;
    border:none;
  }
</style>
```

If you want to change the size of your canvas:

```js
resizeCanvas(windowWidth, windowHeight);
```

If you want to change the size everytime the window size changes:

```js
window.addEventListener('resize', function() {
  resizeCanvas(windowWidth, windowHeight);
});
```

### Multiple Canvas objects

You can create as many instances as you want, but the syntax is slightly different:

```js
let sketchOne = function(p) {
  p.setup = function() {
    const canvas = p.createCanvas(400, 400);
    canvas.parent('sketchOne');
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(50, 50, 50, 50);
  };
};

let sketchTwo = function(p) {
  p.setup = function() {
    const canvas = p.createCanvas(400, 400);
    canvas.parent('sketchTwo');
  };

  p.draw = function() {
    p.background(0);
    p.fill('red');
    p.rect(50, 50, 50, 50);
  };
};

new p5(sketchOne);
new p5(sketchTwo);
```

Inside the **sketchOne** and **sketchTwo** function a parameter is given **p**. Inside those functions, you simply always add the **p** before you use the normal p5js commands. Everything else is the same, you can also use **preload** and all event functions, just don't forget the **p** prefix.

If you are trying to instantiate the same sketch and just want to place it in a different container, there is a shortcut:

```js
let sketchOne = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(50, 50, 50, 50);
  };
};

new p5(sketchOne, 'sketchOne');
new p5(sketchOne, 'sketchTwo');
```

You can also change things inside the sketch instance (note the p-prefix) and create them programmatically:

```js
let sketchOne = function(p) {
  p.sketchColor = 'red';

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(0);
    p.fill(p.sketchColor);
    p.rect(50, 50, 50, 50);
  };
};

const colors = ['red', 'yellow', 'green'];

for (let c = 0; c < colors.length; c+= 1) {
  const sketch = new p5(sketchOne);
  sketch.sketchColor = colors[c];
}
```
