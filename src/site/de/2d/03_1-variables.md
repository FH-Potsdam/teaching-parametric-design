---
title: Variablen
eleventyNavigation:
  title: Variablen
  key: de_2d_variables
  parent: de_2d
  order: 3
---

{% from "../../_includes/parts/macros.njk" import video, task, inspiration, h2, definition, editor %}

{{video("https://fhpcloud.fh-potsdam.de/s/i3XWqysaaJZSqKS/download/de_variables.mp4", "/images/thumbnails/de_2d_variables_variables.png", "de_2d_variables_variables", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/i3XWqysaaJZSqKS/download/de_variables.mp4
en:https://fhpcloud.fh-potsdam.de/s/pRWC3RCBAkomJQc/download/de_variables.mp4
-->

Manchmal wollen wir bestimmten Informationen in unserem Code mehrfach nutzen, z.B. verschiedene Farb- oder Größenangaben. Dies können wir JavaScript mit sogenannten **Variablen** erreichen. Variablen kann man sich als Container vorstellen, die als Platzhalter für beliebige Informationen stehen, welche wir in ihnen ablegen können. Variablen können wir so immer wieder nutzen und auch nachträglich verändern.

{{h2('Variablentypen')}}

In JavaScript gibt es zwei Möglichkeiten Variablen zu deklarieren:

```js
const sketchWidth = 400;
let colorValue = 200;
```

Mit `const` definieren wir eine "konstante" Variable. Diese Variable können wir später nicht mehr verändern. `let` ist flexibler, diese Variablen können wir später noch verändern und anpassen.

> Wenn du dir nicht sicher bist, was du benutzten sollst, benutze einfach erstmal immer `let`.

Eine Variable in JavaScript ist nicht auf einen bestimmten Typen festgelegt. Dies bedeutet, dass wir nicht im vornherein festlegen müssen, was wir später in dieser Variable ablegen und wir können den Inhalt auch nachträglich ändern (z.B. erst eine Zahl speichern dann einen Text). Fürs erste sind die drei folgenden Typen die wichtigsten für uns (später mehr):

1. Zahl (number)
2. Text (string), nicht die Anführungszeichen vergessen
3. Boolsche Werte (boolean): true / false

> Auch wenn JavaScript Variablen nicht auf bestimmte Typen festlegt (type-sensitive), was toll fürs Prototyping ist, ist dies nicht gut wenn ihr später mal große Projekte schreibt. Guter Code versucht in einer Variable nur einen Typen zu speichern. Dies hat den Vorteil das ihr zu jeder Zeit in eurem Code wisst, dass eine bestimmte Variable z.B. eine Zahl ist.

#### Boolsche Werte

Booleans sind sehr simpel entweder `true` oder `false`. Wir können diese später z.B. für [conditions](03_3-conditions.md) nutzen.

### Variablennamen

Wenn wir unsere Variablen benennen müssen wir auf ein paar Dinge achten:

1. Auf keinen Fall die Namen von Kommandos oder Funktionen benutzen (diese werden sonst überschrieben oder ihr bekommt eine Fehlermeldung).
2. Am einfachsten ist es, wenn ihr die Namen auf Englisch schreibt, damit verhindert ihr Probleme mit deutschen Sonderzeichen (äöüß).
3. Variablennamen dürfen keine Leerzeichen enthalten. Ein Leerzeichen sagt JavaScript, dass danach etwas neues kommt.
4. Ein Variablenname darf nicht mit einer Zahl anfangen.
5. Benutzer nur Buchstaben, Zahlen und _.

In JavaScript benutzen die meisten Entwickler*innen die sogenannte "camel case" 🐪 Schreibweise. Mehrere Wörter werden einfach immer mit einem Großbuchstaben miteinander verbunden:

```js
let colorValue;
let myFirstVariable;
```

> In anderen Programmiersprachen werden ander Schreibweisen genutzt, wie z.B. Python, wo "snake case" 🐍 genutzt wird. Hierbei werden Wörter durch einen Unterstrich miteinander verbunden "_" : `my_first_variable`

{{h2('Variablen nutzen')}}

Sobald wir Variablen definiert haben, können wir diese in unserem Code nutzen und auch verändern:

{{editor('/code/using_variables', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables/using/sketch.js')}}

In dem obigen Beispiel definieren wir die Variable `backgroundColor` in unserem "global scope" (siehe unten), außerhalb von `setup()` und `draw()`, dadurch können wir überall auf die Variable zugreifen. Wir definieren diese mit `let`, so stellen wir sicher, dass wir diese später auch noch bearbeiten können. In `setup()` speichern wir in der Variable `backgroundColor` den Wert **0**. In `draw()` benutzen wir die Variable im `background` Kommando. Danach addieren wir 1 dazu, jedes mal wenn die Draw-Schleife abgeschlossen ist. Hierdurch wird der Wert in unserer Variable immer größer und entsprechend wird auch die Hintergrundfarbe immer heller. Unser Code wird unendlich lange weiterlaufen, p5js interpretiert alle Werte die größer als 255 sind einfach als 255.

> `variable += i` ist kurz für `variable = variable + 1`. Dasselbe funktioniert auch für ander mathematischen Operationen `variable -= 1`

{{h2('Farben & Variablen')}}

Eine Farbe besteht aus mehreren Werten, z.B. RGB + Transparenz. Wir könnten nun alle diese Werte in einzelnen Variablen speichern. Dies wäre aber eine Menge Schreibarbeit, gerade wenn wir mehrere Farben habe. Deshalb gibt gibt es in p5js eine Möglichkeit Farben effizienter zu speichern. Hierzu nutzen wir das `color` Kommando. Dieses gibt uns ein Farb-Objekt zurück, welches wir dann in einer Variable speichern können:

{{ definition('color', [
  { name: 'R', type: 'Zahl' },
  { name: 'G', type: 'Zahl' },
  { name: 'B', type: 'Zahl' },
  { name: 'Transparenz', type: 'Zahl', optional: true }
]) }}
```js
const backgroundColor = color(255, 0, 100, 150);
```

> Man kann die `color` Funktion auch mit anderen Werten benutzen, genauso wie im [letzten Kapitel](02-drawing.md) aufgzeigt.


{{h2('Scopes')}}

{{video("https://fhpcloud.fh-potsdam.de/s/eWosHwNS6ZkDxSe/download/de_scopes.mp4", "/images/thumbnails/de_2d_variables_scopes.png", "de_2d_variables_scopes", translations.subtitles[locale], locale)}}

<!--
de:https://fhpcloud.fh-potsdam.de/s/eWosHwNS6ZkDxSe/download/de_scopes.mp4
en:https://fhpcloud.fh-potsdam.de/s/pqPoc8X82zsY8Mn/download/de_scopes.mp4
-->

Im ersten Abschnitt haben wir `setup()` und `draw()` kennengelernt. Die Kommandos, die zu diesen beiden Funktionen gehören, werden von geschweiften Klammern eingeschloosen `{}`. Solch ein Bereich, der durch diese geschweiften Klammern definiert wird, wird auch Scope genannt. Wir befinden uns hier also im Scope von z.B. der `draw` Funktion. Solche Scopes helfen uns, dass Befehle in diesem Scope nicht mit anderen Kommandos in anderen Bereichen unseres Codes kollidieren. Genau diese Funktionalität führt aber auch zu einem Problem:

```js
// global scope
let colorValue = 0;

function setup () {
  // setup() scope
  let anotherColorValue = 0;
}

function draw () {
  // draw() scope
  background(colorValue); // works
  background(anotherColorValue); // error!!!
}
```

Wir können nur auf Variablen / Kommandos / etc. zugreifen, wenn diese im selben Scope definiert werden oder in einem höheren Scope. Eine einfache Lösung um dieses Problem zu umgehen, ist einfach alles im global scope zu definieren, also der untersten Ebene unserer Script-Datei.

> Man muss vorsichtig sein, wenn man innerhalb eines Scopes eine Variable definiert und eine Variable mit dem selben Namen möglicherweise auch im global scope definiert ist. Denn dann hat man zwei unabhängige Variablen, auch wenn diese den selben Namen haben. Also am besten immer eindeutige Namen einmalig nur verwenden.

{{h2('Zufall')}}

{{video("https://fhpcloud.fh-potsdam.de/s/RNgAQseAJQedsFJ/download/de_random.mp4", "/images/thumbnails/de_2d_variables_random.png", "de_2d_variables_random", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/RNgAQseAJQedsFJ/download/de_random.mp4
en:https://fhpcloud.fh-potsdam.de/s/BcpyHGz7bq5sazY/download/de_random.mp4
-->

Wir benutzen Zahlen um Farben, Positionen und Größen zu definieren. Aber manchmal wollen wir verschiedene Versionen eines Layouts generieren, ohne alle Werte manuell zu definieren. Eine Möglichkeit dies zu erreichen ist das `random` Kommando. Hiermit können wir zufällige Werte zwischen **0** und **1** bzw zwischen **Min** und **Max** generieren:

{{ definition('random', [
  { name: 'Min', type: 'Zahl', optional: true },
  { name: 'Max', type: 'Zahl', optional: true }
]) }}
```js
const backgroundColor = random() * 255;
const otherColor = random(0, 255);
```

> `random()` ist eine p5js Funktion. Wenn du JavaScript ohne p5js benutzt, kannst du einfach `Math.random()` nutzen.

{{task("Aufgabe: Zufall", "Zufällige Werte kann man für alles einsetzen. Versuche Random in den verschiedenen Zeichen-Funktionen zu nutzen die wir bereits gelernt haben.")}}

{{inspiration('Farb Variationen I', 'Führe den Code mehrfach aus, um verschiedene Variationen zu erhalten.')}}

{{editor('/code/randomcolor', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/variables/randomcolor/sketch.js', true)}}