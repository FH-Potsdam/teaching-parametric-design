const jscad = require('@jscad/modeling');
const {circle, rectangle, sphere, cube} = jscad.primitives;
const {extrudeRotate} = jscad.extrusions;
const {center, align, translate} = jscad.transforms;
const {union, subtract, intersect, scission} = jscad.booleans;

const getParameterDefinitions = () => {
  return [
    {name: 'start', caption: 'start:', type: 'float', initial: 0},
    {name: 'end', caption: 'end:', type: 'float', initial: 360},
    {name: 'segments', caption: 'segments:', type: 'float', initial: 3}
   ];
};

const main = (parameters) => {
  const cubeShape = cube({size: 4});
  const sphereShape = sphere({radius: 2, center: [2, 2, 2]});

  const cut1 = subtract([cubeShape, sphereShape]);
  const cut2 = subtract([sphereShape, cubeShape]);
  const unionShape = union([
    translate([0,0,0], cut1),
    translate([0,0,5], cut2)
  ]);

  const scissionShapes = scission(unionShape);
  return scissionShapes[0];
};

module.exports = { main, getParameterDefinitions }