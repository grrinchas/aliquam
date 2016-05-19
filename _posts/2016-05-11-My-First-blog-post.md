---
layout: post
title: My First Blog Post
category: blog
---

12345678911234567891234567891234567893698741236987412369874123698741236987
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.


{% highlight java %}
import java.util.Random;

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


    /**
     * Create a Die with numSides sides<p>
     * pre: numSides > 1<br>
     * post: getNumSides() = numSides, getResult() = 1<br>
     * An exception will be generated if the preconditions are not met
     */
    public Die(int numSides)
    {   assert numSides > 1 : "Violation of precondition: numSides = " + numSides + "numSides must be greater than 1";

        iMyNumSides = numSides;
        iMyResult = 1;
        assert getResult() == 1 && getNumSides() == numSides;
    }


    /**
     * Create a Die with numSides and top side and result set to result<p>
     * pre: numSides > 1, 1 <= result <= numSides<br>
     * post: getNumSides() = numSides, getResult() = 1<br>
     * An exception will be generated if the preconditions are not met
     */
    public Die(int numSides, int result)
    {   assert numSides > 1 && 1 <= result && result <= numSides : "Violation of precondition";

        iMyNumSides = numSides;
        iMyResult = result;
    }


    /**
     * roll this Die. Every side has an equal chance of being the new result<p>
     * pre: none<br>
     * post: 1 <= getResult() <= getNumSides()
     * @return the result of the Die after the roll
     */
    public int roll()
    {   iMyResult = ourRandNumGen.nextInt(iMyNumSides) + 1;

        assert ( 1 <= getResult() ) && ( getResult() <= getNumSides() );

        return iMyResult;
    }


    /**
     * return how many sides this Die has<p>
     * pre: none<br>
     * post: return how many sides this Die has
     * @return the number of sides on this Die
     */
    public int getNumSides()
    {   return iMyNumSides; }


    /**
     * get the current result or top number of this Die<p>
     * pre: none<br>
     * post: return the number on top of this Die
     * @return the current result of this Die
     */
    public int getResult()
    {   return iMyResult;   }


    /**
     * returns true if this Die and the parameter otherObj are equal<p>
     * pre: none<br>
     * post: return true if the parameter is a Die object with the same number of sides as this Die and currently has the same result.
     * @return true if the the two Dice are equal, false otherwise
     */
    public boolean equals(Object otherObj)
    {   boolean result = true;
        if(otherObj == null)
            result = false;
        else if(this == otherObj)
            result = true;
        else if(this.getClass() != otherObj.getClass())
            result = false;
        else
        {   Die otherDie = (Die)otherObj;
            result = this.iMyResult == otherDie.iMyResult
                && this.iMyNumSides == otherDie.iMyNumSides;
        }
        return result;
    }


    /**
     * returns a String containing information about this Die<p>
     * pre: none<br>
     * post: return a String with information about the current state of this Die
     * @return: A String with the number of sides and current result of this Die
     */
    public String toString()
    {   return "Num sides " + getNumSides() + " result " + getResult();
    }


}// end of Die class
{% endhighlight %}

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.

You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.

You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.

You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.