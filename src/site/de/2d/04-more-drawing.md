---
title: More Drawing
eleventyNavigation:
  title: More Drawing
  key: de_2d_more_drawing
  parent: de_2d
  order: 4
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{h2('Polygons')}}

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/vertex.mp4', "/images/video-thumb.png")}}

After all the abstract JavaScript basics, back to the drawing functions. In the last section we learned about basic shapes like circles and rectangles. All those shapes consist of points, which are connected to one another by lines and then the last point is connected to the first. These lines do not always have to be straight. Looking ahead at our laser cutter work, those lines are the path the laser cutter will take to cut our materials. Let's start with a simple example the rectangle:

```js
rect(0, 0, 40, 20);
point(0,0);
point(40,0);
point(40,20);
point(0,20);
```

The rectangle consists of four points. We could also create our rectangle shape manually:

```js
beginShape();
vertex(0, 0);
vertex(40, 0);
vertex(40, 20);
vertex(0, 20);
endShape(CLOSE);
```

We tell p5js that we want to start drawing a shape with the command `beginShape();`. Then we use the `vertex(x, y)` command to add a point to our shape. `x` and `y` are provided as numbers. When our shape is complete we use the `endShape();` command. The `CLOSE` parameter tells p5js to connect the last point with the first point (if you don't use it, the shape will be open). Starting from this simple example we can build complex shapes.

> If you are building more complex shapes, you should make sure that the points are aligned clockwise.

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/complex-verte.mp4', "/images/video-thumb.png")}}

Building a shape with the polar coordinates:

```js
beginShape();
for(let angle = 0; angle < 360; angle += 15) {
  const radius = random(10, 50);
  const x = radius * cos(Math.PI / 180 * angle);
  const y = radius * sin(Math.PI / 180 * angle);
  vertex(x, y);
}
endShape();
```

{{h2('Quad & Triangle')}}

If you only want to draw a polygon with 3 or 4 points, you can use the `quad` and `triangle` command. Both take a series of x,y parameters to define the points:

```js
quad(0, 0, 40, 0, 40, 20, 0, 20);
triangle(0, 0, 40, 0, 40, 20);
```

{{h2('Curves')}}

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/vertexcurve.mp4', "/images/video-thumb.png")}}

If we want to go beyond straight lines, we can also use curves. There are three type of curve commands:

```js
beginShape();
curveVertex(0, 0);
curveVertex(40, 0);
curveVertex(40, 20);
curveVertex(0, 20);
endShape(CLOSE);
```

`curveVertex` is the easiest command, as it generates the curves for you. With `bezierVertex` and `quadraticVertex` you need to build the curves yourself with control points (similar to how you would do it in a vector editing software):

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/quadricVertex.mp4', "/images/video-thumb.png")}}

```js
beginShape();
vertex(0, 0); // we need to add a startpoint
quadraticVertex(20, 20, 40, 0);
endShape();
```

`quadraticVertex` takes for parameters, the first two are x, y coordinates of the control point and the second two x, y are the new point for our line. `bezierVertex` requires two control points (vector software) for the start and end of the line:

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/bezierVertex.mp4', "/images/video-thumb.png")}}

```js
beginShape();
vertex(0, 0); // we need to add a startpoint
bezierVertex(10, 20, 30, 20, 40, 0);
endShape();
```

{{video('https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/03-drawing/bezierVertex-2.mp4', "/images/video-thumb.png")}}

In the beginning when working with curves, it can help a lot to draw all the points and even connect normal points and control points (make it look like in a vector editting software):

```js
beginShape();
vertex(0, 0); // we need to add a startpoint
bezierVertex(10, 20, 30, 20, 40, 0);
endShape();

lineWeight(5);
point(0, 0);
point(40, 0);
stroke("red");
point(10, 20);
point(30, 20);
line(0, 0, 10, 20);
line(40, 0, 30, 20);
```

Or with variables:

```js
const x1 = 0;
const y1 = 0;
const x2 = 40;
const y2 = 0;

const cx1 = 10;
const cy1 = 20;
const cx2 = 30;
const cy2 = 20;

beginShape();
vertex(x1, y1); // we need to add a startpoint
bezierVertex(cx1, cy1, cx2, cy2, x2, y2);
endShape();

lineWeight(5);
point(x1, y1);
point(x2, y2);
stroke("red");
point(cx1, cy1);
point(cx2, cy2);
line(x1, y1, cx1, cy1);
line(x2, y2, cx2, cy2);
```

