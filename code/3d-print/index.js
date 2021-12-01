const jscad = require('@jscad/modeling');
const { polygon, cylinder } = jscad.primitives;
const { extrudeLinear } = jscad.extrusions;
const { translate } = jscad.transforms;
const { union, subtract } = jscad.booleans;
const { colorize } = jscad.colors;

function polarX(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  return x;
}

function polarY(radius, angle) {
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return y;
}

const main = () => {
  const edgeNumStart = 16;
  const edgeLayers = 4;
  const radiusStart = 8;

  const polys = [];

  for (let l = 0; l < edgeLayers; l += 1) {
    const points = [];
    const edges = edgeNumStart - 2 * l;
    for (let p = 0; p < edges; p += 1) {
      points.push([
        polarX(radiusStart - l, 360 / edges * p),
        polarY(radiusStart - l, 360 / edges * p)
      ]);
    }
    points.push([
      polarX(radiusStart - l, 0),
      polarY(radiusStart - l, 0)
    ]);
    const poly = polygon({ points: points });
    const extrudedPoly = extrudeLinear({ height: 1 }, poly);
    const translated = translate([0, 0, l], extrudedPoly);
    polys.push(translated);
  }

  // combine shapes into one
  let combinedPoly = union(polys[0], polys[1]);
  for (let p = 2; p < polys.length; p += 1) {
    combinedPoly = union(combinedPoly, polys[p]);
  }

  const holeCylinder = translate([0,0,0], cylinder({ radius: 3, height: 50 }));

  let finalShape = subtract(combinedPoly, holeCylinder);

  return finalShape;
};
 
module.exports = { main };