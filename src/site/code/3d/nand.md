---
title: "nand"
permalink: "/code/3d/nand/index.js"
---
<pre>const jscad = require('@jscad/modeling')

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus, polygon, polyhedron} = jscad.primitives;
const {slice, extrudeRectangular, extrudeLinear, extrudeRotate, extrudeFromSlices} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {offset, expand} = jscad.expansions;
const {translate, rotate, scale, center, align} = jscad.transforms;
const {geom2} = jscad.geometries;
const {mat4} = jscad.maths;

const data = [5,4,2,1,4,7,9,10,3,4,5,7,12,15,10,6,5,3,2,1];
const params = {
  width: 100,
  height: 10,
  base: {
    height: 3,
    offset: 2,
    growth: 2
  }
};

const main = () => {
  // first draw the polygon for the area chart
  const polyPoints = [[0,0]];
  for (let d = 0; d < data.length; d += 1) {
    polyPoints.push([
      params.width / (data.length - 1) * d,
      data[d]
    ]);
  }
  polyPoints.push([params.width, 0]);
  let poly = polygon({
    points: polyPoints.reverse()
  });
  poly = extrudeLinear({
    height: params.height
  }, poly);
  poly = rotate([Math.PI / 180 * 90, 0, 0], poly);
  poly = translate([-params.width / 2, params.height / 2, 0], poly);

  // base plate
  let base = rectangle({
    size:[
      params.width + params.base.offset,
      params.height + params.base.offset
    ]
  });

  base = extrudeFromSlices({
    numberOfSlices:2,
    callback: (progress) => {
      const rect = rectangle({
        size:[
          (params.width + params.base.offset)  + (params.base.growth * progress),
          (params.height + params.base.offset) + (params.base.growth * progress)
        ]
      })
      let newSlice = slice.fromSides(geom2.toSides(rect));
      newSlice = slice.transform(
        mat4.fromTranslation(
          mat4.create(),
          [0, 0, progress * params.base.height]
        ),
        newSlice
      );
      return newSlice;
    },
  });

  base = rotate([Math.PI, 0, 0], base);
  base = colorize([1, 0, 0], base);

  return [poly, base];
};

module.exports = { main };
</pre>