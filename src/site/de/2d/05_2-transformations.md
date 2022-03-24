---
title: Transformations
eleventyNavigation:
  title: Transformations
  key: de_2d_more_complexity
  parent: de_2d
  order: 8
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

{{h2('Verschieben')}}

Wenn man sehr komplexe Layouts erstellt, kann es irgendwann durchaus kompliziert werden, die ganze Offsets und Winkel zu berechnen. Um dieses Problem ein wenig zu umgehen, gibt es in p5js so genannte Transformationen. Mit diesen Transformationen manipuliert man das gesamte Koordinatensystem. Dieses Konzept ist am Anfang ein wenig verwirrend, gibt uns aber großartige Möglichkeiten schnell und einfach Designs zu erstellen. Fangen wir mit der `translate(x, y)` Funktion an. Mit dem `translate()` Kommando, können wir den Nullpunkt/Ursprung (0,0) unseres Koordinatensystems verschieben. 

{{video("https://fhpcloud.fh-potsdam.de/s/9FHm7JK8im2jbp8/download/de_2d_transformations_translate.mp4", "/images/thumbnails/de_2d_transformations_translate.png", "de_2d_transformations_translate", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/9FHm7JK8im2jbp8
en: https://fhpcloud.fh-potsdam.de/s/8mdTinP63eqL4se
-->

{{ definition('translate', [
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'z', type: 'Zahl', optional: true }
]) }}
```js
point(0, 0); // position 0, 0
translate(100, 100);
point(0, 0); // position 100, 100
```

{{h2('Mehrere Transformationen')}}

Transformationen werden von oben nach unten abgearbeitet und werden aufeinander addiert. Die Transformation geht also nicht vom ursprünglichen Zustand aus, sondern von der letzten Transformation:

```js
point(0, 0); // position 0, 0
translate(100, 100);
point(0, 0); // position 100, 100
translate(100, 100);
point(0, 0); // position 200, 200
```

Um einen besseren Überblick zu behalten, können wir den aktuellen Zustand der Transformationen speichern `push()` um dann später zu diesem Zustand wieder zurückzukehren `pop()`:

```js
point(0, 0); // position 0, 0
push();
translate(100, 100);
point(0, 0); // position 100, 100
translate(100, 100);
point(0, 0); // position 200, 200
pop();
point(0, 0); // position 0, 0
```

> push/pop stellen nicht nur Transformationen wieder auf den letzten Zustand zurück, sondern auch die Zeichenstile (wie z.B. Farben). push/pop können auch mehrfach hintereinander/verschachtelt werden.

Neben dem Verschieben des Ursprungs durch `translate()`, können wir unsere Zeichenfläche auch skalieren: `scale(zoomFactor)` oder das Ganze drehen: `rotate(rad)`.

> Gerade bei `scale` und `rotate` darauf achten, dass alles immer um den Mittelpunkt (0/0) herumdreht.

### Beispiel: Polar-Koordinaten

Dies ist z.B. nützlich, wenn man mit dem Polar-Koordinatensystem arbeitet und man dort nicht dauernd alle Positionen einzeln berechnen will:

{{editor('/code/polartranslate', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/transformations/polartranslate/sketch.js')}}

{{h2('Drehen')}}

{{video("https://fhpcloud.fh-potsdam.de/s/Jspak8jQtELyAQa/download/de_2d_transformations_rotate.mp4", "/images/thumbnails/de_2d_transformations_rotate.png", "de_2d_transformations_rotate", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/Jspak8jQtELyAQa
en: https://fhpcloud.fh-potsdam.de/s/9p59bc4W663fp4C
-->

{{ definition('rotate', [
  { name: 'Winkel (radians)', type: 'Zahl' }
]) }}
```js
rotate(Math.PI / 180 * 45); // take angleMode into acount
```

{{h2('Skalieren')}}

{{video("https://fhpcloud.fh-potsdam.de/s/wgSRdgKFSCFgySf/download/de_2d_transformations_scale.mp4", "/images/thumbnails/de_2d_transformations_scale.png", "de_2d_transformations_scale", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/wgSRdgKFSCFgySf
en: https://fhpcloud.fh-potsdam.de/s/AAKPPkFNZKAFS9t
-->

{{ definition('scale', [
  { name: 'Skalierungsfaktor', type: 'Zahl' }
]) }}
```js
scale(2); // 200%
```

{{task("Aufgabe: Schleifen & Translate", "Benutze translate und rotate in einer Schleife und versuche dadurch neuartige Muster zu generieren.")}}

{{inspiration('Muster')}}

{{editor('/code/fractals1', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/transformations/fractals/sketch.js', true)}}