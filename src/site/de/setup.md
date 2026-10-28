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

{{h2('GitHub')}}

{{video("https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P/download/de_setup_git.mp4", "/images/thumbnails/de_setup_git.png", "de_setup_git", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/2NrzijRnERDg6Ht/download/de_setup_git.mp4")}}

<!--
dg: https://fhpcloud.fh-potsdam.de/s/2NrzijRnERDg6Ht
de: https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P
en: https://fhpcloud.fh-potsdam.de/s/BBMqcBicJ6QLaeE
-->

{{download('/images/downloads/git.pdf', 'GIT Introduction (PDF)')}}

GitHub ist die weltweit größte Plattform um gemeinsam an Code zu arbeiten. GitHub basiert auf dem Versionierungssystem [git](https://git-scm.com/). Alternative Plattformen die ebenfalls **git** nutzen, sind z.B. [Bitbucket](https://bitbucket.org/product) und [GitLab](https://about.gitlab.com/). Viele von euch kennen wahrscheinlich Werkzeuge wie Google Docs. Der große unterschied zu solchen Kollaborations-Werkzeugen ist, dass man nicht in echtzeit parallel an Dokumenten arbeitet. Statt dessen erstellt man eine lokale Kopie der Dateien, bearbeitet diese und sendet die Änderungen dann zurück in die Cloud und **git** stellt sicher, dass die Änderungen mit möglichen Änderungen anderer kombiniert und synchronisiert werden. Dies kann dann auch manchmal zu sogenannten *merge conflicts* führen. Dann muss man **git** unterstützen und entscheiden, welche Änderungen übernommen und welche gelöscht werden sollen. Jedes Projekt wird in einem sogenannten *Repository* oder kurz *Repo* verwaltet. In diesem Seminar nutzen wir **git** primär um eine Kopie des Code-Repos zu erstellen, damit ihr darauf aufbauend üben könnt. So könnt ihr alle Code-Beispiele nutzen und müsst euch gleichzeitig keine Sorge machen, dass ihr etwas kaputt machen könntet.

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
Die Anwendung kann [hier](https://desktop.github.com/) heruntergeladen und dann installiert werden. GitHub Desktop installiert auch die **git**-CLI (siehe unten).

#### GitHub Command Line (optional)

Die GitHub oder besser **git** Kommandozeilenschnittstelle (CLI) ist noch wesentlich mächtiger als die Desktop App und hat mehr funktionen, dafür muss man sich aber alle Kommandos merken und diese manuell eingeben.

##### 1. Die git CLI installieren
Eine Installationsanleitung für Windows, Mac und Linux gibt es [hier](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

##### 2. GitHub CLI installieren
Github hat eine erweiterte CLI, die z.B. dabei hilft sich bei GitHub zu authentifizieren. Eine Installationsanleitung gibt es [hier](https://github.com/cli/cli).

### Wichtiger Hinweis für GitHub Forks
Den Fork den du von unserem Code-Repo erstellst ist öffentlich. Dies bedeutet, dass jeder sehen kann was du an diesem Code zurück in die Cloud pushst. Achte also bitte darauf, dass du keine geheimen Informationen in deinem Repo ablegst. Die Idee dahinter, dass das Repo öffentlich ist, ist das die Teilnehmer*innen sich im Laufe des Kurses auch gegenseitig über die Schulter schauen können. Außerdem kann ich euch so auch einfacher bei euren Projekten unterstützen. Wenn es dich stört, dass andere deinen Code sehen können, dann lösche das Repo einfach nachdem das Semester vorbei ist.

#### Einen Fork aktualisieren

> Es ist sehr sehr wahrscheinlich das du folgendes nicht im Rahmen dieses Seminars benötigst.

Wir erstellen einen sogenannten "Fork" des original Code-Repos. Der "Fork" und das Original sind technisch immer noch miteinander verbunden. Sollte ich im Laufe des Seminars Änderungen am Repo vornehmen, könnt ihr euch diese Änderungen in euer persönliches Repo herunterladen. Hierfür müssen wir allerdings die oben erwähnte CLI nutzen. Um die CLI für ein Repo zu öffnen, einfach in der Desktop App, Rechts-Klick auf ein Repo klicken. In VS Code kann man auch ein neues Terminal öffenen (Menu > Terminal > New Terminal). Gebe dann folgende Kommandos ein (drücke Enter nach jeder Zeile):

```
git fetch upstream
git checkout main
git merge upstream/main
git push
```

<br/>

Es kann passieren, dass es nach Zeile 3 einen "merge conflict" gibt. Wenn dem so ist, gehe zurück in die GitHub Desktop App, die App wird dir aufzeigen, welche Dateien du dir genauer anschauen musst.

**Note**: Wenn du etwas ähnliches mit einem anderen, älteren Repo machst, wirst du feststellen, das Zeile 2 und 3 des Fork-Updates einen Fehler produzieren. Dies liegt daran, dass der Hauptstrang, früher nicht *main* sondern *master* hieß. GitHub hat diese Benamung vor einiger Zeit [geändert](https://github.com/github/renaming).

{{h2('GitLab der Universität Potsdam', 'GitLab Potsdam')}}

> **Wichtig**: Dieser Abschnitt richtet sich **ausschließlich an Studierende der Fachhochschule Potsdam und der Universität Potsdam**. Nur mit einem Hochschul-Account kannst du dich an der GitLab-Instanz [gitup.uni-potsdam.de](https://gitup.uni-potsdam.de) anmelden. Wenn du nicht an einer der beiden Hochschulen eingeschrieben bist, kannst du diesen Abschnitt überspringen und den GitHub-Weg (siehe oben) nutzen.

Neben GitHub nutzen wir die GitLab-Instanz der Universität Potsdam. Der Ablauf ist ähnlich wie bei GitHub: Du erstellst eine lokale Kopie des Repos *learning-parametric-design*, arbeitest lokal und kannst deine Änderungen anschließend zurück in die Cloud pushen. Du benötigst dafür die [GitHub Desktop App](https://desktop.github.com/) (siehe oben). Diese funktioniert auch mit GitLab, da beide auf **git** basieren.

#### 1. Erste Anmeldung (Single Sign-On)

Öffne [gitup.uni-potsdam.de](https://gitup.uni-potsdam.de) im Browser. Du musst dir keinen neuen Account erstellen, sondern meldest dich über den Single-Sign-On-Dienst (SSO) deiner Hochschule an. Dein Account wird bei der ersten Anmeldung automatisch angelegt.

1. Wähle auf der Startseite die Anmeldung über SSO / Hochschul-Login aus.
2. Wähle deine Hochschule (FH Potsdam oder Universität Potsdam) und melde dich mit deinen gewohnten Hochschul-Zugangsdaten an.
3. Bestätige gegebenenfalls die Weitergabe der Daten an GitLab (Uni Potsdam).

{{ img('gitlab-01-login.png', 'Schritt 1: Startseite von gitup.uni-potsdam.de mit dem SSO-Login') }}

{{ img('gitlab-02-sso.png', 'Schritt 2: Auswahl der Hochschule und Anmeldung mit den Hochschul-Zugangsdaten') }}

{{ img('gitlab-03-dashboard.png', 'Schritt 3: Das GitLab-Dashboard nach der erfolgreichen Anmeldung') }}

Notiere dir deinen GitLab-**Benutzernamen** (zu finden unter deinem Profilbild > *Edit profile* oder in der URL deines Profils). Diesen benötigst du später in der GitHub Desktop App.

#### 2. Das Repository learning-parametric-design finden

Rufe das Repository [*learning-parametric-design*](https://gitup.uni-potsdam.de/x_sebastian-meier/learning-parametric-design) auf. Auf der Projektseite findest du oben rechts den Button **Fork**.

#### 3. Einen Fork des Repositories erstellen

Das Original-Repository gehört mir, dort kannst du keine eigenen Änderungen hochladen. Deshalb erstellst du einen **Fork**: eine persönliche Kopie des Repositories in deinem eigenen GitLab-Account. Der Fork bleibt mit dem Original verbunden, aber du kannst darin frei arbeiten und Änderungen pushen, ohne etwas kaputt zu machen. Danach klonst du deinen Fork (und nicht das Original) auf deinen Computer.

1. Klicke auf der Projektseite auf **Fork**.
2. Wähle bei *Project URL* deinen eigenen Namespace (deinen Benutzernamen) aus. Den Projektnamen kannst du beibehalten.
3. Stelle bei *Visibility level* **Public** ein.
4. Klicke auf **Fork project**.
5. Du landest nun auf der Seite deines Forks. Klicke auf den blauen Button **Code** (bzw. *Clone*) und kopiere die URL unter **Clone with HTTPS**.

> **Wichtig: Der Fork muss öffentlich (Public) sein.** Nur so kann ich deinen Code sehen, dir bei deinen Projekten helfen, und ihr könnt euch im Seminar gegenseitig über die Schulter schauen. Das bedeutet aber auch, dass jede*r sehen kann, was du in den Fork pushst. Lege deshalb keine geheimen Informationen (Passwörter, Tokens, persönliche Daten) darin ab. Wenn es dich stört, lösche den Fork nach dem Semester.

{{ img('gitlab-04-fork.png', 'Schritt 4: Den Fork mit Visibility level "Public" erstellen (Blau markierter Button)') }}

{{ img('gitlab-05-clone.png', 'Schritt 5: Die HTTPS-URL deines Forks kopieren') }}

#### 4. Den Fork mit GitHub Desktop klonen

1. Öffne die GitHub Desktop App.
2. Wähle **File > Clone Repository...**.
3. Wechsle auf den Reiter **URL**, füge die kopierte HTTPS-URL ein und wähle einen lokalen Ordner, in dem die Kopie gespeichert werden soll.
4. Klicke auf **Clone**.

Wenn du nach einem Benutzernamen und Passwort gefragt wirst (z.B. weil das Repo nicht öffentlich ist), erstelle zuerst den Access Token (nächster Schritt) und kehre dann hierher zurück. Als Benutzername gibst du deinen GitLab-Benutzernamen ein, als Passwort den Token.

{{ img('gitlab-06-github-desktop-clone.png', 'Schritt 6: Klonen über den URL-Reiter in GitHub Desktop') }}

Öffne den lokalen Ordner anschließend wie gewohnt in VS Code. Um neue Änderungen aus der Cloud zu laden, klickst du in GitHub Desktop auf **Fetch origin** bzw. **Pull origin**.

#### 5. Access Token erstellen

Um Änderungen in GitLab hochzuladen (*push*), reicht dein Hochschul-Passwort nicht aus, weil du dich über SSO anmeldest. Stattdessen erstellst du einen **Personal Access Token**, den du anstelle eines Passworts in GitHub Desktop verwendest.

1. Klicke in GitLab auf dein Profilbild und wähle **Edit profile**.
2. Wähle in der linken Navigation **Access** > **Access Tokens** (bzw. *Personal access tokens*).
3. Klicke auf **Generate Token** und **Generate legacy token**.
4. Vergib einen Namen (z.B. *github-desktop*) und ein Ablaufdatum (z.B. das Ende des Semesters).
5. Wähle die Berechtigungen (*Scopes*) **read_repository** und **write_repository**.
6. Klicke auf **Create personal access token**.
7. **Kopiere den Token sofort.** Er wird nur einmal angezeigt. Speichere ihn z.B. in einem Passwort-Manager.

> **Sicherheit**: Behandle den Token wie ein Passwort. Teile ihn nicht, speichere ihn nicht in deinem Code und committe ihn nicht in ein Repository. Wenn du den Token verloren hast oder er öffentlich geworden ist, widerrufe ihn in GitLab (*Revoke*) und erstelle einen neuen.

{{ img('gitlab-08-profile.png', 'Schritt 7: Das Profilmenü') }}

{{ img('gitlab-09-access-tokens.png', 'Schritt 8: Die Access-Token-Übersicht') }}

{{ img('gitlab-10-token-form.png', 'Schritt 9: Name, Ablaufdatum und Berechtigungen des Tokens festlegen') }}

{{ img('gitlab-11-token-created.png', 'Schritt 10: Der Token wird nur einmal angezeigt und muss kopiert werden') }}

#### 6. Den Token in GitHub Desktop nutzen

1. Nimm eine kleine Änderung im lokalen Repo vor, z.B. in einer Datei, und speichere sie. GitHub Desktop zeigt die Änderung im Reiter *Changes* an.
2. Gib unten links eine kurze Beschreibung ein und klicke auf **Commit to main**.
3. Klicke oben auf **Push origin**.
4. GitHub Desktop fragt nun nach deinen Zugangsdaten. Gib als **Benutzername** deinen GitLab-Benutzernamen und als **Passwort** den kopierten Access Token ein.
5. Bestätige. GitHub Desktop merkt sich die Zugangsdaten, du musst sie in Zukunft nicht erneut eingeben, bis der Token abläuft.

{{ img('gitlab-12-commit.png', 'Schritt 11: Änderung committen') }}

{{ img('gitlab-13-credentials.png', 'Schritt 12: Push Commit') }}

{{ img('gitlab-14-push-success.png', 'Schritt 13: Username & Passwort (Access Token)') }}

Falls der Push mit einer Fehlermeldung zur Authentifizierung scheitert, ist meist der Token abgelaufen, die Scopes fehlen oder es wurde ein falscher Benutzername eingegeben. Erstelle in dem Fall einen neuen Token mit den oben genannten Scopes.

### Los gehts
Nachdem wir nun alles eingerichtet haben, kann es nun losgehen...