---
title: Input
eleventyNavigation:
  title: Input
  key: de_3d_input
  parent: de_3d
  order: 6
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from "../../_includes/parts/macros.njk" import img %}

## Parameters

<video width="1920" height="1080" style="max-width:100%; height: auto;" controls>
  <source src="https://fhp-video-hosting.s3.eu-central-1.amazonaws.com/07-3d-adv/parameters.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Similar to the various inputs in p5js, we can also create a list of inputs to helps us build parametric designs, that we can modify while rendering. To get started with inputs, we need to extend our boilerplat:

```js
const jscad = require('@jscad/modeling');
const {cube} = jscad.primitives;

const getParameterDefinitions = () => {
  // here we return the definitions of our parameters
  return [
    {name: 'size', caption: 'Size:', type: 'float', initial: 5},
  ];
};

// the main function now receives a parameters object
const main = (parameters) => {
  // from parameters we get all the inputs
  const cubeObject = cube({size: parameters.size});
  return cubeObject;
}

// for it to work, we also need to export the new getParameterDefinitions function
module.exports = { main, getParameterDefinitions }
```

In the `getParameterDefinitions` function we define all the inputs we need. The `name` of each input must be unique, and we use it later to retrieve it from the parameters object. The `caption` is the text written in the interface next to the input. The most import `type`s are `text`, `int`, `float`, `color`, `slider`, `checkbox`, `radio` and `choice`. With `type:'group'` your can group multiple inputs. Use it before a new group starts. The `initial` value is the value when the application starts, before you change the input.

Here is an example with all input types:

```js
const getParameterDefinitions = () => {
  return [
    { name: 'radius', type: 'float', caption: 'Radius:', initial: 0.1 },
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
```

<img src="./assets/parameters.png" alt="" style="max-width:100%; display:block; margin: 0 auto;" />