---
title: Funktionen
eleventyNavigation:
  title: Funktionen
  key: de_2d_more_complexity
  parent: de_2d
  order: 9
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

{{video("https://fhpcloud.fh-potsdam.de/s/J7pfTLNaNKxDW89/download/de_2d_functions.mp4", "/images/thumbnails/de_2d_functions.png", "de_2d_functions", translations.subtitles[locale], locale)}}
<!--
dg: https://fhpcloud.fh-potsdam.de/s/nr9iGgoorqojAon
de: https://fhpcloud.fh-potsdam.de/s/J7pfTLNaNKxDW89
en: https://fhpcloud.fh-potsdam.de/s/L9iR9Mbkw4KGHxi
-->

Mit der For-Schleife können wir einfach das selbe Object mehrfach zeichnen. Aber manchmal ist eine einzige For-Schleife nicht ausreichend und dann müssen wir mitunter den selben Code doch an mehreren Stellen schreiben. Um dies zu verhindern, können wir selber eigene Funktionen erstellen, in denen wir wiederkehrenden Code ablegen und dann einfach abrufen können. Ein einfaches Beispiel. Wir wollen vier Schnittmarken in den vier Ecken unserer Zeichenfläche anlegen. Jede Schnittmarke besteht aus zwei Linien, welche wir durch `translate` verschieben:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const margin = 20;
push();
translate(margin, margin);
line(-margin/2, 0, margin/2, 0); // horizontal line
line(0, -margin/2, 0, margin/2); // vertical line
pop();
// repeat the above code 3 more times
```

Anstatt diesen Code nun vier mal, mit unterschiedlichen `translate`-Werten zu schreiben. Können wir statt dessen eine Funktion erstellen:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const margin = 20;

function cropMark () {
  line(-margin/2, 0, margin/2, 0); // horizontal line
  line(0, -margin/2, 0, margin/2); // vertical line
}

push();
translate(margin, margin);
cropMark();
pop();
// repeat the above code 3 more times
```

Genau wie die p5js-Funktionen die wir bereits kennen, können wir diese neue Funktion innerhalb unseres Codes aufrufen. In unserem Beispiel oben haben wir aber immer noch einige Zeilen Code die wir wiederholen müssten, weil wir dort unterschiedliche Parameter für das `translate` angeben müssen. Doch genau wie bei den p5js-Funktionen können wir auch unserer Funktion Parameter übergeben, welche wir dann innerhalb der Funktion nutzen können:

```js
const sketchWidth = 400;
const sketchHeight = 400;
const margin = 20;

function cropMark (x, y) {
  push();
  translate(x, y);
  line(-margin/2, 0, margin/2, 0); // horizontal line
  line(0, -margin/2, 0, margin/2); // vertical line
  pop();
}

cropMark(margin, margin);
cropMark(sketchWidth - margin, margin);
cropMark(sketchWidth - margin, sketchHeight - margin);
cropMark(margin, sketchHeight - margin);
```

Man kann so viele Parameter übergeben wie man möchte.

> Auch hierbei darf man die **Scopes** nicht vergessen. Variablen die innerhalb einer Funktion definiert werden, sind nur dort verfügbar. Globale Variablen sind natürlich auch in Funktionen verfügbar.

Manchmal braucht man keine Funktion die etwas zeichnet, sondern statt dessen etwas berechnet und uns dann den neuen Wert zurückgibt. Hierfür gibt es die Möglichkeit `return` zu nutzen:

```js
function polarX(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  return x;
}

function polarY(radius, angle) {
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return y;
}

point(polarX(20, 45), polarY(20, 45));
```

Wir können nur **einen** Wert zurückgeben, aber es kann **jeder Variablentyp** sein, entsprechend auch ein Array oder Object:

```js
function polar(radius, angle) {
  const x = radius * Math.cos(Math.PI / 180 * angle);
  const y = radius * Math.sin(Math.PI / 180 * angle);
  return {
    'x': x,
    'y': y
  };
}

const p = polar(20, 45);
point(p.x, p.y);
```

> Wenn man komplexere Anwendungen baut, können Funktionen einem nicht nur helfen weniger Code zu schreiben, sondern bestimmte Funktionalitäten auch ins nächste Projekt mitzunehmen und sich so langsam eine eigene Bibliothek an Funktionen aufzubauen.

{{task("Aufgabe: Funktionen", "Schau dir deine bisherigen Experimente an und untersuche wo du deinen eigenen Code durch Funktionen effizienter gestalten könntest.")}}

{{inspiration('Fraktale')}}

Experimentiere mit den verschiedenen Variablen im Editor unten, um untersechiedliche sogenannte L-Trees oder Fraktal-Bäume zu generieren.
Fange mit der `max` Variable an und setze diese auf `2` und erhöhe den Wert dann langsam, um so einen ersten Einblick in das zugrundeliegende System zu erhalten. Vorsicht: wenn du den Wert auf etwas sehr hohes stellst, kann es etwas dauern bis alles gezeichnet ist (lohnt sich aber). Die `max` Variable sollte aber nicht auf einen Wert höher als 20 gesetzt werden (20 Ebenen generieren schon über 1 Millionen Linien).

{{editor('/code/fractals2', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/functions/fractals/sketch.js', true)}}

Auch wenn der Output faszinierend ausseiht, ist der zugrundeliegende Code recht einfach. Wir rufen lediglich die selbe Funktion immer wieder auf. Und innerhalb dieser Funktion ist eine Schleife, welche neue Ansätze generiert und darin wieder die Funktion aufruft. Dank der Transformationen müssen wir die genauen Positionen unserer Linien nicht berechnen, sondern können einfach mit `Translate` und `Rotate` arbeiten. Achtung: bei solchem Code sollte man immer durch z.B. eine maximal Tiefe sicherstellen, dass diese Verschachtelung irgendwann ein Ende findet.