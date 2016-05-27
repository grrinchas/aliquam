---
layout: post
title: Git Command Reference
comments: true
category: reference
tags:
    - git
---

Every programmer should know about VCS(Version Control System) especially GIT. This post serves as reference for GIT commands. They are grouped by functionality and has short explanation above them. To learn more about GIT check [this]({{ site.baseurl }}/tags/git.html) out.

## Table of Contents
<p></p>
- [General](#general)
- [Importing](#importing)
- [Get Information](#info)
- [Staging](#staging)

## <a name="general"></a>General

First thing which we have to do after installing GIT is to setup a name with an email and editor. `--global` option tells to set this variable in the `~/.gitconfig` rather locally in `.git/config`. Default is `--local` which sets options for specific repository.

{% highlight shell linenos %}
git config --global user.name "John Doe"
git config --global user.email "johndoe@example.com"
git config --global core.editor vim
{% endhighlight %}


And if you would like to check already existing settings.

{% highlight shell linenos %}
git config --list
{% endhighlight %}

To get specific value.

{% highlight shell linenos %}
git config user.name
{% endhighlight %}

If you need any help, these commands will open `man` page. `verb` is command's name.

{% highlight shell linenos %}
git help <verb>
git <verb> --help
man git-<verb>
{% endhighlight %}


## <a name="importing"></a>Importing

To start track specific folder.

{% highlight shell linenos %}
git init
{% endhighlight %}

To clone remote repository.

{% highlight shell linenos %}
git clone <url>
{% endhighlight %}

## <a name="info"></a>Get Information

### Status
To check status of files

{% highlight shell linenos %}
git status
{% endhighlight %}

Short version of `status`. Left column indicates status of the staging area and the right - working tree. `M` stands for
modified, `A` stands for added, `?` - not tracked, `!` - ignored files.

{% highlight shell linenos %}
git status -s
git status --short
{% endhighlight %}

To show ignored files.

{% highlight shell linenos %}
git status --ignored
{% endhighlight %}

### Comparing

To compare files in working directory with staging area. Which tells you what you changed but not staged yet.

{% highlight shell linenos %}
git diff
{% endhighlight %}

To see what you staged which goes into your next commit.

{% highlight shell linenos %}
git diff --staged
{% endhighlight %}

## <a name="staging"></a>Staging

Stage a file/files for commit.

{% highlight shell linenos %}
git add <file>
git add .
{% endhighlight %}











