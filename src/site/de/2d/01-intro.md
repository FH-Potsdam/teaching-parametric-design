---
title: Einführung
eleventyNavigation:
  title: Intro
  key: de_2d_intro
  parent: de_2d
  order: 1
---

{% from "../../_includes/parts/macros.njk" import video, task, h2, definition, img %}

{{h2('p5js')}}

{{ img('p5js-logos.png', 'Logos von p5js (JavaScript) und der Java Processing ide / library.') }}

Um unsere code-basierten Design-Werkzeuge zu erstellen, nutzen wir das JavaScript framework [p5js](https://www.p5js.org). p5js ist ein Ableger des Java basierten [Processing-Systems](https://processing.org/). Warum sollte ich JavaScript lernen? Benutzt man JavaScript nicht um Webseiten zu bauen? Ja und nein. JavaScript wurde ursprünglich dazu eingesetzt Webseiten interaktiv zu machen (und wird es auch immer noch). Aber seit dem ist auch NodeJS erschienen. NodeJS erlaubt es uns auch Software zu schreiben, die unabhängig von einem Browser auf unserem Computer ausgeführt wird. Dadurch ist JavaScript sehr vielseitig einsetzbar. Man kann so z.B. auch mit JavaScript Dateien auf dem eigenen Rechner öffnen, erstellen und bearbeiten. Außerdem bietet JavaScript in Kontrast zu anderen Programmiersprachen einen einfachen Einstieg und ist sehr "flexibel" (erfahrene Programmier*innen mögen JavaScript wegen seiner "Flexibilität" häufig nicht, aber für den Einstieg ist dies super).

Es gibt viele Frameworks / Libraries / Packages für JavaScript. Diese Werkzeuge sind Sammlungen von sogenannten Funktionen/Kommandos, die andere Entwickler*innen geschrieben haben, um bestimmte Dinge einfach und schnell durchführen zu können, ohne dies alles selber schreiben zu müssen. Im Fall von **p5js** z.B. das Zeichnen im Browser. Man kann sich diese Libraries wie Werkzeugkoffer vorstellen. Somit muss man nicht jedesmal wenn man einen Nagel in die Wand haut erst einen neuen Hammer bauen, sondern kann sich an den Kommandos bedienen, die andere bereits entwickelt haben.

*Lasst uns also nun unser erstes p5js-Projekt erstellen!*

{{h2('Neues Projekt')}}

{{video("https://fhpcloud.fh-potsdam.de/s/pSgDkqb8yGmeyiP/download/de_new.mp4", "/images/thumbnails/de_2d_intro_new.png", "de_2d_intro_new", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/pSgDkqb8yGmeyiP/download/de_new.mp4
en:https://fhpcloud.fh-potsdam.de/s/geCyAfQbfg4P3Fe/download/de_new.mp4
-->

1. Gehe in den `code` Ordner.
2. Kopiere den `code/example` Ordner und füge das Ganze wieder in den `code` Ordner ein and benenne diesen um.
3. Klicke auf die `index.html` im neuen Ordner and klicke dann auf den **Go Live** Button am unteren Rand von VS Code.
4. Öffne nun die `script.js` Datei in deinem neuen Ordner.
5. Los gehts!


{{h2('Reference')}}

{{video("https://fhpcloud.fh-potsdam.de/s/JGYB3Dor9BRRaJ2/download/de_reference.mp4", "/images/thumbnails/de_2d_intro_ref.png", "de_2d_intro_ref", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/JGYB3Dor9BRRaJ2/download/de_reference.mp4
en:https://fhpcloud.fh-potsdam.de/s/rdnq32A7DzzttbF/download/de_reference.mp4
-->

Wenn du mal ein Kommando vergessen hast oder nicht mehr weißt welche Parameter erforderlich sind, kannst du dies nicht nur auf dieser Seite nachschauen sondern auch direkt in der offiziellen p5js [Reference](https://p5js.org/reference/).

{{h2('Sketch')}}

In der p5js Dokumentation wirst du manchmal lesen, dass ein Projekt auch **Sketch** genannt wird. Dies basiert ein bisschen auf dem ehemaligen Processing-System (Java). Wir werden diese Bennenung aber beibehalten. Ein Sketch besteht in unserem Fall immer aus zwei Datein: `index.html` und `script.js`. In diesem Seminar werden wir die `index.html` nicht bearbeiten. Diese Datei enthält die Informationen für den Browser, dass die p5js-Library und unsere `script.js` Datei geladen und ausgeführt werden sollen.

Für diejenigen die es interessiert wie die `index.html` Datei aufgebaut ist, habe ich eine sehr sehr verkürzte Einführung in [HTML](html.md) erstellt. Dies benötigen wir aber für unser Seminar nicht.

### sketch.js

{{video("https://fhpcloud.fh-potsdam.de/s/m6fSyAmSRJoMSRR/download/de_sketch.mp4", "/images/thumbnails/de_2d_intro_sketch.png", "de_2d_intro_ref", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/m6fSyAmSRJoMSRR/download/de_sketch.mp4
en:https://fhpcloud.fh-potsdam.de/s/mLDgRoAWRSiefNb/download/de_sketch.mp4
-->

Die `sketch.js` Datei ist der Ort wo wir unseren Code schreiben und unsere Designs entwickeln. Wenn du eine neue Kopie erstellst, sollte diese Datei wie folgt aussehen:

```js
function preload() {
  // preloading
}

function setup() {
  createCanvas(400, 400);
  // preparations
}

function draw() {
  background(220);
  // drawing
}
```

Hier findest du bereits einige Zeilen Code. Du siehst hier drei sogenannte Funktionen (wir werden in einer der späteren Einheiten noch mehr über Funktionen sprechen). Die **preload**, **setup** und die **draw** Funktion. Alles was innerhalb der geschweiften Klammern geschrieben steht `{...}` gehört zu der vorgestellten Funktion.

> In den Videos und Beschreibungen nutze ich teilweise den Begriff **Funktion** oder **Kommando**, meine damit aber das selbe.

{{ img('p5js-cycle.svg', 'Der p5js Programm-Zyklus') }}

### preload Funktion

Die **preload** Funktion wird ausgeführt bevor alle anderen Funktionen an der Reihe sind. Diese Funktion können wir später nutzen, um z.B. Bilder oder andere Daten zu laden, welche wir dann benötigen wenn wir mit dem Zeichnen beginnen.


### setup Funktion

Die **setup** Funktion wird einmal am Anfang ausgeführt. Innerhalb der Setup Funktion bereiten wir Dinge vor, welche wir dann in der *draw* Funktion brauchen, außerdem können wir hier Kommandos ausführen, die nur am Anfang einmal ausgeführt werden müssen, wie das Erstellen unserer Zeichenfläche (`createCanvas`).

### draw Funktion

Die **draw** Funktion wird das erste mal nach Setup ausgeführt. Anders als *setup* und *preload* wird diese Funktion kontinuierlich immer wieder in einer Schleife ausgeführt. Was Anfang vllt. noch nicht sinnvoll erscheint, wird später interessant, wenn wir z.B. Animationen sich bewegender Objekt erstellen wollen.

{{h2('Kommentare')}}

{{video("https://fhpcloud.fh-potsdam.de/s/WsxqZSo4zPZkZgH/download/de_comments.mp4", "/images/thumbnails/de_2d_intro_comments.png", "de_2d_intro_comments", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/WsxqZSo4zPZkZgH/download/de_comments.mp4
en:https://fhpcloud.fh-potsdam.de/s/2HEDwNWoL6RNLHM/download/de_comments.mp4
-->

Wenn man seinen Code kommentiere möchte oder einfach ein einzelnen kommando kurzzeitig deaktivieren möchte, gibt es zwei Möglichkeiten Texte in JavaScript einzufügen, welche vom Browser nicht als Code interpretiert werden:

1. Einzeiliger Kommentar
```js
// this is a one line comment
```

2. Mehrzeiliger Kommentar
```js
/* 
inside this comment we can add
as many lines
as we like
*/
```

{{h2('Einrücken')}}

{{video("https://fhpcloud.fh-potsdam.de/s/kqDm5WMWY6Q2S2X/download/de_indent.mp4", "/images/thumbnails/de_2d_intro_indent.png", "de_2d_intro_indent", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/kqDm5WMWY6Q2S2X/download/de_indent.mp4
en:https://fhpcloud.fh-potsdam.de/s/iHNiJ5XEs9iFGg8/download/de_indent.mp4
-->

> Um Code einzurücken nutze einfach die Tab-Taste. In VS Code kann man auch mehrere Zeilen markieren und diese gleichzeitig einrücken. In den VS Code settings kann man einstellen, ob ein Tab 2 oder 4 Leerzeichen seien sollen. Im Beispielcode werden immer 2 Leerzeichen genutzt.

In manchen Programmiersprachen wie z.B. Python hat das Einrücken von Code eine Bedeutung. In JavaScript ist dies nicht der Fall. Man kann theoretisch auch alles ein eine Zeile schreiben, ohne Einrücken, ohne Umbrüche. Das Einrücken ist lediglich zur Organisation des Codes. Einrücken kann uns helfen den Code sauberer zu halten und nicht den Überblick zu verlieren. Man rückt in der Regel immer um eine Ebene weiter ein, wenn sich ein neuer Scope durch `{}` geschweifte Klammern öffnet. Wenn du VS Code benutzt wird der Editor dich auch dabei unterstützen deinen Code automatisch einzurücken.

```js
function setup() {
  createCanvas(
    400,
    400
  );
}
```


{{h2('Debugging')}}

{{video("https://fhpcloud.fh-potsdam.de/s/WincbxLqmRB8Hac/download/de_debug.mp4", "/images/thumbnails/de_2d_intro_debug.png", "de_2d_intro_debug", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/WincbxLqmRB8Hac/download/de_debug.mp4
en:https://fhpcloud.fh-potsdam.de/s/XAos9wLLNNaZ7Sb/download/de_debug.mp4
-->

> Ich empfehle euch generell entweder Firefox, Chrome, Edge or ähnliche Browser zu nuztzen. Safari und der Internet Explorer sind nicht zu empfehlen. Falls du Safari nutzt und du die Debugging-Funktionen nutzen möchtest, dann musst du diese zuerst [aktivieren](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html). In den Safari-Einstellungen gibt es eine Checkbox am unteren Ende, durch welche man die Developer Tools aktivieren kann. Danach kann man auch in Safari mit einem Rechts-Klick Webseiten untersuchen.

<script>
console.log('Herzlichen Glückwunsch. Du hast die geheime Nachricht gefunden. 🎉');
console.log('');
console.log('%c...@@@@@@...@@@...@@@...@@@@@@@@@...', 'color: #D12229;');
console.log('%c...@@@......@@@...@@@...@@@...@@@...', 'color: #F68A1E;');
console.log('%c...@@@@@@...@@@@@@@@@...@@@@@@@@@...', 'color: #FDE01A;');
console.log('%c...@@@......@@@...@@@...@@@.........', 'color: #007940;');
console.log('%c...@@@......@@@...@@@...@@@.........', 'color: #24408E;');
console.log('%c------------------------------------', 'color: #732982;');
</script>

{{task('Aufgabe: Debugging', 'Versuche diese Website hier zu untersuchen und die <strong>geheime Nachricht</strong> zu finden.')}}