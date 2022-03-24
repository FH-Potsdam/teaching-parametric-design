---
title: Technisches Setup
eleventyNavigation:
  title: Setup
  key: de_setup
  order: 3
  parent: de
---

{% from "../_includes/parts/macros.njk" import h2, video, img, download %}

Dieser kurze Setup-Leitfaden hilft dir alles notwendige auf deinem Computer einzurichten, was wir für die nächsten Abschnitte benötigen. Hierzu müssen wir erstmal ein paar Anwendungen installieren.

{{h2('Anforderungen')}}

Die Anforderungen an euren Computer sind realtiv gering. So lange du einen halbwegs aktuellen Linux-, Mac- oder Windows-Rechner hast, sollte dies kein Problem darstellen. Du könntest sogar so etwas wie ein Raspberry Pi OS nutzen. Du benötigst aber die Rechte Software auf deinem Computer zu installieren. Solltest du diese Rechte nicht haben, bitte deinen Administrator dir die notwendige Software zu installieren. Nach der initialen Installation werden keine Admin-Rechte mehr benötigt.

Falls du auf einem Tablet oder etwas ähnlichem arbeitest, kannst du den p5js [Web-Editor](https://editor.p5js.org/) nutzen. Mit diesem kannst du die meisten Aufgaben erfüllen. Du brauchst aber eine konstante Internetverbindung und musst dir einen Account erstellen, um deine Projekte zu speichern.

{{h2('Code Editor')}}

{{video("https://fhpcloud.fh-potsdam.de/s/JmNALPKTf4664od/download/de_setup_code-editor.mp4", "/images/thumbnails/de_setup_editor.png", "de_setup_editor", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/JmNALPKTf4664od
en: https://fhpcloud.fh-potsdam.de/s/2PLgW3km7y3sb92
-->

Du kannst jeden beliebigen Code-Editor nutzen. In den Tutorial-Videos wirst du den Editor [VS Code](https://code.visualstudio.com/download) sehen. VS Code ist kostenloser, [Open Source](https://github.com/microsoft/vscode) Code-Editor, welcher primär von Microsoft entwickelt wird. Über die letzten Jahre ist dieser zu einem der beliebtesten Code-Editor geworden. Deshalb gibt es mittlerweile eine große Pallete an zusätzlichen [Erweiterungen](https://marketplace.visualstudio.com/VSCode), die einem die Arbeit mit Code erleichtern.

Falls du nicht VS Code benutzt, stelle bitte sicher das du einen "richtigen" Code-Editor nutzt. Microsoft Word, Apples TextEdit oder Windows Wordpad sind keine Code-Editoren. Diese Anwendunge erlauben ihren Nutzer*innen Text zu "stylen". Diese Styling-Parameter müssen in sogenannten Markup-Dokumenten abgespeichert werden und können nur mit bestimmten Anwendungen geöffnet werden. Mit einem Code-Editor kann man den "rohen" Inhalt einer Datei sehen und bearbeiten. Deshalb können wir auch beliebige Editoren nutzen, weil nur der "rohe" Inhalt bearbeitet wird, ohne eine zusätzliche Ebene der Interpretation und Verschachtelung.

#### 1. VS Code und die Live-Server-Erweiterung installieren
VS Code kann [hier](https://code.visualstudio.com/download) heruntergeladen werden. Abhängig vom Betriebssystem ist VS Code auch über gängige Software-Stores kostenlos verfügbar.

{{video("https://fhpcloud.fh-potsdam.de/s/mMdW8q9JZgpe5Pg/download/de_setup_vscode.mp4", "/images/thumbnails/de_setup_vscode.png", "de_setup_vscode", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/mMdW8q9JZgpe5Pg
en: https://fhpcloud.fh-potsdam.de/s/3tG6BwCi2DP9Bg4
-->

{{h2('GitHub')}}

{{video("https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P/download/de_setup_git.mp4", "/images/thumbnails/de_setup_git.png", "de_setup_git", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P
en: https://fhpcloud.fh-potsdam.de/s/BBMqcBicJ6QLaeE
-->

{{download('/images/downloads/git.pdf', 'GIT Introduction (PDF)')}}

GitHub ist die weltweit größte Plattform um gemeinsam an Code zu arbeiten. GitHub basiert auf dem Versionierungssystem [git](https://git-scm.com/). Alternative Plattformen die ebenfalls **git** nutzen, sind z.B. [Bitbucket](https://bitbucket.org/product) und [GitLab](https://about.gitlab.com/). Viele von euch kennen wahrscheinlich Werkzeuge wie Google Docs. Der große unterschied zu solchen Kollaborations-Werkzeugen ist, dass man nicht in echtzeit parallel an Dokumenten arbeitet. Statt dessen erstellt man eine lokale Kopie der Dateien, bearbeitet diese und sendet die Änderungen dann zurück in die Cloud und **git** stellt sicher, dass die Änderungen mit möglichen Änderungen anderer kombiniert und synchronisiert werden. Dies kann dann auch manchmal zu sogenannten *merge conflicts* führen. Dann muss man **git** unterstützen und entscheiden, welche Änderungen übernommen und welche gelöscht werden sollen. Jedes Projekt wird in einem sogenannten *Repository* oder kurz *Repo* verwaltet. In diesem Seminar nutzen wir **git** primär um eine Kopie des Code-Repos zu erstellen, damit ihr darauf aufbauen üben könnt. So könnt ihr alle Code-Beispiele nutzen und müsst euch gleichzeitig keine Sorge machen, dass ihr etwas kaputt machen könntet.

*CLI LINKLIST*

Es gibt zwei Möglichkeiten das **git**- bzw. GitHub-System zu nutzen: Die GitHub Desktop App und die Kommandozeile (CLI).

#### GitHub Desktop App (empfohlen)

{{video("https://fhpcloud.fh-potsdam.de/s/neWkx2H8RNqg6Eo/download/de_setup_github.mp4", "/images/thumbnails/de_setup_github.png", "de_setup_github", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/neWkx2H8RNqg6Eo
en: https://fhpcloud.fh-potsdam.de/s/HLdw8ABZ2dHBqDq
-->

Wenn du **git** und GitHub zum ersten Mal nutzt, ist es sehr empfehlenswert erstmal mit der Desktop App zu starten. Die grafische Benutzeroberfläche leitet dich durch die verschiedenen Aufgaben, ohne dass man sich direkt alle Kommandos merken muss.

##### 1. GitHub Desktop installieren
Die Anwendung kann [hier](https://desktop.github.com/) heruntergeladnen und dann installiert werden. GitHub Desktop installiert auch die **git**-CLI (siehe unten).

#### GitHub Command Line (optional)

Die GitHub oder besser **git** Kommandozeilenschnittstelle (CLI) ist noch wesentlich mächtiger als die Desktop App und hat mehr funktionen, dafür muss man sich aber alle Kommandos merken und diese manuell eingeben.

##### 1. Die git CLI installieren
Eine Installationsanleitung für Windows, Mac und Linux gibt es [hier](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

##### 2. GitHub CLI installieren
Github hat eine erweiterte CLI, die z.B. dabei hilft sich bei GitHub zu authentifizieren. Eine Installationsanleitung gibt es [hier](https://github.com/cli/cli).

### Wichtiger Hinweis für GitHub Forks
Den Fork den du von unserem Code-Repo erstellst ist öffentlich. Dies bedeutet, dass jeder sehen kann was du an diesem Code zurück in die Cloud pushst. Achte also bitte darauf, dass du keine geheimen Informationen in deinem Repo ablegst. Die Idee dahinter, dass das Repo öffentlich ist, ist das die Teilnehmer*innen sich im Laufe des Kurses auch gegenseitig über die Schulter schauen können. Außerdem kann ich euch so auch einfacher bei euren Projekten unterstützen. Wenn es dich stört, dass andere deinen Code sehen können, dann lösche das Repo einfach nachdem das Semester vorbei ist.

#### Einen Fork aktualisieren

**Es ist sehr sehr wahrscheinlich das du folgendes nicht im Rahmen dieses Seminars benötigst.**

Wir erstellen einen sogenannten "Fork" des original Code-Repos. Der "Fork" und das Original sind technisch immer noch miteinander verbunden. Sollte ich im Laufe des Seminars Änderungen am Repo vornehmen, könnt ihr euch diese Änderungen in euer persönliches Repo herunterladen. Hierfür müssen wir allerdings die oben erwähnte CLI nutzen. Um die CLI für ein Repo zu öffnen, einfach in der Desktop App, Rechts-Klick auf ein Repo klicken. In VS Code kann man auch ein neues Terminal öffenen (Menu > Terminal > New Terminal). Gebe dann folgende Kommandos ein (drücke Enter nach jeder Zeile):

```
git fetch upstream
git checkout main
git merge upstream/main
git push
```

Es kann passieren, dass es nach Zeile 3 einen "merge conflict" gibt. Wenn dem so ist, gehe zurück in die GitHub Desktop App, die App wird dir aufzeigen, welche Dateien du dir genauer anschauen musst.

**Note**: Wenn du etwas ähnliches mit einem anderen, älteren Repo machst, wirst du feststellen, das Zeile 2 und 3 des Fork-Updates einen Fehler produzieren. Dies liegt daran, dass der Hauptstrang, früher nicht *main* sondern *master* hieß. GitHub hat diese Benamung vor einiger Zeit [geändert](https://github.com/github/renaming).

### Los gehts
Nachdem wir nun alles eingerichtet haben, kann es nun losgehen...