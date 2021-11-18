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
  const shapes = [
    cube({size: 4}),
    sphere({radius: 2, center: [2, 2, 2]})
  ];
  const scissionShapes = scission(shapes);
  const transformedShapes = [
    translate([0,0,0], scissionShapes[0]),
    translate([0,0,5], scissionShapes[1])
  ];
  return transformedShapes;
};

module.exports = { main, getParameterDefinitions }