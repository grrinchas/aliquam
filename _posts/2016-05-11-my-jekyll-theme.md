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

Paragraph ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

## Header h2 ##


Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
[Link to google](http://google.co.uk)
Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.


### Header h3 ###

**This is strong text (strong)**

_This is Italic text (em)_

[Link to google](http://google.co.uk)

> This is block quote.

`HTML code example`

* This is list item 1
* This is list item 2
* This is list item 3
    - This is inside list 1
    - This is inside list 2
* This is list item 4
    1. Ordered list item
    2. Ordered list item
    3. Ordered list item
* This is list item 5

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.E

<p class="highlighter-header">HTML</p>
{% highlight html linenos %}
<article>
    <header>
        <h1 ><a class="h1_link" href="/posts/1999/02/css-tricks">CSS tricks</a></h1>
        <time datetime="28 02 1999"> 28 February, 1999 </time>
    </header>
    <a class="comment_count" href="/posts/1999/02/css-tricks#disqus_thread" data-disqus-identifier="/posts/1999/02/css-tricks"></a>
</article>
{% endhighlight %}



## Another header h2 ##

Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.

<p class="highlighter-header">JAVA</p>
{% highlight java linenos %}
/*
  Get Tail Map from Java TreeMap example
  This Java Example shows how to get the portion of TreeMap whose keys
  are grater than or equal to the specified key using tailMap method
  of Java TreeMap class.
*/

import java.util.SortedMap;
import java.util.TreeMap;

public class GetTailMapFromTreeMapExample {

  public static void main(String[] args) {

    //create TreeMap object
    TreeMap treeMap = new TreeMap();

    //add key value pairs to TreeMap
    treeMap.put("1","One");
    treeMap.put("3","Three");

    /*
      To get a Tail Map from Java TreeMap use,
      SortedMap tailMap(Object fromKey) method of Java TreeMap class.

      Please note that, the SortedMap returned by this method is backed by
      the original TreeMap. So any changes made to SortedMap will be
      reflected back to original TreeMap.
    */

    SortedMap sortedMap = treeMap.tailMap("2");

    System.out.println("Tail Map Contains : " + sortedMap);
  }
}
{% endhighlight %}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.

