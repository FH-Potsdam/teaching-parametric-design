---
title: Zeichnen II
eleventyNavigation:
  title: Zeichnen II
  key: de_2d_drawing2
  parent: de_2d
  order: 6
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

{{h2('Draw-Schleife')}}

{{video("https://fhpcloud.fh-potsdam.de/s/SyL8FRKWFsbXGrp/download/de_2d_drawing2_drawloop.mp4", "/images/thumbnails/de_2d_drawing2_drawloop.png", "de_2d_drawing2_drawloop", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/SyL8FRKWFsbXGrp
en: https://fhpcloud.fh-potsdam.de/s/tkPJJiC687k2XEp
-->

### Die Draw-Schleife stoppen

Wenn man z.B. zufällige Werte benutzt, dann will man häufig nicht, dass das Design andauernd neugezeichnet wird. Um die Draw-Funktion zu stopppen, gibt es das `noLoop()` Kommando.

```js
function draw() {
  noLoop();
  // your code
}
```

### FrameRate

Normalerweise wird die Draw-Schleife ca. 60x pro Sekunde aufgerufen. Man kann die Geschwindigkeit aber auch verändern:

{{ definition('frameRate', [
  { name: 'Frames pro Sekunde', type: 'Zahl' }
]) }}
```js
function setup() {
  frameRate(10);
}
```

> Die standardmäßge Framerate ist 60fs, complexe Zeichenabfolgen können die reale Framerate aber reduzieren. Für Animation, um diese z.B. in Filmen zu nutzen, sollte mindestens eine Framerate von 24fs erreicht werden.

{{h2('Polygons')}}

{{video("https://fhpcloud.fh-potsdam.de/s/CA4eLGXZigSea9T/download/de_2d_drawing2_vertex.mp4", "/images/thumbnails/de_2d_drawing2_vertex.png", "de_2d_drawing2_vertex", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/CA4eLGXZigSea9T
en: https://fhpcloud.fh-potsdam.de/s/4kcdSTEPGGkRTJo
-->

Nach all den abstrakten JavaScript Basics, zurück zum Zeichnen. Im Abschnitt zu den einfachen Formen, haben wir bereits Kreise, Rechtecke, etc. kennengelernt. All diese Formen bestehen aus Punkten, welche durch Linien verbunden werden und dadurch sogenannte Polygone formen. Die zugrundeliegenden Lininen können wir z.B. auch nutzen um eine Fräse oder einen Laser-Cutter zu kontrollieren. Fangen wir mit der Dekonstruktion eines einfachen Rechtecks an:

```js
rect(0, 0, 40, 20);
point(0,0);
point(40,0);
point(40,20);
point(0,20);
```

Das Rechteck hat vier Eckpunkte. Wir könnten das Rechteck auch manuell erstellen:

{{ definition('vertex', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'z', type: 'Zahl', optional: true }
]) }}
```js
beginShape();
vertex(0, 0);
vertex(40, 0);
vertex(40, 20);
vertex(0, 20);
endShape(CLOSE);
```

Mit dem Befehl `beginShape();` sagen wir p5js, dass wir beginnen wollen eine neue Form zu zeichnen. Danach können wir beliebig viele `vertex(x, y)` Kommandos absetzen. `x` und `y` sind die Koordinaten wo die nächste Linie hingehen soll. Wenn die Form abgeschlossen ist, können wir den Zeichenprozess mit `endShape();` abschließen. Wenn wir bei dieser Funktion `CLOSE` als Parameter übergeben, sagen wir p5js, dass der letzte Punkt mit dem ersten verbunden werden soll. 

> Wenn man komplexere Formen erstellt, sollte man darauf achten, dass die Punkte im Uhrzeigersinn angeordnet sind.

{{h2('Polar Koordinaten')}}

{{video("https://fhpcloud.fh-potsdam.de/s/DM5BjnxQWjfTT2M/download/de_2d_drawing2_polar.mp4", "/images/thumbnails/de_2d_drawing2_polar.png", "de_2d_drawing2_polar", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/DM5BjnxQWjfTT2M
en: https://fhpcloud.fh-potsdam.de/s/Q6E37ZtiE6n8m8y
-->

Eine einfache Form mit dem Polar-Koordinatensystem erstellen:

{{editor('/code/polarsimple', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing2/polarsimple/sketch.js')}}

Verschachtelte Schleifen kombiniert mit dem Polar-Koordinatensystem (siehe auch [extras/Mathe](../../extras/math) für mehr zum Thema Polar-Koordinatensystem):

{{editor('/code/polarcomplex', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing2/polarcomplex/sketch.js')}}

{{h2('Quad & Triangle')}}

Wenn man nur ein Polygon mit drei oder vier Punkten zeichnen möchte, kann man auch `quad` und `triangle` nutzen. Bei diesen beiden Funktionen wird einfach eine Liste an x/y-Paaren übergeben:

{{ definition('quad', [
  { name: 'x1', type: 'Zahl' },
  { name: 'y1', type: 'Zahl' },
  { name: 'x2', type: 'Zahl' },
  { name: 'y2', type: 'Zahl' },
  { name: 'x3', type: 'Zahl' },
  { name: 'y3', type: 'Zahl' },
  { name: 'x4', type: 'Zahl' },
  { name: 'y4', type: 'Zahl' }
]) }}
```js
quad(0, 0, 40, 0, 40, 20, 0, 20);
```

{{ definition('triangle', [
  { name: 'x1', type: 'Zahl' },
  { name: 'y1', type: 'Zahl' },
  { name: 'x2', type: 'Zahl' },
  { name: 'y2', type: 'Zahl' },
  { name: 'x3', type: 'Zahl' },
  { name: 'y3', type: 'Zahl' }
]) }}
```js
triangle(0, 0, 40, 0, 40, 20);
```

{{h2('Kurven')}}

{{video("https://fhpcloud.fh-potsdam.de/s/e5Cka4Jfj2b4iXA/download/de_2d_drawing2_curves.mp4", "/images/thumbnails/de_2d_drawing2_curves.png", "de_2d_drawing2_curves", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/e5Cka4Jfj2b4iXA
en: https://fhpcloud.fh-potsdam.de/s/yQrpytWzYHDsNFB
-->

Wenn wir mal als nur gerade Linien in unseren Formen haben wollen, können wir auch Kurven zeichnen. Hierfür stehen uns drei verschiedene Kurven-Funktionen zur verfügung:

{{ definition('curve', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' }
]) }}
```js
beginShape();
curveVertex(0, 0);
curveVertex(40, 0);
curveVertex(40, 20);
curveVertex(0, 20);
endShape(CLOSE);
```

`curveVertex` ist die einfachste Funktion, da hier die Kurven für uns generiert werden. Mit `bezierVertex` und `quadraticVertex` müssen wir die Kurven selber durch Kontrollpunkte konstruieren (ähnlich wie es auch in Grafik-Bearbeitungsprogrammen der Fall ist):

{{ definition('quadraticVertex', [
  { name: 'Kontrollpunkt-x', type: 'Zahl' },
  { name: 'Kontrollpunkt-y', type: 'Zahl' },
  { name: 'Ziel-x', type: 'Zahl' },
  { name: 'Ziel-y', type: 'Zahl' }
]) }}
```js
beginShape();
vertex(0, 0); // we need to add a startpoint
quadraticVertex(20, 20, 40, 0);
endShape();
```

`quadraticVertex` nimmt vier Parameter, die ersten beiden x-, y-Koordinaten sind der Kontrollpunkt und das zweite Paar sind der Zielpunkt der Kurve. `bezierVertex` nimmt noch einen weiteren Kontrollpunkt, um sowohl den Anfang, als auch das Ende der Kurve unabhängig manipulieren zu können:

{{ definition('bezierVertex', [
  { name: 'Start-Kontrollpunkt-x', type: 'Zahl' },
  { name: 'Start-Kontrollpunkt-y', type: 'Zahl' },
  { name: 'End-Kontrollpunkt-x', type: 'Zahl' },
  { name: 'End-Kontrollpunkt-y', type: 'Zahl' },
  { name: 'Ziel-x', type: 'Zahl' },
  { name: 'Ziel-y', type: 'Zahl' }
]) }}
```js
beginShape();
vertex(0, 0); // we need to add a startpoint
bezierVertex(10, 20, 30, 20, 40, 0);
endShape();
```

Am Anfang kann das Arbeiten mit Kurven verwirrend sein, wo genau die Kontrollpunkte positioniert werden müssen. Hier kann es helfen, wenn man sich die Punkte zusätzlich aufzeichnet, um ein besseres Gefühl für die Kurvenberechnung zu bekommen (verändere die Kontrollpunkte und beobachte wie sich die Kurven verändern):

{{editor('/code/controlpoints', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing2/controlpoints/sketch.js')}}

{{task("Aufgabe: Polygon", "Erstelle ein Polygon und versuche mit den verschiedenen Vertex-Kommandos zu arbeiten (Kurven).")}}

{{inspiration('Chaotische Kurven')}}

{{editor('/code/growingcurve', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/drawing2/growingcurve/sketch.js', true)}}