---
layout: post
title: My Jekyll Theme
comments: true
category: portfolio
tags:
    - web-development
    - jekyll
    - theme
---


Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
"<!--more-->"
{% highlight java linenos %}
/**
 * Models a playing die with sides numbered 1 to N.
 * All sides have uniform probablity of being rolled.
 *
 * @author Summer CS 307 class
 */
public class Die
{   public static final int DEFAULT_SIDES = 6;

    private static Random ourRandNumGen = new Random();

    private final int iMyNumSides;
    private int iMyResult;


    /**
     * Default constructor.<p>
     * pre: none<br>
     * post: getNumSides() = DEFAULT_SIDES, getResult() = 1
     */
    public Die()
    {   this(DEFAULT_SIDES);
    }


}// end of Die class
{% endhighlight %}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.

___

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.

**This is strong text (strong)**
_This is Italic text (em)_

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.

> This is block quote it does look nise.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.


* This is list item 1
* This is list item 1
* This is list item 1
    - This is inside list 1
    - This is inside list 1
    - This is inside list 1
    - This is inside list 1
* This is list item 1
* This is list item 1


To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

1. This is list item ordered
2. This is list item ordered
3. This is list item ordered
4. his is list item ordered
5. This is list item ordered

[This is link name](http://google.co.uk)

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

