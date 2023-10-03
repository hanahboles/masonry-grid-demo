# Summary

This is a simple image search application built using React, with a pinterest-like interface. 

Note: The default search is Paros - one of my favorite places I've traveled to!

## Concepts Covered

* Experimental css feature, masonry layout, with fallback implementation
* axios library
* async / await
* Intersection observer (coming soon)

## Want to see it in action?

Link to [live demo](https://hanahboles.github.io/masonry-grid-demo/)

## Steps to enable the experimental CSS feature

Masonry layout is an experimental feature that is only available on Firefox when manually enabled. To do so, open Firefox and type in `about:config` into the URL bar. Enable the flag for `layout.css.grid-template-masonry-value.enabled`. When you open the page in Firefox now, and compare to other browser, you will notice that the masonry version flows from left to right. The fallback layout is using a multi column layout, which flows from top to bottom. 