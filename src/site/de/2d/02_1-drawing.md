---
title: Zeichnen I 
eleventyNavigation:
  title: Zeichnen I
  key: de_2d_drawing
  parent: de_2d
  order: 2
locale: de
layout: default
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, task, inspiration %}

{{h2('Zeichenfläche')}}

{{video("https://fhpcloud.fh-potsdam.de/s/7Rif9aTymHobY5R/download/de_canvas.mp4", "/images/thumbnails/de_2d_drawing_canvas.png", "de_2d_drawing_canvas", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/esksLoj87XJpjCG/download/de_canvas.mp4")}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/esksLoj87XJpjCG
de:https://fhpcloud.fh-potsdam.de/s/7Rif9aTymHobY5R/download/de_canvas.mp4
en:https://fhpcloud.fh-potsdam.de/s/CjcYw4HxyPokZWo/download/de_canvas.mp4
-->

Als erstes müssen wir unsere Zeichenfläche erstellen (canvas). Hierzu haben wir das `createCanvas` Kommando, welches wir in der **setup** Funktion ausführen können. Alle Größenangaben in p5js sind immer in Pixel:

{{ definition('createCanvas', [
  { name: 'Breite', type: 'Zahl' },
  { name: 'Höhe', type: 'Zahl' }
]) }}

```js
function setup() {
  createCanvas(400, 400);
}
```

> Wenn du ein Kommando abgeschlossen hast, vergesse nicht das Semikolon nach der runden Klammer.


{{h2('Hintergrund')}}

{{video("https://fhpcloud.fh-potsdam.de/s/8YfsfmB4jRf2RCY/download/de_background.mp4", "/images/thumbnails/de_2d_drawing_background.png", "de_2d_drawing_background", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/DcGNX6MzHJFcdYY/download/de_background.mp4")}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/DcGNX6MzHJFcdYY
de:https://fhpcloud.fh-potsdam.de/s/8YfsfmB4jRf2RCY/download/de_background.mp4
en:https://fhpcloud.fh-potsdam.de/s/tiaKGpCJWtZGwCi/download/de_background.mp4
-->

Zu Beginn ist eure Zeichenfläche leer. Wir können unserer Zeichenfläche eine vollflächige Füllung geben. Hierfür nutzen wir das  `background` Kommando zu Beginn der `draw` Funktion:

{{ definition('background', [
  { name: 'Füllung', type: 'Farbe' }
]) }}
```js
function draw() {
  background(220);
}
```

Die `background` Funktion unterscheides sich dahingehend von der `createCanvas` Funktion, dass wir unterschiedliche Werte als *Farbe* angeben können (siehe nächster Abschnitt).

{{h2('Farben')}}

{{video("https://fhpcloud.fh-potsdam.de/s/5WJa8y7Yqc29sXd/download/de_colors.mp4", "/images/thumbnails/de_2d_drawing_colors.png", "de_2d_drawing_colors", translations.subtitles[locale], locale,"https://fhpcloud.fh-potsdam.de/s/97WYwp4Ng6GcBgW/download/de_colors.mp4")}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/97WYwp4Ng6GcBgW
de:https://fhpcloud.fh-potsdam.de/s/5WJa8y7Yqc29sXd/download/de_colors.mp4
en:https://fhpcloud.fh-potsdam.de/s/wYTfzgFEwB92xSN/download/de_colors.mp4
-->

In p5js können wir Farben auf unterschiedliche Art definieren:

1. Graustufen: Eine Zahl zwischen 255 (weiß) und 0 (schwarz)
```js
background(150);
```

2. Rot, Grün, Blau (RGB): Drei Zahlen von 0 bis 255
```js
background(255, 0, 0);
```

3. CSS-Farben: [Name](https://www.w3.org/wiki/CSS/Properties/color/keywords) der Farbe
```js
background('red');
```
> JavaScript geht bei allem Text den wir schreiben immer davon aus, dass es sich hierbei um Kommandos handelt. Damit wir z.B. der `background` Funktionen einen wirklichen *Text* (string) übergeben können, müssen wir den *Text* in Anführungszeichen setzen. Ihr könnt dafür dopplte oder einfach Anführungszeichen nutzen, wichtig ist nur, dass am Anfang und Ende die selben Anführungszeichen stehen.

4. Hexadezimal RGB: HEX-Text
```js
background('#ff0000');
```

5. RGB + Alpha (Transparenz): rgba als Text, Alpha liegt hier zwischen 0 and 1
```js
background('rgba(255,0,0,0.5)');
```

> JavaScript nutze Englische Zahlen, deshalb müssen wir einen Punkt und kein Komma nutzen.<br />Deutsch: 0,5 > Englisch: 0.5

Dies sind die wichtigsten Farbangaben, welche wir nutzen werden. Darüber hinaus gibt es aber noch weitere Möglichkeiten, die ihr in der [Dokumentation](https://p5js.org/reference/#/p5/background) findet.

{{h2('Formen')}}

{{video("https://fhpcloud.fh-potsdam.de/s/t6pWTGAY4m6KHTs/download/de_shapes.mp4", "/images/thumbnails/de_2d_drawing_shapes.png", "de_2d_drawing_shapes", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/tdCmCzHmss6PjBY/download/de_shapes.mp4")}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/tdCmCzHmss6PjBY
de:https://fhpcloud.fh-potsdam.de/s/t6pWTGAY4m6KHTs/download/de_shapes.mp4
en:https://fhpcloud.fh-potsdam.de/s/rJa6ZHe5e2oKPYg/download/de_shapes.mp4
-->

In der p5js werden diese einfachen Formen auch als *2D primitives* beschrieben. Alle Formen werden in dem Koordinatensystem unserer Zeichenfläche erstellt. Der Ursprung unseres Koordinatensystems liegt in der oberen linken Ecke (0/0). Die Einheit aller Zahlen sind immer Pixel.

### Punkt

{{ definition('point', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' }
]) }}
```js
point(20, 20);
```
> Ein Punkt hat keinen Radius. Um die größe eines Punktes zu vergrößern, müssen wir den **strokeWeight** erhöhen (siehe unten).


### Linie

{{ definition('line', [
  { name: 'x1', type: 'Zahl' },
  { name: 'y1', type: 'Zahl' },
  { name: 'x2', type: 'Zahl' },
  { name: 'y2', type: 'Zahl' }
]) }}
```js
line(10, 10, 40, 40);
```


### Ellipse

{{ definition('ellipse', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'Breite', type: 'Zahl' },
  { name: 'Höhe', type: 'Zahl' }
]) }}
```js
ellipse(20, 20, 5, 10);
```
> **x** und **y** beschreiben bei Ellipse und Kreis nicht die obere-rechte Ecke sondern den Mittelpunkt

### Kreis

{{ definition('circle', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'Durchmesser', type: 'Zahl' }
]) }}
```js
circle(20, 20, 5);
```

### Rechteck

{{ definition('rect', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'Breite', type: 'Zahl' },
  { name: 'Höhe', type: 'Zahl' }
]) }}
```js
rect(10, 10, 40, 20);
```

### Quadrat

{{ definition('square', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'Größe', type: 'Zahl' }
]) }}
```js
square(10, 10, 40);
```

{{editor('/code/shapes', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/shapes/sketch.js')}}

{{h2('Füllungen & Linien')}}

{{video("https://fhpcloud.fh-potsdam.de/s/5xTn45W62CKkwsQ/download/de_fills.mp4", "/images/thumbnails/de_2d_drawing_fills.png", "de_2d_drawing_fills", translations.subtitles[locale], locale)}}
<!--
dg:MISSING
de:https://fhpcloud.fh-potsdam.de/s/5xTn45W62CKkwsQ/download/de_fills.mp4
en:https://fhpcloud.fh-potsdam.de/s/WmMdRoixoGNeXxd/download/de_fills.mp4
-->

Code wird in allen Programmiersprachen immer von oben nach unten ausgeführt. p5js hat Standardeinstellungen für Farben: Füllungen und Linien sind immer schwarz. Wir können die Einstellungen für Farben und Linien jederzeit ändern. Nachdem wir z.B. die Füllung ändern, werden alle Formen die wir *danach* zeichnen mit den neuen Einstellungen gezeichnet.

{{ definition('fill', [
  { name: 'Füllung', type: 'Farbe' }
]) }}
```js
fill(255, 0, 0);
```

> **stroke** und **fill** akzeptieren die selben Parameter wie das **background** Kommando.

{{ definition('stroke', [
  { name: 'Linienfarbe', type: 'Farbe' }
]) }}
```js
stroke(255, 0, 0);
```

Neben den Farben können wir auch die Linienstärke verändern:

{{ definition('strokeWeight', [
  { name: 'Linienstärke', type: 'Zahl' }
]) }}
```js
strokeWeight(5);
```

{{editor('/code/fill', '[https://...](https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/fill/sketch.js)')}}

{{h2('Kreisbögen')}}

{{video("https://fhpcloud.fh-potsdam.de/s/HSkH336q6pXXP3b/download/de_arc.mp4", "/images/thumbnails/de_2d_drawing_arc.png", "de_2d_drawing_arc", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/oDGZqZzLLkHNyKT/download/de_arc.mp4")}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/oDGZqZzLLkHNyKT
de:https://fhpcloud.fh-potsdam.de/s/HSkH336q6pXXP3b/download/de_arc.mp4
en:https://fhpcloud.fh-potsdam.de/s/3erXfj7WFcyF27t/download/de_arc.mp4
-->

Eine etwas kompliziertes Kommando ist der Kreisbogen (arc):

{{ definition('arc', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'Breite', type: 'Zahl' },
  { name: 'Höhe', type: 'Zahl' },
  { name: 'Anfangswinkel', type: 'Zahl' },
  { name: 'Endwinkel', type: 'Zahl' },
  { name: 'Kreisbogen-Modus', type: 'OPEN, PIE, CHORD' }
]) }}
```js
arc(100, 100, 50, 50, 0, Math.PI, OPEN);
```

> Die Winkel werden standardmäßig nicht in Grad sondern in Radians angegeben. 360 Grad sind `2 * Math.PI`. Ein einfacher Weg sich Gradzahlen umzuwandeln ist:<br />`Math.PI / 180 * YOUR_ANGLE`.

{{editor('/code/arc', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/arc/sketch.js')}}

{{task("Aufgabe: Abstrakte Kunst", "Nutze nur die Kommandos die wir bisher gelernt haben, um ein abstraktes Kunstwerk zu erstellen. Siehe das Beispiel unten als Inspiration. Schaue dir auch die Inspirationsseite an für weitere Künstler*innen <a href='/de/inspiration'>page</a>.")}}

{{inspiration('Hilma af Klint')}}

{{editor('/code/klint', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing/klint/sketch.js', true)}}