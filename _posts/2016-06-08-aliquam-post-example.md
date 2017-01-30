---
layout: post
title: A quick view of aliquam post
category: example
comments: true
description: This page is only for demonstration purposes. It shows the styling of all the components found in Aliquam theme.
tags:
    - lorem
    - ipsum
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus luctus quam in gravida.
Mauris rutrum ullamcorper pellentesque. Aliquam posuere euismod erat, ac consequat leo ullamcorper non. 
Vestibulum commodo nibh justo. Praesent gravida elementum sapien, ut convallis massa bibendum nec.
Suspendisse interdum urna condimentum quam vestibulum, sit amet feugiat quam laoreet. 


>The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.
><footer><cite> - Bill Gates</cite></footer>
{: .blockquote cite="http://www.worldwildlife.org/who/index.html" }

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
Nunc orci purus, egestas a erat pulvinar, fringilla sodales turpis. Fusce luctus eu eros at maximus. 

## This is h2 header

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
Nunc orci purus, egestas a erat pulvinar, fringilla sodales turpis. Fusce luctus eu eros at maximus. 


<a name="definition-dfa"></a>
{: .bottomless }

{::options parse_block_html="true" /}

<div class="env-header">
Definition {{ site.definitions[0].number }} 
</div>

<div class="definition alert">
{{ site.definitions[0].content }}
</div>

{::options parse_block_html="false" /}


Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
Nunc orci purus, egestas a erat pulvinar, fringilla sodales turpis. Fusce luctus eu eros at maximus. 

{::options parse_block_html="true" /}

<div class="info alert">
**INFO:** This is info message. `This is code`. [This is link](#). _This is italic_.
</div>

Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. 

<div class="warning alert">
**WARNING:** This is warning message. `This is code`. [This is link](#). _This is italic_.
</div>

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

<div class="note alert">
**NOTE:** This is note message. `This is code`. [Definition 1.0](#definition-dfa). _This is italic_.
</div>

<div class="success alert">
#### This is success message! ####

`This is code`. [This is link](#). _This is italic_.

Mauris sed augue molestie, git clone ac consequat erat posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur odio sapien, sollicitudin ut pharetra in, tincidunt vel elit.

* List item number 1
    * Nested list item number 1
    * Curabitur pharetra eget ante at vestibulum. Mauris ullamcorper lacus sed augue molestie, ac consequat erat posuere.
* List item number 2
* List item number 3

Curabitur pharetra eget ante at vestibulum.  
</div>

{::options parse_block_html="false" /}

### This is h3 header

Curabitur pharetra eget ante at vestibulum. Mauris ullamcorper lacus sed augue molestie, ac consequat erat posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur odio sapien, sollicitudin ut pharetra in, tincidunt vel elit.

<div class="env-header">HTML/CSS</div>
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


Class aptent taciti `sociosqu ad litora torquent` per conubia nostra, per inceptos himenaeos. 
Nunc orci purus, egestas a erat pulvinar, fringilla sodales turpis. `Fusce luctus` eu eros at maximus. 

- List item number 1
    - Nested list item 1
    - Nested list item 2
        - Deep nested list item 1ante at vestibulum. Mauris ullamcorper lacus sed augue molestie.
        - Deep nested list item 2
    - Nested list item number 3
- List item number 3

1. List item number 1
    1. Nested list item number 1
    2. Curabitur pharetra eget ante at vestibulum. Mauris ullamcorper lacus sed augue molestie, ac consequat erat posuere.
2. List item number 2
3. List item number 3


#### This is h4 header

Curabitur pharet<sub>r</sub>a eget ante at vestibulum. Mauris ullamcorper lacus sed augue molestie, ac consequat erat posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur odio sapien, sollicitudin ut pharetra in, tincidunt vel elit.

{::options parse_block_html="true" /}

<figure class="table">

| Header One     | Header Two | Header Three | Head |
| ------------- | ------------- | ----------- | -------- |
| Item One       | Item Two       | Item Three   | Long Item Four   |
| Item One       | Item Two       | Item Three   | Long Item Four   |
| Item One       | Item Two       | Item Three   | Long Item Four   |
| Item One       | Item Two       | Item Three   | Long Item Four   |
| Item One       | Item Two       | Item Three   | Long Item Four   |
| Item One       | Item Two       | Item Three   | Long Item Four   |
| Item One       | Item Two       | Item Three   | Long Item Four   |

<figcaption>
**Table 1:** Eestie, ac consequat erat posuere. 
</figcaption>
</figure>

{::options parse_block_html="false" /}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus luctus quam in gravida.
Mauris rutrum ullamcorper pellentesque. Aliquam posuere euismod erat, ac consequat leo ullamcorper non. 

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

ac consequat erat posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur odio sapien, sollicitudin ut pharetra in, tincidunt vel elit.

<figure>
<img alt="image test" src="/resources/images/main_front.jpg"/>
<figcaption>
<strong>Figure 1: </strong>Curabitur pharetra eget ante at vestibulum. Mauris ullamcorper lacus sed augue molestie, ac consequat erat posuere. 
</figcaption>
</figure>

Math: Inline math $$\sum_{j=1}^n x_i y_j \phi(e_i, e_j) $$

Bold text: __I am bold__

Italic text: *I am italic*

Inline code: `html`, `css`, `git clone <url>`.

Link text: [more examples](http://www.dennis-grinch.co.uk)

Abbreviation: <abbr title='Content Management System'>CMS</abbr>
