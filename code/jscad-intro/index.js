const jscad = require('@jscad/modeling');

const {polyhedron, cuboid} = jscad.primitives;
const {union} = jscad.booleans;

const main = () => {
  function polar(radius, angle) {
    const rad = Math.PI / 180 * angle;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    return {x, y};
  }
  
  const points = [];
  const faces = [];
  const divisions = 5;
  const radius = 50;
    
  for (let d1 = 0; d1 < divisions; d1 += 1) {
    const p1 = polar(radius, 180 / (divisions - 1) * d1);
    for (let d2 = 0; d2 < divisions; d2 += 1) {
      const p2 = polar(p1.y, 360 / divisions * d2);
      points.push([p2.y, p2.x, p1.x]);
    }
  }
  
  let count = 0;
  for (let d1 = 0; d1 < divisions - 1; d1 += 1) {
    for (let d2 = 0; d2 < divisions; d2 += 1) {
      if (d2 === divisions - 1) {
        faces.push([
          count,
          count + 1,
          divisions * d1,
        ]);
        faces.push([
          divisions * (d1 + 2) - 1,
          count + 1,
          count,
        ]);
      } else {
        faces.push([
          count + divisions,
          count + 1,
          count
        ]);
        faces.push([
          count + divisions,
          count + divisions + 1,
          count + 1
        ]);
      }
      count += 1;
    }
  }
  
  let shape = polyhedron({
    points: points,
    faces: faces,
    orientation: 'outward'
  });

  return shape;
};

module.exports = { main };