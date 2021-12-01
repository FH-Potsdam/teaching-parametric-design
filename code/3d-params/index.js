const jscad = require('@jscad/modeling');

const {polyhedron, cuboid} = jscad.primitives;
const {union} = jscad.booleans;

const main = () => {
  const rectHeight = 10;
  const stepSize = 10;
  const numPoints = 41;
  const maxHeight = 50;
  const width = 300;
  const points = [];
  const faces = [];

  for (let p = 0; p < numPoints; p += 1) {
    const y = p * stepSize;
    let z1 = 0;
    let z2 = 0;
    if (p%2 !== 0) {
      z1 = Math.random() * maxHeight;
      z2 = Math.random() * maxHeight;
    }
    points.push([0, y, z1]);
    points.push([width, y, z2]);
  }

  // faces of the sides
  for (let p = 0; p < points.length - 4; p += 4) {
    faces.push([
      p, p+2, p + 4
    ]);
    faces.push([
      p+5, p+3, p + 1
    ]);
  }

  // bottom
  for (let p = 0; p < points.length - 2; p += 4) {
    faces.push([
      p + 4, p + 1, p
    ]);
    faces.push([
      p + 1, p + 4, p + 5 
    ]);
  }

  // top
  for (let p = 0; p < points.length - 2; p += 2) {
    faces.push([
      p, p + 1, p + 2
    ]);
    faces.push([
      p + 3, p + 2, p + 1 
    ]);
  }

  let shape = polyhedron({
    points: points,
    faces: faces,
    orientation: 'outward'
  });

  let rect = cuboid({
    size: [width, stepSize * numPoints, rectHeight],
    center: [width / 2, stepSize * numPoints / 2, -rectHeight/2]
  });
  return union([rect, shape]);
};

module.exports = { main };