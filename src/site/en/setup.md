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

{{h2('GitHub')}}

{{video("https://fhpcloud.fh-potsdam.de/s/BBMqcBicJ6QLaeE/download/en_setup_git.mp4", "/images/thumbnails/en_setup_git.png", "en_setup_git", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/W9QgRiapdEcWT5P
en: https://fhpcloud.fh-potsdam.de/s/BBMqcBicJ6QLaeE
-->

{{download('/images/downloads/git.pdf', 'GIT Introduction (PDF)')}}

GitHub is the largest plattform for collaboratively working on code. It's build on top of the version control system [git](https://git-scm.com/). Alternative plattforms that make use of git are for example [bitbucket](https://bitbucket.org/product) and [GitLab](https://about.gitlab.com/). Many of you will know tools like Google Docs. The big difference is, that your are not editing files at the same time. Instead everybody downloads a copy of the file and when you are done editing you send it back into the cloud and **git** will make sure that your changes are being synchronized with the changes other people have been applying in the meantime. This can sometimes lead to so called *merge conflicts*. Then you have to help git to figure out what to keep and what to change. Each project is managed in a so called *repository* or short *repo*, In this class we use **git** primarily so that you have a copy of this repo in your own account. So you can change everything, without in fear of breaking this original repo. In addition you can still get any updates from this repo synchronized with your copy.

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

> It's highly likely you won't need the following for this seminar.

If there should be any changes to the original repo that you want to include in your personal copy, we need to use the command line. Sadly this cannot be done with the GitHub Desktop App. Open the repo in VS Code. If you are using the desktop app, you can right click on the repo to do this. Then open a new terminal in VS Code (Menu > Terminal > New Terminal). Now type the following commands (press enter after every line):

```
git fetch upstream
git checkout main
git merge upstream/main
git push
```

<br/>

It can happen, that after line 3 you will receive a merge conflict. Switch back to the github desktop app and the app will let you know what files to review.

**Note**: If you are doing something similar on an older repo you will notice that line 2 and 3 will produce errors, because *main* does not exist. A while ago [Github changed](https://github.com/github/renaming) the default name of the primary branch from *master* to *main*. But older repos still use the old name.

{{h2('GitLab at the University of Potsdam (only for students of FH Potsdam and Uni Potsdam)', 'GitLab Potsdam')}}

> **Important**: This section is **only for students of the University of Applied Sciences Potsdam (FH Potsdam) and the University of Potsdam**. You can only sign in to the GitLab instance at [gitup.uni-potsdam.de](https://gitup.uni-potsdam.de) with a university account. If you are not enrolled at one of these institutions, skip this section and use the GitHub route (see above).

Besides GitHub we also use the GitLab instance of the University of Potsdam. The workflow is similar to GitHub: you create a local copy of the *learning-parametric-design* repo, work on it locally and then push your changes back to the cloud. You need the [GitHub Desktop App](https://desktop.github.com/) (see above). It works with GitLab too, since both are based on **git**.

#### 1. First sign-in (Single Sign-On)

Open [gitup.uni-potsdam.de](https://gitup.uni-potsdam.de) in your browser. You do not need to create a new account. Instead you sign in with the single sign-on (SSO) service of your university. Your account is created automatically on your first sign-in.

1. On the start page choose the SSO / university login.
2. Select your institution (FH Potsdam or University of Potsdam) and sign in with your usual university credentials.
3. If asked, confirm that your data may be shared with GitLab.

{{ img('gitlab-01-login.png', 'Step 1: Start page of gitup.uni-potsdam.de with the SSO login') }}

{{ img('gitlab-02-sso.png', 'Step 2: Select your institution and sign in with your university credentials') }}

{{ img('gitlab-03-dashboard.png', 'Step 3: The GitLab dashboard after a successful sign-in') }}

Make a note of your GitLab **username** (under your avatar > *Edit profile* or in the URL of your profile). You will need it later in the GitHub Desktop App.

#### 2. Find the learning-parametric-design repository

Open the [*learning-parametric-design*](https://gitup.uni-potsdam.de/x_sebastian-meier/learning-parametric-design) repository. On the project page you will find the **Fork** button at the top right.

#### 3. Fork the repository

The original repository belongs to me, so you cannot push your own changes to it. Instead you create a **fork**: a personal copy of the repository in your own GitLab account. The fork stays connected to the original, but you can work freely in it and push changes without breaking anything. You then clone your fork (not the original) to your computer.

1. On the project page click **Fork**.
2. Under *Project URL* select your own namespace (your username). You can keep the project name.
3. Set *Visibility level* to **Public**.
4. Click **Fork project**.
5. You now land on the page of your fork. Click the blue **Code** (or *Clone*) button and copy the URL under **Clone with HTTPS**.

> **Important: your fork must be public.** This is the only way for me to see your code and help you with your projects, and it lets participants learn from one another. It also means everybody can see what you push to the fork, so don't put anything secret in it (passwords, tokens, personal data). If you don't like that, simply delete the fork after the semester.

{{ img('gitlab-04-fork.png', 'Step 4: Create the fork with visibility level "Public" (blue highlighted button)') }}

{{ img('gitlab-05-clone.png', 'Step 5: Copy the HTTPS URL of your fork') }}

#### 4. Clone the fork with GitHub Desktop

1. Open the GitHub Desktop App.
2. Choose **File > Clone Repository...**.
3. Switch to the **URL** tab, paste the copied HTTPS URL and choose a local folder where the copy should be stored.
4. Click **Clone**.

If you are asked for a username and password (e.g. because the repo is not public), first create the access token (next step) and then come back here. As username enter your GitLab username, as password the token.

{{ img('gitlab-06-github-desktop-clone.png', 'Step 6: Cloning via the URL tab in GitHub Desktop') }}

Then open the local folder in VS Code as usual. To get new changes from the cloud, click **Fetch origin** or **Pull origin** in GitHub Desktop.

#### 5. Create an access token

To upload changes to GitLab (*push*), your university password is not enough, because you sign in via SSO. Instead you create a **personal access token** that you use in place of a password in GitHub Desktop.

1. In GitLab click your avatar and choose **Edit profile**.
2. In the left navigation choose **Access** > **Access Tokens** (or *Personal access tokens*).
3. Click **Generate Token** and **Generate legacy token**.
4. Enter a name (e.g. *github-desktop*) and an expiration date (e.g. the end of the semester).
5. Select the scopes **read_repository** and **write_repository**.
6. Click **Create personal access token**.
7. **Copy the token immediately.** It is only shown once. Store it, e.g., in a password manager.

> **Security**: Treat the token like a password. Do not share it, do not store it in your code and do not commit it to a repository. If you lose the token or it becomes public, revoke it in GitLab (*Revoke*) and create a new one.

{{ img('gitlab-08-profile.png', 'Step 7: The profile menu') }}

{{ img('gitlab-09-access-tokens.png', 'Step 8: The access token overview') }}

{{ img('gitlab-10-token-form.png', 'Step 9: Set name, expiration date and scopes of the token') }}

{{ img('gitlab-11-token-created.png', 'Step 10: The token is only shown once and must be copied') }}

#### 6. Use the token in GitHub Desktop

1. Make a small change in the local repo, e.g. in a file, and save it. GitHub Desktop shows the change in the *Changes* tab.
2. Enter a short description at the bottom left and click **Commit to main**.
3. Click **Push origin** at the top.
4. GitHub Desktop now asks for your credentials. Enter your GitLab username as **username** and the copied access token as **password**.
5. Confirm. GitHub Desktop remembers the credentials, so you will not need to enter them again until the token expires.

{{ img('gitlab-12-commit.png', 'Step 11: Commit a change') }}

{{ img('gitlab-13-credentials.png', 'Step 12: Push commit') }}

{{ img('gitlab-14-push-success.png', 'Step 13: Username & password (access token)') }}

If the push fails with an authentication error, the token has usually expired, the scopes are missing or the username is wrong. In that case create a new token with the scopes listed above.

### Let's go
Sorry, for this rather boring start. From here on, its going to be a lot more fun.