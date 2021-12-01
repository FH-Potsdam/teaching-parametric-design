const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;


const main = () => {
  const cubeShape = cube({size: 5});
  const cubeShape1 = cube({size: 3});
  const sphereShape = sphere({radius: 4});

  const cubes = [];
  const cubes1 = [];
  const cubes2 = [];
  const spheres = [];

  for (let x = 0; x < 6; x +=1){
    for (let y = 0; y < 6; y +=1){
      for (let z = 0; z < 6; z +=1){
      cubes.push(translate(
        [y*15, x*15, z*15],
        cubeShape
      ));

      cubes1.push(translate(
        [y*15 +2, x*15 +2, z*15 +2],
        cubeShape1
      ));

      cubes2.push(subtract(
        translate(
          [y*15, x*15, z*15],
          cubeShape
        ),
        translate(
          [y*15 +2, x*15 +2, z*15 +2],
          cubeShape1
        )
      ));

      }
    }
  }

  for (let x = 0; x < 5; x +=1){ //extra loop for spheres to 9
    for (let y = 0; y < 5; y +=1){
      for (let z = 0; z < 5; z +=1){

        spheres.push(translate(
          [y*15 +7, x*15 +7, z*15 +7],
          sphereShape
        ));

      }
    }
  }

  //const unionShape = subtract([union(cubes), union(cubes1)]);
  

  return [cubes2];
};







module.exports = { main };