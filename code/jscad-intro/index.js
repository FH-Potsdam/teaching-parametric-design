const jscad = require('@jscad/modeling');
const {cube} = jscad.primitives;

const getParameterDefinitions = () => {
  return [
    {name: 'width', caption: 'Width:', type: 'float', initial: 15},
    {name: 'height', caption: 'Hidth:', type: 'float', initial: 15}
   ];
};

const main = (parameters) => {
  const cubeObject = cube({ size: parameters.width });
  return cubeObject;
};

module.exports = { main, getParameterDefinitions }