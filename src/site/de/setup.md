---
title: Technisches Setup
eleventyNavigation:
  title: Setup
  key: de_setup
  order: 3
  parent: de
locale: de
layout: default
---

{% from "../_includes/parts/macros.njk" import h2, video, img, download %}

Dieser kurze Setup-Leitfaden hilft dir alles notwendige auf deinem Computer einzurichten, was wir für die nächsten Abschnitte benötigen. Hierzu müssen wir erstmal ein paar Anwendungen installieren.

{{h2('Anforderungen')}}

Die Anforderungen an euren Computer sind realtiv gering. So lange du einen halbwegs aktuellen Linux-, Mac- oder Windows-Rechner hast, sollte dies kein Problem darstellen. Du könntest sogar so etwas wie ein Raspberry Pi OS nutzen. Du benötigst aber die Rechte Software auf deinem Computer zu installieren. Solltest du diese Rechte nicht haben, bitte deinen Administrator dir die notwendige Software zu installieren. Nach der initialen Installation werden keine Admin-Rechte mehr benötigt.

Falls du auf einem Tablet oder etwas ähnlichem arbeitest, kannst du den p5js [Web-Editor](https://editor.p5js.org/) nutzen. Mit diesem kannst du die meisten Aufgaben erfüllen. Du brauchst aber eine konstante Internetverbindung und musst dir einen Account erstellen, um deine Projekte zu speichern.

{{h2('Code Editor')}}

{{video("https://fhpcloud.fh-potsdam.de/s/JmNALPKTf4664od/download/de_setup_code-editor.mp4", "/images/thumbnails/de_setup_editor.png", "de_setup_editor", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/K5ZADXCy5SgPq8a/download/de_setup_code-editor.mp4")}}

<!--
dg: https://fhpcloud.fh-potsdam.de/s/K5ZADXCy5SgPq8a
de: https://fhpcloud.fh-potsdam.de/s/JmNALPKTf4664od
en: https://fhpcloud.fh-potsdam.de/s/2PLgW3km7y3sb92
-->

Du kannst jeden beliebigen Code-Editor nutzen. In den Tutorial-Videos wirst du den Editor [VS Code](https://code.visualstudio.com/download) sehen. VS Code ist kostenloser, [Open Source](https://github.com/microsoft/vscode) Code-Editor, welcher primär von Microsoft entwickelt wird. Über die letzten Jahre ist dieser zu einem der beliebtesten Code-Editor geworden. Deshalb gibt es mittlerweile eine große Pallete an zusätzlichen [Erweiterungen](https://marketplace.visualstudio.com/VSCode), die einem die Arbeit mit Code erleichtern.

Falls du nicht VS Code benutzt, stelle bitte sicher das du einen "richtigen" Code-Editor nutzt. Microsoft Word, Apples TextEdit oder Windows Wordpad sind keine Code-Editoren. Diese Anwendunge erlauben ihren Nutzer*innen Text zu "stylen". Diese Styling-Parameter müssen in sogenannten Markup-Dokumenten abgespeichert werden und können nur mit bestimmten Anwendungen geöffnet werden. Mit einem Code-Editor kann man den "rohen" Inhalt einer Datei sehen und bearbeiten. Deshalb können wir auch beliebige Editoren nutzen, weil nur der "rohe" Inhalt bearbeitet wird, ohne eine zusätzliche Ebene der Interpretation und Verschachtelung.

#### 1. VS Code und die Live-Server-Erweiterung installieren
VS Code kann [hier](https://code.visualstudio.com/download) heruntergeladen werden. Abhängig vom Betriebssystem ist VS Code auch über gängige Software-Stores kostenlos verfügbar.

{{video("https://fhpcloud.fh-potsdam.de/s/mMdW8q9JZgpe5Pg/download/de_setup_vscode.mp4", "/images/thumbnails/de_setup_vscode.png", "de_setup_vscode", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/bbeAtZoYzPN7oPa/download/de_setup_vscode.mp4")}}

<!--
dg: https://fhpcloud.fh-potsdam.de/s/bbeAtZoYzPN7oPa
de: https://fhpcloud.fh-potsdam.de/s/mMdW8q9JZgpe5Pg
en: https://fhpcloud.fh-potsdam.de/s/3tG6BwCi2DP9Bg4
-->

{{h2('Coding Assistants - ChatBots')}}

In den letzten Jahren haben verschiedene Organisation und Unternehmen ChatBot-Technologien entwickelt, die einen bei der Softwareentwicklung unterstützen können. Diese Systeme können verschiedene assistive Aufgaben übernehmen, aber **es ist Vorsicht geboten**.

> Achtung! Denk daran, dass die Unternehmen hinter ChatBots großes Interesse haben ihre Systeme zu verbessern und hierfür Daten benötigen. Fast alle AI-Cloud-Services behalten sich das Recht vor alle Eingaben der Nutzer*innen weiterzuverwenden. Gebt nur in ChatBots ein, was Dritte sehen dürfen. Lösungen für private und sichere ChatBots siehe unten.

### Wie funktionieren KI ChatBots?

Die Basis moderner ChatBots sind sogenannte "Large Languange Models" (LLMs). Wie die meisten "generativen KIs", sind LLMs künstliche neuronale Netze, welche mit gigantischen Datenmengen trainiert wurden. Im Fall von LLMs werden die Modelle mit Texten trainiert. Das Training großer und komplexer Modelle braucht nicht nur viele Daten, sondern verbraucht auch sehr viel Zeit und Energie (bzw. CO2). Im Laufe des Trainings lernt das neuronale Netz Muster in Texten, Wortreihenfolgen, Kontexte in denen bestimmte Worte genutzt werden, etc. Diese gelernten Muster werden in einem Modell abgespeichert. Diese noch sehr rohen Modelle werden auch "Foundational Models" genannt, da man diese als Basis für verschiedene Aufgaben (Verfeinerungen) nutzen kann. Für ChatBots werden die LLMs mit spezifischen Anfragen von Nutzer*innen und entsprechenden erwünschten Lösungen verfeinert. Unter anderem wurden so mehrere LLMs speziell für Programmieraufgaben verfeinert (s.u.).

### Möglichkeiten und Probleme

Warum sollte man heute noch Programmieren lernen, wenn ChatBots doch anscheinend alles können? Hier kommen wir zum problematischen Teil der ChatBots. Wenn man mit ChatBots interagiert, kann man schnell das Gefühl bekommen, dass diese "intelligent" sind und uns und die Welt verstehen. Dieser Eindruckt täuscht (<= umstrittene Aussage). LLMs sagen die Wahrscheinlichkeit für Wortreihenfolgen vorher und generieren so Text. Dadurch das die Modelle während des Trainings enorm große Mengen an Texten aus unterschiedlichsten Bereich konsumiert haben, können Sie sehr viele unterschiedliche Formen von Text und Textinhalte generieren. Wissenschaftler*innen streiten darüber, ob diese text-basierten Modelle der Welt einem Verständnis der Welt nahe kommen.

Problematisch sind in diesem Kontext besonders, dass diese Modelle kein validiertes Wissen von sich geben, sondern Wörter basierend auf Wahrscheinlichkeiten aneinanderreihen. Die Antworten können deshalb täuschend echt aussehen, können aber trotzdem völlig falsch sein. Um z.B. Code zu verstehen, der von einem LLM generiert wurde und zu verstehen, ob dieser funktioniert und wie man diesen evtl. funktionstüchtig machen kann, bedarf es Programmiergrundlagen. Ohne dieses Grundlagenwissen können die Antworten eines solchen Modells nicht bewertet werden.

#### Einsatzmöglichkeiten von Coding ChatBots:

- Fehlermeldungen erklären lassen
- Code mit normaler Sprache erklären lassen
- Code von einer Programmiersprache in eine andere übersetzen lassen
- Inspiration für eine Funktionsablauf geben lassen

Ähnlich wie bei anderen Einsätzen von LLMs sollte man besonders den Output von Code/Text, welchen man weiterverwenden möchten, nur als Inspiration sehen, die man prüfen, verbessern und ausbauen kann.

{{ img('chatbots.png', 'Chatbot Systeme (v.l.n.r): ChatGPT, HugginFace und Perplexity') }}

### Werkzeuge

Die einfachste Möglichkeit ChatBots zu nutzen, sind Online-Services:

- [ChatGPT](https://chat.openai.com/)
- [Meta's Code-LLaMa via HuggingFace](https://huggingface.co/chat)
- [Meta's Code-LLaMa via PerplexityAI](https://labs.perplexity.ai/)

Daneben gibt es die kostenlose Software [LM Studio](https://lmstudio.ai/). Hiermit könnt ihr euch verschiedene Modelle auf euren Computer laden und dort lokal mit dem Modell kommunizieren. Ich empfehle euch **CodeLllama 7B Instruct**, es funktioniert für seine vergleichbar kleine Größe ziemlich gut.

Wenn ihr noch mehr Kontrolle haben wollt, könnt ihr euch ein komplett eigenes lokales Setup aufsetzen. Hierfür empfehle ich euch die Kombination aus:

- [ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)
- [facebookresearch/llama](https://github.com/facebookresearch/llama)

Zugriff zu Code Llama bekommt man bei [Meta](https://ai.meta.com/resources/models-and-libraries/llama-downloads/).


### Beispiel

Versuche bei deinen Prompts so genau wie möglich zu Beschreiben was du brauchst, um den Kontext möglichst spezifisch zu machen. Um welche Programmiersprache geht es, was gibst du vor, was erwartest du als Ausgabe. Prompts in englisch zu schreiben funktioniert meist besser als auf deutsch.

#### Code
```console.lg("Hello World")```

#### Nutzereingabe:
```Explain the following JavaScript Error message to a beginner: Uncaught TypeError: console.lg is not a function <anonymous> debugger eval code:1```

#### ChatGPT Antwort:
Certainly! This error message is coming from JavaScript, and it's telling you that there's a problem in your code. Let's break down the message step by step:

1. **Uncaught TypeError**: This part of the message indicates that a type of error occurred. In JavaScript, there are different types of errors, and a "TypeError" happens when you try to do something with a value that is not of the expected type.

2. **console.lg is not a function**: This is the specific error message. It's saying that there's a problem with a piece of code that is trying to use something called *console.lg*, but JavaScript doesn't recognize *lg* as a valid function or property of the *console* object.<br />**Explanation**: The console object in JavaScript is used for logging messages to the browser's developer console. The normal function to print a message to the console is *console.log()*. However, in this case, it seems like there's a typo or some mistake in the code, where *lg* is used instead of *log*.

3.<br />**<anonymous> debugger eval code:1**: This part of the message provides additional context about where the error occurred. It's saying that the error happened in some code that was evaluated by a debugger, but it doesn't give a specific file or location. This might happen if you're running code in a browser's developer console or if there's some kind of dynamic evaluation happening.

In summary, the error message is telling you that there's a problem in your code where you're trying to use *console.lg*, which JavaScript doesn't recognize. You should double-check your code to make sure you're using the correct function, which is likely *console.log()*.


{{h2('GitHub')}}

{{video("https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P/download/de_setup_git.mp4", "/images/thumbnails/de_setup_git.png", "de_setup_git", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/2NrzijRnERDg6Ht/download/de_setup_git.mp4")}}

<!--
dg: https://fhpcloud.fh-potsdam.de/s/2NrzijRnERDg6Ht
de: https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P
en: https://fhpcloud.fh-potsdam.de/s/BBMqcBicJ6QLaeE
-->

{{download('/images/downloads/git.pdf', 'GIT Introduction (PDF)')}}

GitHub ist die weltweit größte Plattform um gemeinsam an Code zu arbeiten. GitHub basiert auf dem Versionierungssystem [git](https://git-scm.com/). Alternative Plattformen die ebenfalls **git** nutzen, sind z.B. [Bitbucket](https://bitbucket.org/product) und [GitLab](https://about.gitlab.com/). Viele von euch kennen wahrscheinlich Werkzeuge wie Google Docs. Der große unterschied zu solchen Kollaborations-Werkzeugen ist, dass man nicht in echtzeit parallel an Dokumenten arbeitet. Statt dessen erstellt man eine lokale Kopie der Dateien, bearbeitet diese und sendet die Änderungen dann zurück in die Cloud und **git** stellt sicher, dass die Änderungen mit möglichen Änderungen anderer kombiniert und synchronisiert werden. Dies kann dann auch manchmal zu sogenannten *merge conflicts* führen. Dann muss man **git** unterstützen und entscheiden, welche Änderungen übernommen und welche gelöscht werden sollen. Jedes Projekt wird in einem sogenannten *Repository* oder kurz *Repo* verwaltet. In diesem Seminar nutzen wir **git** primär um eine Kopie des Code-Repos zu erstellen, damit ihr darauf aufbauen üben könnt. So könnt ihr alle Code-Beispiele nutzen und müsst euch gleichzeitig keine Sorge machen, dass ihr etwas kaputt machen könntet.

*CLI LINKLIST*

Es gibt zwei Möglichkeiten das **git**- bzw. GitHub-System zu nutzen: Die GitHub Desktop App und die Kommandozeile (CLI).

#### GitHub Desktop App (empfohlen)

{{video("https://fhpcloud.fh-potsdam.de/s/neWkx2H8RNqg6Eo/download/de_setup_github.mp4", "/images/thumbnails/de_setup_github.png", "de_setup_github", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/n5KPkrfBwsipRi5/download/de_setup_github.mp4")}}

<!--
dg: https://fhpcloud.fh-potsdam.de/s/n5KPkrfBwsipRi5
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