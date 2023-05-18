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

You can include images in your blog posts, using the markdown toolbar in the CloudCannon content editor.

<img src="/screenshot-2023-05-18-at-12-21-06-pm.png" width="2330" height="76" />

<img src="/featured-sunset-get.png" width="1697" />

You can also use the \`Figure\` snippet to include an image with more options. Options include an editable title, caption, attribution, link, and size controls.

{{< figure src="/images/featured-sunset-get.png" title="A different way to include images." alt="An example blog image." caption="A blog image with more options." attr="Photo: Riona MacNamara / CC-BY-CA" >}}