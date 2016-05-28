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
- [Commiting](#commiting)
- [Branching](#branching)
- [Merging](#merging)

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

{% highlight d linenos %}
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

GIT Commands used for getting any kind of information about repository.

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

To compare files in working directory with staging area. Tells you what you changed but not yet staged.

{% highlight shell linenos %}
git diff
{% endhighlight %}

To see what you staged which goes into your next commit. `--staged` and `--cached` are synonyms.

{% highlight shell linenos %}
git diff --staged
git diff --cached
{% endhighlight %}

### History

Outputs commit history.

{% highlight shell linenos %}
git log
{% endhighlight %}

Show difference in each commit.

{% highlight shell linenos %}
git log -p
{% endhighlight %}

Limit output to last entries.

{% highlight shell linenos %}
git log -2
{% endhighlight %}

Shows abbreviated stats.

{% highlight shell linenos %}
git log --stat
{% endhighlight %}

Formats output. `oneline` - single line,  `short` - adds extra info, `full` - more info, `fulller` - even more.

{% highlight shell linenos %}
git log --pretty=oneline
{% endhighlight %}

You can even format output.

{% highlight shell linenos %}
git log --pretty=format:"%h - %an, %ar : %s
{% endhighlight %}

Show output since 2 weeks.
{% highlight shell linenos %}
git log --since=2.weeks
{% endhighlight %}


### Inspecting

Show all blobs and trees where tree points to.
{% highlight shell linenos %}
git ls-tree master^{tree}
{% endhighlight %}

Show all blobs and trees recursively. `t` makes show the SHA-1s of the subtrees themselves, rather than just
all the blobs.
{% highlight shell linenos %}
git ls-tree -r -t master^{tree}
{% endhighlight %}

Show what type object is. `SHA-1` is an object hash.
{% highlight shell linenos %}
git cat-file -t <SHA-1>
{% endhighlight %}

## <a name="staging"></a>Staging

Stage a file/files for commit.

{% highlight shell linenos %}
git add <file>
git add .
{% endhighlight %}

To remove staged files, but keep it in the working directory.

{% highlight shell linenos %}
git rm --cached <file>
{% endhighlight %}

To unstage file. Undoes any changes since last commit.

{% highlight shell linenos %}
git reset head <file>
{% endhighlight %}

Interactive staging

{% highlight shell linenos %}
git add -i
{% endhighlight %}

## <a name="commiting"></a>Commiting

To commit staged files.

{% highlight shell linenos %}
git commit -m "Commit message"
{% endhighlight %}


To stage and commit shorthand.

{% highlight shell linenos %}
git commit -a -m "Commit message"
{% endhighlight %}

Ammend last commit. For example change commit message or add extra files. It will overrides your last commit.

{% highlight shell linenos %}
git commit --amend
{% endhighlight %}


## <a name="branching"></a>Branching

Create new branch. And switch to it.

{% highlight shell linenos %}
git branch <branchName>
git checkout <branchName>
{% endhighlight %}

Create new branch. And switch to it.

{% highlight shell linenos %}
git checkout -b <branchName>
{% endhighlight %}

List all branches.

{% highlight shell linenos %}
git branch
{% endhighlight %}

Delete a branch.
{% highlight shell linenos %}
git branch -d <branchName>
{% endhighlight %}

## <a name="merging"></a>Merging

Merge a branch into current one.

{% highlight shell linenos %}
git merge <branchName>
{% endhighlight %}

