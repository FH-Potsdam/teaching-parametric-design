---
title: "extrude"
permalink: "/code/3d/extrude/index.js"
---
<pre>
const jscad = require('@jscad/modeling');

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus, polygon, polyhedron} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {offset, expand} = jscad.expansions;
const {translate, rotate, scale, center, align} = jscad.transforms;

const radius = 5;
const width = 50;
const height = 100;

const main = () => {
  const elements = [];

  // first the corners
  // upper left
  let corner = circle({
    center: [-width/2 + radius, -height/2 + radius, 0],
    radius: radius
  });
  elements.push(corner);
  // upper right
  corner = circle({
    center: [width/2 - radius, -height/2 + radius, 0],
    radius: radius
  });
  elements.push(corner);
  // lower left
  corner = circle({
    center: [-width/2 + radius, height/2 - radius, 0],
    radius: radius
  });
  elements.push(corner);
  // lower right
  corner = circle({
    center: [width/2 - radius, height/2 - radius, 0],
    radius: radius
  });
  elements.push(corner);

  // now two rectangles to fill everything
  let rect = rectangle({
    center: [0, 0, 0],
    size: [width, height - 2*radius]
  });
  elements.push(rect);

  rect = rectangle({
    center: [0, 0, 0],
    size: [width - 2*radius, height]
  });
  elements.push(rect);

  // now extrude all elements
  for (let e = 0; e < elements.length; e += 1) {
    elements[e] = extrudeLinear({height: 5}, elements[e]);
  }

  return elements;
};

module.exports = { main };
</pre>