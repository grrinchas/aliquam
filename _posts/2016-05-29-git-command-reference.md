---
layout: post
title: Git command reference - list of top git commands
comments: true
category: Reference
tags:
    - GIT
description: Did you forget Git command or want to see some examples. Here is a list of the most popular Git commands.
---

Every programmer should know about VCS(Version Control System) especially GIT. This post serves as a short reference for most popular GIT commands. They are grouped by functionality and has a short explanation above them. To use them copy any command to your favorite command line tool.  And if you wish to learn more about GIT check [this]({{ site.baseurl }}/tags/git.html) out.

## Table of Contents

- [First Steps](#first)
- [Information](#info)
- [Staging](#staging)
- [Committing](#committing)
- [Branching](#branching)
- [Combining](#combining)

## <a name="first"></a>First Steps

First thing which we have to do after installing GIT is to setup a name with an email and editor. `--global` option tells to set this variable in the `~/.gitconfig` rather locally in `.git/config`. Default is `--local` which sets options for specific repository.

<div class="highlighter-header">asd</div>
{% highlight shell linenos %}
git config --global user.name "John Doe"
git config --global user.email "johndoe@example.com"
git config --global core.editor vim
{% endhighlight %}

<p class='half-baseline'>And if you would like to check already existing settings.</p>

{% highlight shell linenos %}
git config --list
{% endhighlight %}

<p class='half-baseline'>To get specific value.</p>

{% highlight shell linenos %}
git config <option>
{% endhighlight %}

<p class='half-baseline'>To start track specific folder.</p>

{% highlight shell linenos %}
git init
{% endhighlight %}

<p class='half-baseline'>To clone remote repository.</p>

{% highlight shell linenos %}
git clone <url>
{% endhighlight %}

<p class='half-baseline'>If you need any help, these commands will open <code class='highlighter-rouge'>man</code> page. <code class='highlighter-rouge'>verb</code> is command's name.</p>

{% highlight shell linenos %}
git help <verb>
git <verb> --help
man git-<verb>
{% endhighlight %}


## <a name="info"></a>Information

GIT Commands used for getting any kind of information about repository.

### Status
<p class='half-baseline'>To check status of files</p>

{% highlight shell linenos %}
git status
{% endhighlight %}

<p class='half-baseline'>Short version of <code class='highlighter-rouge'>status</code>. Left column indicates status of the staging area and the right - working tree. <code class='highlighter-rouge'>M</code> stands for
modified, <code class='highlighter-rouge'>A</code> stands for added, <code class='highlighter-rouge'>?</code> - not tracked, <code class='highlighter-rouge'>!</code> - ignored files.</p>

{% highlight shell linenos %}
git status -s
git status --short
{% endhighlight %}

<p class='half-baseline'>To show ignored files.</p>

{% highlight shell linenos %}
git status --ignored
{% endhighlight %}

### Comparing

<p class='half-baseline'>To compare files in working directory with staging area. Tells you what you changed but not yet staged.</p>

{% highlight shell linenos %}
git diff
{% endhighlight %}

<p class='half-baseline'>To see what you staged which goes into your next commit. <code class='highlighter-rouge'>--staged</code> and <code class='highlighter-rouge'>--cached</code> are synonyms.</p>

{% highlight shell linenos %}
git diff --staged
git diff --cached
{% endhighlight %}

### History

<p class='half-baseline'>Outputs commit history.</p>

{% highlight shell linenos %}
git log
{% endhighlight %}

<p class='half-baseline'>Show difference in each commit.</p>

{% highlight shell linenos %}
git log -p
{% endhighlight %}

<p class='half-baseline'>Limit output to last entries.</p>

{% highlight shell linenos %}
git log -2
{% endhighlight %}

<p class='half-baseline'>Shows abbreviated stats.</p>

{% highlight shell linenos %}
git log --stat
{% endhighlight %}

<p class='half-baseline'>Formats output. <code class='highlighter-rouge'>oneline</code> - single line,  <code class='highlighter-rouge'>short</code> - adds extra info, <code class='highlighter-rouge'>full</code> - more info, <code class='highlighter-rouge'>fulller</code> - even more.</p>

{% highlight shell linenos %}
git log --pretty=oneline
{% endhighlight %}

<p class='half-baseline'>You can even format output.</p>

{% highlight shell linenos %}
git log --pretty=format:"%h - %an, %ar : %s
{% endhighlight %}

<p class='half-baseline'>Show output since 2 weeks.</p>
{% highlight shell linenos %}
git log --since=2.weeks
{% endhighlight %}


### Inspecting

<p class='half-baseline'>Show all blobs and trees where tree points to.</p>
{% highlight shell linenos %}
git ls-tree master^{tree}
{% endhighlight %}

<p class='half-baseline'>Show all blobs and trees recursively. <code class='highlighter-rouge'>t</code> makes show the SHA-1s of the subtrees themselves, rather than just all the blobs.</p>

{% highlight shell linenos %}
git ls-tree -r -t master^{tree}
{% endhighlight %}

<p class='half-baseline'>Show what type object is. <code class='highlighter-rouge'>SHA-1</code> is an object hash.</p>
{% highlight shell linenos %}
git cat-file -t <SHA-1>
{% endhighlight %}

## <a name="staging"></a>Staging

<p class='half-baseline'>Stage a file/files for commit.</p>

{% highlight shell linenos %}
git add <file>
git add .
{% endhighlight %}

<p class='half-baseline'>To remove staged files, but keep it in the working directory.</p>

{% highlight shell linenos %}
git rm --cached <file>
{% endhighlight %}

<p class='half-baseline'>To unstage file. Undoes any changes since last commit.</p>

{% highlight shell linenos %}
git reset head <file>
{% endhighlight %}

<p class='half-baseline'>Interactive staging</p>

{% highlight shell linenos %}
git add -i
{% endhighlight %}

## <a name="committing"></a>Committing

<p class='half-baseline'>To commit staged files.</p>

{% highlight shell linenos %}
git commit -m "Commit message"
{% endhighlight %}


<p class='half-baseline'>To stage and commit shorthand.</p>

{% highlight shell linenos %}
git commit -a -m "Commit message"
{% endhighlight %}

<p class='half-baseline'>Ammend last commit. For example change commit message or add extra files. It will overrides your last commit.</p>

{% highlight shell linenos %}
git commit --amend
{% endhighlight %}


## <a name="branching"></a>Branching

<p class='half-baseline'>Create new branch. And switch to it.</p>

{% highlight shell linenos %}
git branch <branchName>
git checkout <branchName>
{% endhighlight %}

<p class='half-baseline'>Create new branch. And switch to it.</p>

{% highlight shell linenos %}
git checkout -b <branchName>
{% endhighlight %}

<p class='half-baseline'>List all branches.</p>

{% highlight shell linenos %}
git branch
{% endhighlight %}

<p class='half-baseline'>Delete a branch.</p>
{% highlight shell linenos %}
git branch -d <branchName>
{% endhighlight %}

<p class='half-baseline'>Delete remote branch.</p>
{% highlight shell linenos %}
git push origin :<branchName>
{% endhighlight %}

## <a name="combining"></a>Combining

<p class='half-baseline'>Commands for merging and rebasing</p>

### Merge
<p class='half-baseline'>Merge a branch into current one.</p>

{% highlight shell linenos %}
git merge <branchName>
{% endhighlight %}

