---
layout: post
title: An example of Aliquam Post
category: Example
comments: true
description: All the features of post layout
tags:
    - Jekyll
---

Curabitur pharetra eget ante at vestibulum. Mauris ullamcorper lacus sed augue molestie, ac consequat erat posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur odio sapien, sollicitudin ut pharetra in, tincidunt vel elit. Aliquam laoreet consectetur mi quis commodo. Vestibulum dui neque, vestibulum a tincidunt at, lacinia sit amet lacus. Nunc non ligula sed odio ultricies ultricies in in lorem.

## Table of Contents

- [Headers](#headers)
- [List](#list)
- [Code](#code)
- [Progress](#progress)
- [Misc](#misc)
- [Image](#image)

## <a name="headers"></a>Headers

# This is H1 header

## This is h2 header

### This is h3 header

## <a name="list"></a>Lists

- List item number 1
    - Nested list item number 1
    - Nested list item number 2
    - Nested list item number 3
- List item number 2
- List item number 3
- List item number 4

1. List item number 1
    1. Nested list item number 1
    1. Nested list item number 2
    1. Nested list item number 3
1. List item number 2
1. List item number 3
1. List item number 4



## <a name="code"></a>Code


<div class="highlighter-header">JAVA</div>
{% highlight java linenos %}
public class DemoClass
{
    private int x;

    public DemoClass() {
        x = 0;
    }
    // Comment
    public DemoClass(int x) {
        this.x = x;
    }

    public void i1() {
        return;
    }
}
{% endhighlight%}

<div class="highlighter-header">HTML/CSS</div>
{% highlight html linenos %}
<!DOCTYPE html>
<html>
<head>
   <style>
      p {
          border-style: solid;
          border-bottom: thick dotted #ff0000;
        }
   </style>
</head>
<body>
    <p>This is some text in a paragraph.</p>
</body>
</html>
{% endhighlight %}


## <a name="progress"></a>Progress bar

<div id="skills">
<div>
<p><span>java</span><span>80%</span></p>
<progress value="80" max="100"></progress>
</div>
</div>

## Misc

Bold text: __I am bold__

Italic text: *I am italic*

Inline code: `html`, `css`, `git clone <url>`.

Link text: [more examples](http://www.dennis-grinch.co.uk)

Abbreviation: <abbr title='Content Management System'>CMS</abbr>

## Image

![image example]({{ site.baseurl }}/resources/images/main_front.jpg)

# For more post examples [click here](http://www.dennis-grinch.co.uk)

