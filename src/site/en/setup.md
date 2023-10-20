---
title: Technical Setup
eleventyNavigation:
  title: Setup
  key: en_setup
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

{{h2('Coding Assistants - ChatBots')}}

In recent years, various organisations and companies have developed chatbot technologies that can help you develop software. These systems can perform various assistive tasks, but **caution is required**.

> Attention! Remember that companies behind Chatbots are very interested in improving their systems and require data to do so. Almost all AI-Cloud services reserve the right to continue to use all entries made by users. Just enter in chatbots what third parties are allowed to see. Solutions for private and safe chatbots can be found below.

### How do AI chatbots work?

Modern chatbots are based on "large Languange models" (LLMs). Like most "generative KIS", LLMs are artificial neuronal networks that have been trained with gigantic data volumes. In the case of LLMs, the models are trained with texts. Training large and complex models not only takes a lot of data, but also takes a great deal of time and energy (or CO2). During the course of the training, the neural network learns patterns in texts, word sequences, contexts in which certain words are used, etc. These learned patterns are stored in a model. These very raw models are also referred to as "foundational models", as they can be used as a basis for various tasks (refinements). For chatbots, LLMs are refined with specific enquiries from users and corresponding desired solutions. Among other things, several LLMs were refined specifically for programming tasks (see below).

### Opportunities and problems

Why should you still learn programming today when chatbots seem to be able to do everything? Here we come to the problematic part of the chatbots. When you interact with chatbots, you can quickly get the feeling that they are "intelligent" and understand us and the world. This impression is misleading (<= controversial statement). Llms predict the likelihood of word sequence beforehand, generating text. Because the models consumed enormous quantities of texts from a wide range of fields during the training course, you can generate a great many different types of text and content. Scientists are arguing about whether these text-based models in the world are closer to understanding the world.

In this context, it is particularly problematic that these models do not provide validated knowledge of themselves, but combine words based on probabilities. The answers can therefore look deceptive, but can still be completely wrong. In order to understand, for example, a CODE generated by a LLM and to understand whether it works and how it can be made operational, programming bases are required. Without this basic knowledge, the answers to such a model cannot be assessed.

#### Opportunities for coding chatbots

- explaining error messages
- have code explained in normal language
- have code translated from one programming language to another
- provide inspiration for a function

As with other assignments of LLMs, the output of code/text that you would like to continue to use should be seen in particular only as an inspiration that you can examine, improve and expand.

{{ img('chatbots.png', 'Chatbot Systems (v.l.n.r): ChatGPT, HugginFace and Perplexity') }}

### Tools

Online services are the easiest way to use chatbots:

- [ChatGPT](https://chat.openai.com/)
- [Meta's Code-LLaMa via HuggingFace](https://huggingface.co/chat)
- [Meta's Code-LLaMa via PerplexityAI](https://labs.perplexity.ai/)

There is also the free software [LM Studio](https://lmstudio.ai/). This allows you to load different models onto your computer and communicate locally with the model there. I recommend you **CodeLllama 7B Instruct**, it works pretty well for its comparatively small size.

If you want even more control, you can set up your own local setup. For this I recommend the combination of:

- [ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)
- [facebookresearch/llama](https://github.com/facebookresearch/llama)

Zugriff zu Code Llama bekommt man bei [Meta](https://ai.meta.com/resources/models-and-libraries/llama-downloads/).


### Example

In your prompts, try to describe what you need as precisely as possible to make the context as specific as possible. What programming language is it, what do you specify, what do you expect as the output.

#### Code
```console.lg("Hello World")```

#### User input:
```Explain the following JavaScript Error message to a beginner: Uncaught TypeError: console.lg is not a function <anonymous> debugger eval code:1```

#### ChatGPT response:
Certainly! This error message is coming from JavaScript, and it's telling you that there's a problem in your code. Let's break down the message step by step:

1. **Uncaught TypeError**: This part of the message indicates that a type of error occurred. In JavaScript, there are different types of errors, and a "TypeError" happens when you try to do something with a value that is not of the expected type.

2. **console.lg is not a function**: This is the specific error message. It's saying that there's a problem with a piece of code that is trying to use something called *console.lg*, but JavaScript doesn't recognize *lg* as a valid function or property of the *console* object.<br />**Explanation**: The console object in JavaScript is used for logging messages to the browser's developer console. The normal function to print a message to the console is *console.log()*. However, in this case, it seems like there's a typo or some mistake in the code, where *lg* is used instead of *log*.

3.<br />**<anonymous> debugger eval code:1**: This part of the message provides additional context about where the error occurred. It's saying that the error happened in some code that was evaluated by a debugger, but it doesn't give a specific file or location. This might happen if you're running code in a browser's developer console or if there's some kind of dynamic evaluation happening.

In summary, the error message is telling you that there's a problem in your code where you're trying to use *console.lg*, which JavaScript doesn't recognize. You should double-check your code to make sure you're using the correct function, which is likely *console.log()*.


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