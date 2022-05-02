---
title: Technical Setup
eleventyNavigation:
  title: Setup
  key: cn_setup
  order: 3
  parent: en
---

{% from "../_includes/parts/macros.njk" import h2, video, img, download %}

This setup guides you through the process of setting everything up on your computer for the next sessions. We need to install a couple of things so we can start creating our own creative tools.

{{h2('Requirements')}}

The requirements are pretty low, you can follow along with any recent Linux, Mac and Windows distribution. You could even use something like Raspberry Pi OS. The only thing you need is the right to install software on your system. If you don't have the rights, please ask your administrator to install the software for you. After installation we don't need admin-rights for the rest of the seminar.

If you are working on a tablet or something similarly restricted, you can use the p5js [web editor](https://editor.p5js.org/). You will be able to complete almost all the tasks in this seminar, but you need a constant internet connection and you need to create an account.

{{h2('Code Editor')}}

{{video("https://fhpcloud.fh-potsdam.de/s/2PLgW3km7y3sb92/download/en_setup_code-editor.mp4", "/images/thumbnails/en_setup_editor.png", "en_setup_editor", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/JmNALPKTf4664od
en: https://fhpcloud.fh-potsdam.de/s/2PLgW3km7y3sb92
-->

You could use any code editor you like, but in the tutorial videos you will see us using [VS Code](https://code.visualstudio.com/download). VS Code is a free and an [open source](https://github.com/microsoft/vscode) code editor, primarily developed by Microsoft. Over the last few years it has become one of the most popular editors and thanks to that a large variety of free [extensions](https://marketplace.visualstudio.com/VSCode) exist, that make our life a lot easier creating new things.

If your are not using VS Code, make sure you are using a proper code editor. MS Word, Mac's TextEdit or Windows' Wordpad are not code editors. Those apps allow you to "style" your text. Those visual modifications of the text are stored in a special format (depending on the app you use) and you need a special app to open and view such a file format. Code editors on the other hand show you the raw structure of a file. There is no styling, just text. This is also the reason we can use different code editors, because it's just text and you don't need an extra layer of software for interpretation and editing.

#### 1. Installing VS Code and live-server extension
Go to the VS Code download [page](https://code.visualstudio.com/download). Depending on your operating system VS Code is also available in some app stores and software management tools.

{{video("https://fhpcloud.fh-potsdam.de/s/3tG6BwCi2DP9Bg4/download/en_setup_vscode.mp4", "/images/thumbnails/en_setup_vscode.png", "en_setup_vscode", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/mMdW8q9JZgpe5Pg
en: https://fhpcloud.fh-potsdam.de/s/3tG6BwCi2DP9Bg4
-->

{{h2('GitHub')}}

{{video("https://fhpcloud.fh-potsdam.de/s/BBMqcBicJ6QLaeE/download/en_setup_git.mp4", "/images/thumbnails/en_setup_git.png", "en_setup_git", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P
en: https://fhpcloud.fh-potsdam.de/s/BBMqcBicJ6QLaeE
-->

{{download('/images/downloads/git.pdf', 'GIT Introduction (PDF)')}}

GitHub is the largest plattform for collaboratively working on code. It's build on top of the version control system [git](https://git-scm.com/). Alternative plattforms that make use of git are for example [bitbucket](https://bitbucket.org/product) and [GitLab](https://about.gitlab.com/). Many of you will know tools like Google Docs. The big difference is, that your are not editing files at the same time. Instead everybody downloads a copy of the file and when you are done editing you send it back into the cloud and **git** will make sure that your changes are being synchronized with the changes other people have been applying in the meantime. This can sometimes lead to so called *merge conflicts*. Then you have to help git to figure out what to keep and what to change. Each project is managed in a so called *repository* or short *repo*, In this class we use **git** primarily so that you have a copy of this repo in your own account. So you can change everything, without in fear of breaking this original repo. In addition you can still get any updates from this repo synchronized with your copy.

*LINKLIST*

There are two ways of using GitHub (git): the desktop app and the command line.

#### GitHub Desktop App (recommended)

{{video("https://fhpcloud.fh-potsdam.de/s/HLdw8ABZ2dHBqDq/download/en_setup_github.mp4", "/images/thumbnails/en_setup_github.png", "en_setup_github", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/neWkx2H8RNqg6Eo
en: https://fhpcloud.fh-potsdam.de/s/HLdw8ABZ2dHBqDq
-->

If you are using GitHub for the first time, its strongly recommended that you use the desktop app. The graphical user interface guides you through most of the difficult bits and you don't need to remember all the commands.

##### 1. Install GitHub Desktop
Go to the [download page](https://desktop.github.com/) and install the app. GitHub desktop also installs the git cli (see below) automatically for you.

#### GitHub Command Line (optional)

The GitHub or Git command line interface (CLI) tools are a lot more powerful than the desktop app, but you need to remember or lookup the commands.

##### 1. Install git cli
Installation instructions for windows, linux and mac can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

##### 2. Install github cli
Github cli will help you with authentication. Installation instructions can be found [here](https://github.com/cli/cli).

### Important Note for the git fork
The fork you created under your own account is public, which means everybody can see it. So don't push any sensitive information into it. The idea behing it being public is, that participants of the class can learn from one another and its also easier for me to check in on your progress and help you along the way. If you don't like your code being out there, simply delete the repo after you finished the seminar. There is also tutorials on how to create a private repo from a public repo on the web, but its a little bit more advanced.

#### Updating the fork

**It's highly likely you won't need the following for this seminar.**

If there should be any changes to the original repo that you want to include in your personal copy, we need to use the command line. Sadly this cannot be done with the GitHub Desktop App. Open the repo in VS Code. If you are using the desktop app, you can right click on the repo to do this. Then open a new terminal in VS Code (Menu > Terminal > New Terminal). Now type the following commands (press enter after every line):

```
git fetch upstream
git checkout main
git merge upstream/main
git push
```

It can happen, that after line 3 you will receive a merge conflict. Switch back to the github desktop app and the app will let you know what files to review.

**Note**: If you are doing something similar on an older repo you will notice that line 2 and 3 will produce errors, because *main* does not exist. A while ago [Github changed](https://github.com/github/renaming) the default name of the primary branch from *master* to *main*. But older repos still use the old name.

### Let's go
Sorry, for this rather boring start. From here on, its going to be a lot more fun.