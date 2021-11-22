const jscad = require('@jscad/modeling');

const {sphere, cube} = jscad.primitives;

const main = () => {
  const sphereObj = sphere();
  return sphereObj;  
};

module.exports = { main };