const jscad = require('@jscad/modeling')
const { polyhedron } = jscad.primitives
const { extrudeRectangular, extrudeLinear } = jscad.extrusions
const { translate } = jscad.transforms
const { union, subtract } = jscad.booleans
 
function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return {x, y};
}

const getParameterDefinitions = () => {
  return [
    {name: 'divisions', caption: 'Divisions:', type: 'float', initial: 5},
    {name: 'radius', caption: 'Radius:', type: 'float', initial: 0.1},
    { name: 'group1', type: 'group', caption: 'Group 1: Text Entry' },
    { name: 'text', type: 'text', initial: '', size: 20, maxLength: 20, caption: 'Plain Text:', placeholder: '20 characters' },
    { name: 'int', type: 'int', initial: 20, min: 1, max: 100, step: 1, caption: 'Integer:' },
    { name: 'number', type: 'number', initial: 2.0, min: 1.0, max: 10.0, step: 0.1, caption: 'Number:' },
    { name: 'date', type: 'date', initial: '2020-01-01', min: '2020-01-01', max: '2030-12-31', caption: 'Date:', placeholder: 'YYYY-MM-DD' },
    { name: 'email', type: 'email', initial: 'me@example.com', caption: 'Email:' },
    { name: 'url', type: 'url', initial: 'www.example.com', size: 40, maxLength: 40, caption: 'Url:', placeholder: '40 characters' },
    { name: 'password', type: 'password', initial: '', caption: 'Password:' },
    { name: 'group2', type: 'group', caption: 'Group 2: Interactive Controls' },
    { name: 'checkbox', type: 'checkbox', checked: true, initial: '20', caption: 'Checkbox:' },
    { name: 'color', type: 'color', initial: '#FFB431', caption: 'Color:' },
    { name: 'slider', type: 'slider', initial: 3, min: 1, max: 10, step: 1, caption: 'Slider:' },
    { name: 'choice1', type: 'choice', caption: 'Dropdown Menu:', values: [0, 1, 2, 3], captions: ['No', 'Yes', 'Maybe', 'So so'], initial: 2 },
    { name: 'choice3', type: 'choice', caption: 'Dropdown Menu:', values: ['No', 'Yes', 'Maybe', 'So so'], initial: 'No' },
    { name: 'choice2', type: 'radio', caption: 'Radio Buttons:', values: [0, 1, 2, 3], captions: ['No', 'Yes', 'Maybe', 'So so'], initial: 5 },
    { name: 'group3', type: 'group', initial: 'closed', caption: 'Group 3: Initially Closed Group' },
    { name: 'checkbox2', type: 'checkbox', checked: true, initial: '20', caption: 'Optional Checkbox:' }
   ];
}

const main = (parameters) => {

  const points = [];
  const faces = [];
  const divisions = parameters.divisions;
  const radius = parameters.radius;
  
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
}
 
module.exports = { main, getParameterDefinitions }