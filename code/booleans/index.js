const jscad = require('@jscad/modeling')
const { cuboid, cylinder } = jscad.primitives;
const { subtract, intersect } = jscad.booleans;
const { translate } = jscad.transforms;

function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {x, y};
}

const main = () => {
  const objects = [];
  objects.push(cuboid({size: [50, 50, 1]}));

  for (let c = 0; c < 50; c += 1) {
    objects.push(
      translate(
        [
          -25 + Math.random() * 50,
          -25 + Math.random() * 50,
          0
        ],
        cylinder({ radius: Math.random() * 3, height: 3})
      )
    );
  }

  // for (let c = 0; c < 45; c += 1) {
  //   const pos = polar(c/2, 1080 / 45 * c);
  //   console.log(pos);

  //   objects.push(
  //     translate(
  //       [
  //         pos.x,
  //         pos.y,
  //         0
  //       ],
  //       cylinder({ radius: 1 + c/20, height: 3})
  //     )
  //   );
  // }

  const cheese = intersect([objects[0], objects[1]]);

  return cheese;
};

module.exports = { main };