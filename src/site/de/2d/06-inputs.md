---
title: Input
eleventyNavigation:
  title: Input
  key: de_2d_more_input
  parent: de_2d
  order: 10
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

Bisher haben wir unsere Parameter immer manuell erstellt oder haben Funktionen wie `random()` genutzt. In dieser nächsten Einheit werden wir uns verscheidene Eingabeverfahren anschauen, um die Parameter unserer Design zu verändern, während diese gezeichnet werden.

{{video("https://fhpcloud.fh-potsdam.de/s/iadtKNALWYK5ySi/download/de_2d_input_input.mp4", "/images/thumbnails/de_2d_input_input.png", "de_2d_input_input", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/iadtKNALWYK5ySi
en: https://fhpcloud.fh-potsdam.de/s/gDGSt2aPMBmpwY5
-->

{{h2('Formulare')}}

Der einfachste Input ist ein Textfeld:

```js
let textField; 

function setup() {
  createCanvas(400, 400);
  textField = createInput('my name'); // default value
  textField.position(0, 400); // position of the input
  textField.size(100); // size of input
}

function draw() {
  background(255);
  text(textField.value(), 20, 20);
}
```

> Dieser Input liefert uns immer einen Textwert (auch wenn das den meisten p5js-Funktionen egal ist, ob es eine Zahl oder Text ist). Wenn man den Wert in eine tatsächliche Zahl umwandeln will: `parseInt(textField.value())` oder `parseFloat(textField.value())`

Manchmal möchte man nicht den Wert direkt nutzen, sondern sobald der Wert sich verändet sollen andere Einstellungen vorgenommen werden:

```js
let myAge = 0;

function setup() {
  createCanvas(400, 400);
  let textField = createInput(myAge);
  textField.position(0, 400); // position of the input
  textField.size(100); // size of input
  textField.input(inputChange);
}

function inputChange() {
  // notice "this.value()" to access the current value
  myAge = parseInt(this.value()) * 365;
}

function draw() {
  background(255);
  text('Age in days: ' + myAge, 20, 20);
}
```

Das Textfeld muss nicht innerhalb der Zeichenfläche liegen. Es ist ein ganz normales HTML-Element und unabhängig von unserer Zeichenfläche. Wenn wir später unsere Zeichenfläche z.B. als Bild exportieren, wird das Textfeld auch nicht mitexportiert.

> Wenn wir das input-Event an eine Funktion schicken, können wir den aktuellen Wert dieses Elements durch `this.value()` abrufen.

Man kann so viele Textfelder hinzufügen wie man möchtet. Neben Textfeldern gibt es auch noch andere Formularfelder:

- [Button](https://p5js.org/reference/#/p5/createButton)
- [Checkbox](https://p5js.org/reference/#/p5/createCheckbox)
- [Dropdown list](https://p5js.org/reference/#/p5/createSelect)
- [Radio-Button](https://p5js.org/reference/#/p5/createRadio)
- [Color Picker](https://p5js.org/reference/#/p5/createColorPicker)
  
Unter den Links gibt es in der Dokumentation weitere Informationen. 

### Slider

{{video("https://fhpcloud.fh-potsdam.de/s/D6aWPfik6JqriHn/download/de_2d_input_slider.mp4", "/images/thumbnails/de_2d_input_slider.png", "de_2d_input_slider", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/D6aWPfik6JqriHn
en: https://fhpcloud.fh-potsdam.de/s/FtaXGCfyZXbFt9M
-->

Ein weiteres Eingabeelement, welches ich an dieser Stelle noch zeigen will, ist der Slider. Wir können es genau wie die anderen Eingabefelder erstellen:

{{ definition('createSlider', [
  { name: 'Min', type: 'Zahl' },
  { name: 'Max', type: 'Zahl' },
  { name: 'Aktueller Wert', type: 'Zahl', optional: true },
  { name: 'Schrittgröße', type: 'Zahl', optional: true }
]) }}
```js
let slider; 

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 200, 50, 10);
  slider.position(0, 400);
  slider.size(100);
}

function draw() {
  background(255);
  circle(200, 200, slider.value());
}
```

{{h2('Maus')}}

{{video("https://fhpcloud.fh-potsdam.de/s/KnTnFYsX8gSGCGy/download/de_2d_input_mouse.mp4", "/images/thumbnails/de_2d_input_mouse.png", "de_2d_input_mouse", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/KnTnFYsX8gSGCGy
en: https://fhpcloud.fh-potsdam.de/s/DwWqSrH3B8dDsgz
-->

Wir können die aktuelle Position der Maus wie folgt abgreifen:

```js
function draw() {
  point(mouseX, mouseY);
}
```

Mit der Maus können wir auch Events auslösen, wodurch Funktionen aufgerufen werden, die wir in unserem Code definieren können:

```js
let counter = 0;
function mouseClicked() {
  counter += 1;
}
```

Andere Maus-Events: `mouseMoved`, `mouseDragged`, `mousePressed`, `mouseReleased`, `mouseClicked`, `doubleClicked`, `mouseWheel`, weitere Details hierzu gibt es in der [Dokumentation](https://p5js.org/reference/#/p5/mouseMoved).


### Beispiele

Im folgenden Beispiel zeichnen wir einfach einen Kreis an der Position wo sich die Maus aktuell befindet. Weil wir den Hintergrund über `background` mit einer leicht transparenten Farbe überzeichnen, kann man die letzten Kreise noch sehen und es entsteht der Effekt eines Schweifs (wenn man die Maus langsam bewegt):

{{editor('/code/mousesimple', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/mousesimple/sketch.js')}}

Im nächsten Beispiel machen wir etwas ähnliches, hierzu überzeichnen wir aber nicht den Hintergrund, sonder fügen die aktuelle Position unserer Maus einem Array hinzu. Damit das Array nicht unendlich groß wird, nutzen wir die Funktion [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) um immer die letzten 20 Elemente unseres Array zu extrahieren und diese dann als neues Array weiterzunutzen.

{{editor('/code/mouse', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/mouse/sketch.js', true)}}

{{h2('Tastatur')}}

{{video("https://fhpcloud.fh-potsdam.de/s/5tjrRi5E3t6Akob/download/de_2d_input_keyboard.mp4", "/images/thumbnails/de_2d_input_keyboard.png", "de_2d_input_keyboard", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/5tjrRi5E3t6Akob
en: https://fhpcloud.fh-potsdam.de/s/c8wXExM8MiF8R5S
-->

Die Tastatur wird ähnlich wie die Maus gehandhabt. Die Tastatur ist besonders praktisch wenn man dadurch ein Event auslösen möchte, um z.B. den aktuellen Zustand als Bild zu exportieren (siehe nächster [Abschnitt](07-export.md)) oder eine Variable zu verändern:

```js
let counter = 0;
function keyPressed() {
  counter += 1;
}
```

Wenn man unterschiedliche Abläufe ausführen möchte, abhängig davon welche Taste gedrückt wird, gibt es die globale Variable `keyCode`. In  `keyCode` ist die ID (Zahl) der zuletzt gedrückten Taste gespeichert. Damit man sich nicht alle Nummern merken muss, hat p5js ein paar Shortcuts, wie z.B. `LEFT_ARROW` und `RIGHT_ARROW`. Diese Shortcuts sind einfach auch globale Variablen, welche mit der Zahl der zugehörigen Taste gefüllt sind, sodass wir uns die für diese häufig genutzten Tasten nicht merken müssen:

```js
let counter = 0;
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    counter -= 1;
  } else if (keyCode === RIGHT_ARROW) {
    counter += 1;
  } else {
    console.log(keyCode);
  }
}
```

> Wenn man sich nicht sicher ist, welcher Taste welchen Code hat, kann man sich den Code auch in der Konsole der Developer Tools einfach ausgeben lassen: `console.log(keyCode);`.

Auch innerhalb unserer Draw-Schleife können wir herausfinden, ob gerade eine Taste gedrükct wird: `keyIsPressed`:

```js
function draw() {
  if (keyIsPressed === true) {
    background(255);
  } else {
    background(0);
  }
}
```

Wenn man die Tastatureingabe nutzt, muss man in der Regel immer erst einmal auf die Seite klicken, damit diese die Tastatur-Events erhält. Dies eine Sicherheitsmaßnahme, damit nicht irgendwelche Webseiten einfach eure Tastaturaktivitäten abgreifen können. Das nächste Beispiel ist eine etwas alberne Demonstration. Clickt auf den schwarzen Canvas und fangt an wild auf eure Tastatur einzutippen:

{{editor('/code/keycolors', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/keycolors/sketch.js')}}

{{h2('GUI')}}

{{video("https://fhpcloud.fh-potsdam.de/s/PQG9LZaK3M5afyG/download/de_2d_input_gui.mp4", "/images/thumbnails/de_2d_input_gui.png", "de_2d_input_gui", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/PQG9LZaK3M5afyG
en: https://fhpcloud.fh-potsdam.de/s/55qdt4ofsqakodd
-->

Unter den Bonus-Seiten gibt es eine [Einführung](../../bonus/gui) in das GUI-Plugin.

{{task("Aufgabe: Inputs", "Fange mit mouseX/mouseY und baue deinen ersten interaktiven Sketch.")}}

{{inspiration('Fractals')}}

Hier ist das selbe Beispiel aus dem letzten Abschnitt, aber nun sind alle Variablen durch Slider ersetzt worden, sodass man die Funktionsweise der Fraktale schnell durch iteratives Experimentieren untersuchen kann. Besonders der vierte und fünfte Slider generieren interessante Ergebnisse.

{{editor('/code/fractals3', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/input/fractals/sketch.js', true)}}