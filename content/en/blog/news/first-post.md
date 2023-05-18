---
_schema: post
date: 2018-10-06T00:00:00Z
title: Easy documentation with Docsy
linkTitle: Announcing Docsy
description: >-
  The Docsy Hugo theme lets project maintainers and contributors focus on
  content, not on reinventing a website infrastructure from scratch
author: Riona MacNamara ([@rionam](https://twitter.com/bepsays))
weight: 1
resources:
  - src: '**.{png,jpg}'
    title: 'Image #:counter'
    params:
      byline: 'Photo: Riona MacNamara / CC-BY-CA'
---
**This is a typical blog post that includes images.**

The front matter specifies the date of the blog post, its title, a short description that will be displayed on the blog landing page, and its author.

## Including images

Here's an image (`featured-sunset-get.png`) that includes a byline and a caption.

The front matter of this post specifies properties to be assigned to all image resources:

```
resources:
- src: "**.{png,jpg}"
  title: "Image #:counter"
  params:
    byline: "Photo: Riona MacNamara / CC-BY-CA"
```

To include the image in a page, specify its details like this:

The image will be rendered at the size and byline specified in the front matter.
