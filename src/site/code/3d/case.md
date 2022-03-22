---
title: "case"
permalink: "/code/3d/case/index.js"
---
<pre>
const jscad = require('@jscad/modeling')
const io = require('@jscad/io')

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus, polygon, polyhedron} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {offset, expand} = jscad.expansions;
const {translate, rotate, scale, center, align} = jscad.transforms;

const { svg, stl } = io.deserializers;

const params = {
  board: {
    width: 85,
    height: 56,
    screws: [
      [3.5, 3.5],
      [3.5, 52.5],
      [61.5, 3.5],
      [61.5, 52.5]
    ]
  },
  case: {
    wall: 2,
    offset: 5,
    height: 20,
    screwHeight: 5,
    screwInnerRadius: 0.5,
    screwOuterRadius: 2,
    portRadius: 4
  }
};

const main = () => {
  // we will reuse the base for cover and body
  let base = rectangle({
    size: [
      params.board.width + params.case.wall + params.case.offset,
      params.board.height + params.case.wall + params.case.offset
    ]
  });

  // first we build the cover
  let cover = extrudeLinear({
    height: params.case.wall
  }, base);

  let coverInset = offset({
    delta: -params.case.wall
  }, base);
  coverInset = extrudeLinear({
    height: params.case.wall * 2
  }, coverInset);

  cover = union(cover, coverInset);
  cover = translate([0, params.board.height + params.case.offset + params.case.wall + 50, 0], cover);

  // next the case
  const bodyHeight = params.case.height + params.case.wall * 2 + params.case.offset * 2;

  let caseBody = extrudeLinear({
    height: bodyHeight
  }, base);

  // create the inner space
  let inner = offset({
    delta: -params.case.wall
  }, base);
  inner = extrudeLinear({
    height: bodyHeight
  }, inner);
  inner = translate([0, 0, params.case.wall], inner);

  // cut out the inner from the body
  caseBody = subtract([caseBody, inner]);

  // creating the screw sockets
  for (let s = 0; s < params.board.screws.length; s += 1) {
    let cyl = cylinder({
      height: params.case.screwHeight,
      radius: params.case.screwOuterRadius
    });

    let socket = cylinder({
      height: params.case.screwHeight,
      radius: params.case.screwInnerRadius
    });

    cyl = subtract([cyl, socket]);
    console.log(params.board.screws[s]);
    cyl = translate([
      // the case is centered
      // so we need to move to the upper left
      // and then add the screw positions
      -params.board.width / 2 + params.board.screws[s][0],
      -params.board.height / 2 + params.board.screws[s][1],
      params.case.wall*2
    ], cyl);

    caseBody = union(caseBody, cyl);
  }

  // last we punch a whole for cables through one end
  let hole = cylinder({
    height: params.case.wall * 2,
    radius: params.case.portRadius
  });

  hole = rotate([0, Math.PI / 180 * 90, 0], hole);
  hole = translate([
    params.board.width / 2 + params.case.offset - params.case.wall,
    0,
    bodyHeight / 2
  ], hole);

  caseBody = subtract(caseBody, hole);

  return [caseBody, cover];
};

module.exports = { main };
</pre>