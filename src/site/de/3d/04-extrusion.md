---
title: Extrusion
eleventyNavigation:
  title: Extrusion
  key: de_3d_extrusion
  parent: de_3d
  order: 4
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration, link3d, github %}

## Von 2D zu 3D 

Wenn wir ein Objekt in JSCAD verändern, egal ob z.B. durch Extrusion oder Transformation, senden wir das Objekt, welches wir bearbeiten, als letzten Parameter an die entsprechende Funktion. Diese Funktion gibt uns dann eine neue Instanz des manipulierten Objektes zurück, welches wir dann in eine Variable speichern können.

{{h2('Extrudieren')}}

{{video("https://fhpcloud.fh-potsdam.de/s/iWeFYYkP4qx3HTJ/download/de_3d_extrusion_extrude.mp4", "/images/thumbnails/de_3d_extrusion_extrude.png", "de_3d_extrusion_extrude", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/iWeFYYkP4qx3HTJ
en: https://fhpcloud.fh-potsdam.de/s/y5sL6K5kfwW6CfL
-->

```js
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
```

Durch Extrusion wird ein Objekte in eine Richtung / Dimension erweitert.

### ExtrudeLinear

Mit `extrudeLinear` können wir eine Form auf der z-Achse extrudieren `{height: 20}`:

{{img('extrudeLinear.png', 'extrudeLinear Beispiel')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeLinear({height: 20}, circleShape);
```

Man kann die Form während des Extrudierens auch drehen. `twistAngle` gibt an, um wieviel die Form auf dem Weg nach "oben" gedreht werden soll und die `twistSteps` definieren die Anzahl der Zwischenschritte:

{{img('extrudeLinear-1.png', 'extrudeLinear with rotation')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeLinear({
  height: 20,
  twistAngle: Math.PI * 2,
  twistSteps: 12
}, circleShape);
```

Die Rotation verläuft entlang des Mittelpunkts `[0,0,0]`. Wenn ein Objekt nicht am Mittelpunkt verorte ist, verläuft die Drehung mit einem Offset und generiert dadurch ein völlig anderes Objekt:

{{img('extrudeLinear-2.png', 'extrudeLinear with rotation and offset')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 4]
});

const extrudeShape = extrudeLinear({
  height: 20,
  twistAngle: Math.PI * 2,
  twistSteps: 12
}, circleShape);
```

### extrudeRectangular

Ich persönlich finde, man kann sich diese Extrusion am besten vorstellen, als ein Rechteck, welches entlang der Außenlinie der Form entlang fährt und dabei den 3D-Körper generiert:

{{img('extrudeRectangular.png', 'extrudeRectangular example')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeRectangular({
  size: 1,
  height: 1
}, circleShape);
```

### extrudeRotate

Für diese Art der Extrusion, wird die Form um 90 Grad gekippt und dann um den Nullpunkt gedreht. `startAngle` definiert den Startwinkel, `angle` den Zielwinkel:

{{img('extrudeRotate-1.png', 'extrudeRotate example')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 0]
});

const extrudeShape = extrudeRotate({
  angle: Math.PI / 180 * parameters.end,
  startAngle: Math.PI / 180 * parameters.start,
  segments: parameters.segments
}, circleShape);
```

{{video("https://fhpcloud.fh-potsdam.de/s/yj6E3gx63bbPFwp/download/de_3d_operations_extrude_rotate.mp4", "/images/thumbnails/de_3d_operations_extrude_rotate.png", "de_3d_operations_extrude_rotate", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/yj6E3gx63bbPFwp
en: https://fhpcloud.fh-potsdam.de/s/cqc84F3sZP3g5pb
-->

Im ersten Beispiel sitzt die Form genau auf dem Nullpunkt: `[0,0,0]`, deshalb dreht sich die Form um sich selber, ähnlich wie bei `extrudeLinear`. Wenn wir einen Offset hinzufügen, verändert sich die finale Form:

{{img('extrudeRotate-2.png', 'extrudeRotate with an offset example')}}

```js
const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 0, 4]
});

const extrudeShape = extrudeRotate({
  angle: Math.PI / 180 * parameters.end,
  startAngle: Math.PI / 180 * parameters.start,
  segments: parameters.segments
}, circleShape);
```

{{h2('Expand & Offset')}}

```js
const {expand, offset} = jscad.expansions;
```

Im letzten Abschnitt haben wir uns die Extrusionen angeschaut, wodurch eine Form entland einer Ache in einen Körper erweitert wurde. Mit `expand` und `offset` können wir ähnliche Transformationen durchführen.

### Offset

{{video("https://fhpcloud.fh-potsdam.de/s/oMGcyBAiBTB7JQd/download/de_3d_extrusion_offset.mp4", "/images/thumbnails/de_3d_extrusion_offset.png", "de_3d_extrusion_offset", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/oMGcyBAiBTB7JQd
en: https://fhpcloud.fh-potsdam.de/s/KWCPMqMPzf8s6t2
-->

`Offset` können wir mit 2D-Formen nutzen. Hierdurch wird der Umriss der Form um das vorgegebene `delta` versetzt (negative Werte verkleinern die Form). Ähnliche Funktionalitäten kennt man auch aus gängigen Grafikbearbeitungsprogrammen. Beim Vergrößern müssen wir entscheiden, wie mit den Eken umgegangen wird:

{{img('offset.png', 'Offset für eine 2D-Form, mit den unterscheidlichen Eck-Optionen')}}

```js
const rectShape = rectangle({size: [50, 25]});

const offsetShape2 = offset({
  delta: 10,
  corners: 'chamfer'
}, rectShape);

const offsetShape3 = offset({
  delta: 20,
  corners: 'round',
  segments: 20
}, rectShape);

const offsetShape1 = offset({
  delta: 30,
  corners: 'edge'
}, rectShape);
```

### Expand

{{video("https://fhpcloud.fh-potsdam.de/s/8ztZLysdzqbCdq9/download/de_3d_extrusion_expand.mp4", "/images/thumbnails/de_3d_extrusion_expand.png", "de_3d_extrusion_expand", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/8ztZLysdzqbCdq9
en: https://fhpcloud.fh-potsdam.de/s/nDrxii2jHXXxR79
-->

Mit `expand` können wir etwas ähnliches wie bei `offset` auch für 3D-Körper erreichen. In diesem Fall gibt es aber nur die Eck-Option: `'round'`, dafür können wir aber die Anzahl der `segments` definieren und dadurch auch die Form verändern:

{{img('segments.png', 'expand mit unterschiedlichen segments')}}

```js
const rectShape = cuboid({size: [50, 25, 2]});

const offsetShape1 = expand({
  delta: 10,
  segments: 4
}, rectShape); 
```

{{task('Aufgabe: Offset Extrusion', 'Untersuche wie sich die verschiedenen Extrusion-Funktionen in ihrem Output verändern, wenn du die zu extrudierenden Objekte vorher durch translate manipulierst. Erstelle ein Raster mit verschiedenen Varianten.')}}

{{inspiration('Extrudiertes Rechteck mit abgerundeten Ecken')}}

{{link3d('/code/3d/extrude', 'Open "Rounded Rectangle Demo"')}}

{{img('example3d-round.png', 'Das abgerundete Rechteck entsteht durch die Kombination mehrerer Rechtecke und Kreise')}}

{{github('https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/3d/extrude')}}
