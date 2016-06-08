---
layout: post
title: Hello World
comments: true
category: portfolio
tags:
    - web-development
    - jekyll
    - theme
---

This is the first line.

## Title 1 ##


first link
[Link to google](http://google.co.uk)
continue


### title 2 ###

**Bold**

_ Italic _

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

I love Vera!

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

last line.
