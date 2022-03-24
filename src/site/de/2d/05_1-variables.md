---
title: Variablen II
eleventyNavigation:
  title: Variablen I
  key: de_2d_variables2
  parent: de_2d
  order: 7
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, task, inspiration %}

{{h2('Arrays')}}

{{video("https://fhpcloud.fh-potsdam.de/s/qWH96q7N4fnGLTH/download/de_2d_variables2_array.mp4", "/images/thumbnails/de_2d_variables2_array.png", "de_2d_variables2_array", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/qWH96q7N4fnGLTH
en: https://fhpcloud.fh-potsdam.de/s/tYFWZMsrRskSqBf
-->

Umso komplexer unsere Projekte werden, umso mehr Informationen müssen wir irgendwo speichern. Man stelle sich vor, man erstellt eine komplexe Form mit den Vertex-Kommandos und möchte die ganze Koordinaten in Variablen speichern. Dies würde bedeuten, dass man ganz viele Variablen erstellen müsste, was natürlich sehr mühselig wäre. Um dieses Problem zu lösen haben wir JavaScript sogenannte Arrays. Arrays sind ein weiterer Variablentyp. Arrays sind im Grunde einfach Listen, in denen wir mehrere Werte speichern können. Innerhalb Arrays können wir alle anderen Variablentypen ablegen. Auch Arrays selber können in Arrays gespeichert werden, also sozusagen als verschachtelte Listen. Als erstes Beispiel werden wir ein Array mit einer Reihe an Punkten erstellen. Jeder Punkt wird durch ein weiteres Array `[x,y]` repräsentiert:

```js
const points = [
  [0, 0],
  [10, 0],
  [10, 10],
  [0, 10]
];
```

Um ein Element innerhalb eines Arrays abzurufen, können wir dies über eckige Klammern und den Index des jeweiligen Elements machen:

```js
points[0] // [0, 0]
points[0][0] // 0
```

Ganz wichtig: der Index einer Liste beginnt bei **0** und nicht bei **1**. Wir können auch Elemente programmatisch zu einem Array hinzufügen:

```js
const sketchWidth = 400;
const sketchheight = 400;
const points = []; // empty array
for (let p = 0; p < 20; p += 1) {
  points.push([
    Math.random() * sketchWidth,
    Math.random() * sketchHeight
  ]); // adds an element to the end of the array
}
```

{{h2('Array-Beispiele')}}

Im folgenden wird eine zufällige Form erstellt (Array mit zufälligen `[x,y]` Koordinaten). Wir zeichnen dann diese Form mehrfach mit Offset und sich verändernder Transparenz um einen Verlaufseffekt zu generieren:

{{editor('/code/arrayexample', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/arrayexample/sketch.js')}}

> Manchmal wissen wir innerhalb unseres Codes vielleicht gar nicht mehr wie lang unsere Array eigentlich ist und wieviele Elemente in dem Array enthalten sind: `array.length` liefert uns immer die aktuelle Länge des Arrays.

Weitere Informationen zu allem was man mit Arrays anstellen kann, gibt es [hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

{{h2('Objects')}}

{{video("https://fhpcloud.fh-potsdam.de/s/74cqFK4GH2FGKdz/download/de_2d_variables2_objects.mp4", "/images/thumbnails/de_2d_variables2_objects.png", "de_2d_variables2_objects", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/74cqFK4GH2FGKdz
en: https://fhpcloud.fh-potsdam.de/s/DLRECDPmbN3T7RR
-->

Gerade wenn man Arrays verschachtelt, wird es irgendwann verwirrend. Um Elemente etwas strukturierter abzulegen, gibt es die sogenannten "Objects". Objekte sind den Arrays sehr ähnlich, statt einem numerisch-basierten Index gibt es bei Objects Attribute (keys) und denen können wir dann wieder Werte (values) zuordnen, Attributenamen werden einfach als Text (string) definiert:

```js
const point = {
  'x': 0,
  'y': 0
};
```
Um auf die Werte innerhalb eines Objects zuzugreifen, nutzen wir einfach die selbe Schreibweise wie bei den Arrays (nur Text statt Zahl):

```js
point['x'] // 0
```

Es gibt auch noch eine kurze Schreibweise (diese funktioniert allerdings nur, wenn ihr keine Leer- und Sonderzeichen oder Zahlen am Anfang des Attributnamen habt):

```js
point.x // 0
```

Und damit es noch ein bisschen komplexer wird. Wir können auch Objects in Arrays ablegen:

```js
const points = [
  {x: 0, y: 0, vel: [0, 0]},
  {x: 10, y: 0, vel: [1, 0]},
  {x: 10, y: 10, vel: [1, 1]},
  {x: 0, y: 10, vel: [0, 1]}
];

points[1]['vel'][0] // 1
```

### Objects-Beispiele

Ähnlich zum Array-Beispiel, erstelnen wir wieder eine Liste (Array) mit Punkten (x/y). Diesmal speichern wir zusätzlich eine Geschwindigkeit (velocity) mit dem jedem Punkt. Die Geschwindigkeit nutzen wir um die Koordinaten eines jeden Punktes am Ende der Draw-Schleife zu verschieben. Um zu verhindern, dass die Punkte vom Canvas runterlaufen, drehen wir die velocity (*-1) einfach um, sobald die Position außerhalb des Canvas ist:

{{editor('/code/objectexample', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/objectexample/sketch.js')}}

{{h2('Noise')}}

{{video("https://fhpcloud.fh-potsdam.de/s/MNQ3gQzWQyKFpMq/download/de_2d_variables_noise.mp4", "/images/thumbnails/de_2d_variables_noise.png", "de_2d_variables_noise", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/MNQ3gQzWQyKFpMq
en: https://fhpcloud.fh-potsdam.de/s/f4EmxzC38ToxGCb
-->

Wir haben bereits die `random()`-Funktion kennengelernt. Die `noise` Funktion liefert uns ebenfalls Zufallswerte. Wenn unser Sketch gestartet wird, wird für die `noise`-Funktion ein dreidimensionaler Zufallsraum generiert. Aus diesem Raum können wir dann Werte abfragen, indem wir die entsprechenden Koordinaten angeben. Anders als bei `random()`, ist dieser Zufallsraum nicht komplett zufällig, sondern wir finden darin ein "Rauschfeld", mit "weichen" übergängen zwischen den Werten (siehe Visualisierung unten).

{{ definition('noise', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl', optional: true },
  { name: 'z', type: 'Zahl', optional: true }
]) }}
```js
function setup() {
  const noiseValue = noise(0,1.5,1);
}
```

Wenn man ein neues "Rauschfeld" haben möchte, kann man sich mit der `noiseSeed` funktion ein neues Feld generieren lassen:

{{ definition('noiseSeed', [
  { name: 'Seed', type: 'Zahl' }
]) }}
```js
function setup() {
  noiseSeed(5);
}
```

{{editor('/code/noise', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/noise/sketch.js')}}

> Erinnerung: Die weichen Übergänge (Kurven) werden nur sichtbar wenn man nah an das Feld heranzoomt (kleine Werte benutzen).

{{task("Aufgabe: Arrays & Objects", "Versuche ein Array mit Objects in der setup-Funktion zu erstellen und diese anschließend in der draw-Funktion zu nutzen. Gehe dann einen Schritt weiter und versuche einzelne Attribute in den Objekten, innerhalb der draw-Schleife, zu verändern.")}}

{{inspiration('Flug durch die Wolke')}}

{{editor('/code/noiseani', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables2/noiseani/sketch.js', true)}}