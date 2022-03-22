---
title: "radii"
permalink: "/code/3d/radii/index.js"
---
<pre>
const jscad = require('@jscad/modeling');

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus, polygon, polyhedron} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {offset, expand} = jscad.expansions;
const {translate, rotate, scale, center, align} = jscad.transforms;

const getParameterDefinitions = () => {
  return [
    {
      name: 'radius',
      caption: 'Radius:',
      type: 'float',
      initial: 10
    },
    {
      name: 'width',
      caption: 'Width:',
      type: 'float',
      initial: 50
    },
    {
      name: 'height',
      caption: 'Height:',
      type: 'float',
      initial: 100
    },
    {
      name: 'inset',
      caption: 'Inset:',
      type: 'float',
      initial: 10
    },
    {
      name: 'radiPercentage',
      caption: 'Percentage inner Radius:',
      type: 'float',
      initial: 0.8
    },
    {
      name: 'extrude',
      caption: 'Extrude-Height:',
      type: 'float',
      initial: 10
    }
  ];
};

function roundRectangle (width, height, radius) {
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

  return union(elements);
}

const main = (parameters) => {
  const rect = roundRectangle(
    parameters.width,
    parameters.height,
    parameters.radius
  );
  const extrRect = extrudeLinear({
    height: parameters.extrude
  }, rect);

  const smRect = roundRectangle(
    parameters.width - parameters.inset,
    parameters.height - parameters.inset,
    parameters.radius * parameters.radiPercentage
  );
  const smExtrRect = extrudeLinear({
    height: parameters.extrude
  }, smRect);

  return subtract([extrRect, smExtrRect]);
};

module.exports = { main, getParameterDefinitions };
</pre>