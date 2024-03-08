---
title: Conditions
eleventyNavigation:
  title: Conditions
  key: de_2d_conditions
  parent: de_2d
  order: 5
locale: de
layout: default
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

{{h2('Vergleichen')}}

{{video("https://fhpcloud.fh-potsdam.de/s/7857tAkFNXA8Yjb/download/de_conditions.mp4", "/images/thumbnails/de_2d_conditions_conditions.png", "de_2d_conditions_conditions", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/WD8PxgFdpzP7qY3/download/de_conditions.mp4")}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/WD8PxgFdpzP7qY3
de:https://fhpcloud.fh-potsdam.de/s/7857tAkFNXA8Yjb/download/de_conditions.mp4
en:https://fhpcloud.fh-potsdam.de/s/9JQD5NcnFeHERio/download/de_conditions.mp4
-->

Wir haben bereits eine "Condition" bei den Schleifen kennengelernt. Durch die "Condition" haben wir definiert wie lange eine Schleife laufen soll. Es gibt verschiedene Möglichkeiten "Conditions" zu definieren:

|Operator|Beispiel|Erklärung|
|---|---|---|
|===|1 === 1|Genau dasselbe|
|==|1 == '1'|Dasselbe, aber der Variablentyp wird ignoriert.|
|!==|1 != 2 |Nicht dasselbe|
|<|1 < 2|Kleiner als|
|>|2 > 1|Größer als|
|<=|1 <= 2|Kleiner oder gleich|
|>=|2 >= 1|Größer oder gleich|

Wir können mehrere Konditionen mit `&&` (und) oder `||` (oder) kombinieren:

```js
if (a < b && b < c) {
  // do something
}
if (a === b || a === c) {
  // do something else
}
```

{{h2('Beispiele')}}

Wir können "Conditions" nutzen, um bestimmte Befehle auszuführen (z.B. bestimmte Dinge zu zeichnen):

```js
for (let i = 0; i < 10; i += 1) {
  fill("black");
  if (i < 5) { // turn fill to red when i is smaller 5
    fill("red");
  }
  circle(i * 5, i * 5, 5);
}
```

Wenn wir mehrere "Conditions" testen wollen, können wir dies nacheinander tun:

```js
if (i === 1) {
  fill("red");
} else if (i === 2) {
  fill("blue");
} else if (i === 3) {
  fill("green");
} else {
  fill("yellow");
}
```

Mit `else` können wir alle bis dahin nicht erfassten Fälle abgreifen.

In solch einer Liste von `if`-Statements, arbeitet das System von oben nach unten. Sobald eine Condition zutrifft, werden alle anderen `else if`-Statements ignoriert. Wenn man dies umgehen will, muss mehrere `if`-Statements unabhängig voneinander definieren:

```js
if (i < 5) {
  circle(5, 5, 5);
}
if (i < 10) {
  rect(0, 0, 5, 5);
}
```

Im obigen Beispiel wird ein Kreis gezeichnet wenn `i` kleiner 5 ist. Und wenn `i` kleiner 10 `i` ist wird ein Rechteck gezeichnet. Wenn `i` kleiner 5 ist, werden also sowohl ein Rechteck als auch ein Kreis gezeichnet.are draw.

Es gibt eine nützliche Kondition, die uns hilft gerade und ungerade Zahlen voneinander zu unterscheiden:

```js
for (let i = 0; i < 10; i += 1) {
  if (i%2 === 0) {
    fill('red');
  } else {
    fill('green');
  }
}
```

Die obige "Condition" `i%2 === 0` überprüft, ob eine Zahl, wenn diese durch 2 geteilt wird, keinen Rest hinterm Komma als Ergebnis hat. `6/2 = 3 > true`, `5/2 = 2.5 > false`.

{{h2('Scopes (nochmal)')}}

{{video("https://fhpcloud.fh-potsdam.de/s/BdSbeYGttJnTK2K/download/de_scopes2.mp4", "/images/thumbnails/de_2d_conditions_scopes.png", "de_2d_conditions_scopes", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/M3kk5L3qdCXZTM5/download/de_scopes2.mp4")}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/M3kk5L3qdCXZTM5
de:https://fhpcloud.fh-potsdam.de/s/BdSbeYGttJnTK2K/download/de_scopes2.mp4
en:https://fhpcloud.fh-potsdam.de/s/i4n7ETnjWjMqijH/download/de_scopes2.mp4
-->

Scopes betreffen nicht nur Funktionen wie `setup` und `draw`, sondern auch Schleifen und `if`-Statements. Genau wie bei den Funktionen, sobald wir uns innerhalb der geschweiften Klammern befinden `{}`, befinden wir uns auf einem weiteren Scope-Level:

```js
// global scope
function setup () {
  // setup() scope
  for (let i = 0; i < 10; i += 1) {
    // for-loop scope
    if (i < 5) {
      // if scope
    }
  }
}
```

{{task("Aufgabe: Conditions & Zufall", "Generiert euch einen zufälligen Wert in eine Vriable und nutzt diesen Wert dann in einer Serie von if-Statements, um davon abhängig innerhalb einer Schleife unterschiedliche Objekte zu zeichnen.")}}

{{inspiration('Form-Wechsel')}}

{{editor('/code/randomshape', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/conditions/randomshapes/sketch.js', true)}}