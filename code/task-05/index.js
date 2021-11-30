const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const elipse = [
    ellipsoid({
      radius: [3, 5, 3],
      segments: 32
    }),
    ellipsoid({
      radius: [2.7, 4.7, 2.7],
      segments: 32
    }),
  ];

  const holes = [];
  const countHoles = 4;


  for (let i = 0; i < countHoles; i++) {
    for (let j = 0; j < countHoles; j++) {
      obj = rotate(
        [0, Math.PI * 2 / (countHoles * 2) * i + (j + Math.PI * 4), 0], 
        cylinder({
          height: 8,
          radius: 0.8,
          segments: 6
      }))

      obj = translate(
        [0, -2.5-0.4 + 2 * j, 0],
        obj
      )

      holes.push(obj)
    }
  }

  const shapes = [elipse, holes]

  const cutOut = subtract(shapes)

  return rotate(
    [Math.PI * 2 / 4, 0, 0],
    cutOut
  )
};

module.exports = { main };