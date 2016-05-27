---
layout: post
title: Git Command Reference
comments: true
category: reference
tags:
    - git
---

Every programmer should know about VCS(Version Control System) especially GIT. This post serves as reference
for GIT commands.

## Table of Contents
- [General](#General)

## General
First thing which we have to do after installing GIT is to setup a name with an email and editor:
{% highlight shell linenos %}
git config --global user.name "John Doe"
git config --global user.email "johndoe@example.com"
git config --global core.editor vim
{% endhighlight %}

And if you would like to check already existing settings:
{% highlight bash linenos %}
git config --list
{% endhighlight %}
