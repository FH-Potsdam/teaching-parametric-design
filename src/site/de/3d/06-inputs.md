---
title: Input
eleventyNavigation:
  title: Input
  key: de_3d_input
  parent: de_3d
  order: 6
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration, link3d, github %}

## Parameter

{{video("https://fhpcloud.fh-potsdam.de/s/5FLGs8gDXWneTE6/download/de_3d_input.mp4", "/images/thumbnails/de_3d_input.png", "de_3d_input", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/5FLGs8gDXWneTE6
en: https://fhpcloud.fh-potsdam.de/s/qwwk7jico9Ek9Ew
-->

Ähnlich zu den Eingabefeldern bei p5js, können wir auch für JSCAD Eingabefelder generieren und diese nutzen, um flexibel unsere Modelle zu manipulieren. Hierfür müssen wir unsere Boilerplate ein wenig anpassen (oder die komplexe Boilerplate nutzen, dort ist der Code bereits angepasst):

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

Die neue Funktion: `getParameterDefinitions` definiert unsere Eingabefelder. Die Funktion gibt ein Object zurück, mit den entsprechenden Definitionen der Eingabefelder. Der `name` eines jeden Eingabefeldes muss eindeutig sein, damit wir darüber später auf dieses Element zugreifen können. Die `caption` steht als Label neben dem Eingabefeld. Das Wichtigste neben dem Namen ist der `type` (`text`, `int`, `float`, `color`, `slider`, `checkbox`, `radio` und `choice`). Mit dem `type:'group'` kann man mehrere Elemente gruppieren. `initial` definiert den Startwert des Inputs.

Hier ein Beispiel aller Input-Typen:

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

{{img('parameters.png', 'Beispiel von Eingabefeldern')}}

{{task('Aufgabe: Parametrisches Objekt', 'Erstelle einen 3D-Körper, bei dem die Parameter sich durch Eingabefelder definieren.')}}

{{inspiration('Parametrischer Rahmen')}}

Die Generierung des Rahmens wird auf allen Dimensionen durch Parameter definiert:

{{link3d('/code/3d/radii', 'Open "Parametrischer Rahmen"')}}

{{img('example3d-params.png', 'Generierung eines 3D-Objekts durch Parameter')}}

{{github('https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/3d/radii')}}