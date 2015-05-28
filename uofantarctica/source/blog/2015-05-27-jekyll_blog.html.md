---
title: Bootstrapping a Personal/Organizational GitHub Page with Jekyll 
date: 2015-05-27 19:01 UTC
tags:
---


## Overview

I created a git repository, [https://github.com/gpwclark/user.github.io](https://github.com/gpwclark/user.github.io), that is a bootstrap based static site made with jekyll. This project is meant to serve as a template for the creation of any 'your-gh-username.github.io' project page. Below I talk a bit about [jekyll](http://jekyllrb.com/), what it does, and what I did to make this project work with [bootstrap](http://getbootstrap.com/).


## Intro
Jekyll is a great ruby-based static site generation tool. It is especially useful because GitHub pages uses jekyll by default. GitHub actually allows its users to host static sites for themselves, their organizations, or their projects as subdomains of .github.io. We are going to focus on personal sites. Everyone can get a personal site, the url is "githubuser.github.io". Jekyll users have the upperhand here because GitHub will automatically compile your site for you. This is an easy and desirable solution, especially since jekyll is a great tool.

### Setup
First install jekyll: [http://jekyllrb.com/docs/installation/](http://jekyllrb.com/docs/installation/).

Then:

```
$ jekyll new myblog  
$ cd myblog
```

If you run the command:

```
$ tree ./ # you will see...

./
├── about.md
├── _config.yml
├── css
│   └── main.scss
├── feed.xml
├── _includes
│   ├── footer.html
│   ├── header.html
│   └── head.html
├── index.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── LICENSE
├── _posts
│   └── 2015-05-26-welcome-to-jekyll.markdown
├── README.md
└── _sass
    ├── _base.scss
        ├── _layout.scss
            └── _syntax-highlighting.scss
```

### Getting to know jekyll
There are two folders you need to pay particular attention to:

*  _includes
* _layouts

Jekyll is just a text transformation engine. It looks for .html and .md files that are in the root directory/user created 
directory, it then applies a layout, and can directly include text from any file in the _includes directory. The output, by default, goes into the _site directory (created when the site is built). The _site directory has the same directory structure as the jekyll directory itself, minus all of the files prepended with an underscore. To understand the text transformation powers of jekyll run:

```
$ jekyll build #this compiles your site as it is to the _site directory
$ tree _site

_site
├── about
│   └── index.html
├── css
│   └── main.css
├── feed.xml
├── index.html
├── jekyll
│   └── update
│       └── 2015
│           └── 05
│               └── 26
│                   └── welcome-to-jekyll.html
├── LICENSE
└── README.md
```

As you can see, every file and folder that does not have an underscore prepended to it appeared in the _site directory. Understanding what happened to index.html and about.md will fully explain how jekyll works. Jekyll starts with a layout. The default layout is simple:

```
<!DOCTYPE html>
<html>

  {% include head.html %}

  <body>

    {% include header.html %}

    <div class="page-content">
      <div class="wrapper">
        {{ content }}
      </div>
    </div>

    {% include footer.html %}

  </body>

</html>
```
As you can see, two important jekyll things are being done here: 

* The include syntax with '{' and '%' above looks for files in the _includes 
  directory. The three files it includes are head.html, header.html, and 
  footer.html. The text of these files is included inline.
  These three files are the core of what keeps your site's look 
  consistent, they are three of the files we will be adding bootstrap code to,
  and it is natural they will be included in any file with the "default" layout. 
* The double curly brace syntax around the line {{ content }} is where jekyll
  sticks the body of the file it is transforming.

This means that the index.html in the root directory was transformed, into an html file that looks just like default.html, but with all of the text from the three files in the include statements, as well as the body of the raw or un-transformed index.html file where the content tag is located.

By default the index.html file looks like this:

```
---
layout: default
---

<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
```

This raw or un-transformed html file that lives in the root of the jekyll directory is what appears in the {{ content }} tag of the default.html. The only missing link is the syntax in the first three lines. Jekyll calls everything between the triple --- frontmatter. A file with frontmatter indicates that some transformations need to be applied before the file is "done" and can be dropped into the _site directory. The frontmatter in index.html just says 'layout: default'. There are many possible values that frontmatter can take on ([see the docs](http://jekyllrb.com/docs/frontmatter/)), but 'layout' is a particularly important variable to set in frontmatter because it specifies what file should serve as the template or layout from the _layouts folder. This of course means that the value of the layout frontmatter variable must correspond to the name of a file in the _layouts directory.


## Pages and posts

Jekyll is built for blogging, so talking about posts is important and of course very easy to understand, but pages are also important in sites, and jekyll does those well too.

### Pages
In the default jekyll directory, there is also an about.md file. In the transformation (pictured above), this about.md file turned into:

```
├── about
│   └── index.html
```

and it looked like this:

```
---
layout: page
title: About
permalink: /about/
---

This is the base jekyll theme. You can find out more info about customizing your jekyll theme, as well as basic jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/)

You can find the source code for the jekyll new theme at: [github.com/jglovier/jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for jekyll at [github.com/jekyll/jekyll](https://github.com/jekyll/jekyll)
```

There are three frontmatter variables here. The last two are easy to explain, 'title' is the page title, it can be referenced by a variable, ([see the docs](http://jekyllrb.com/docs/variables/)), and 'permalink' is what specifies the behavior of the transformed file: about.md was in the root directory, but it becomes /about/index.html because of the permalink variable's value of '/about/. The 'layout' frontmatter variable here is 'page', so what is the default page layout?

```
---
layout: default
---
<div class="post">

  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>

  <article class="post-content">
    {{ content }}
  </article>

</div>
```

This file, page.html, is itself a layout. It is different from default.html because it has frontmatter. This means that jekyll supports nested layouts. You can define default.html to be the barebones html that all of your html files need, then you can define pages or groups of pages, that have some additional html specific to their type, and as long as they include the frontmatter variable 'layout' set to default, they will appear consistently.

### Posts
Jekyll is designed to handle posts so it is very much a 'solved' problem. All posts go into the _posts folder. Post files are named YEAR-MONTH-DAY-title.markdown. They must also include frontmatter, followed by the markdown that serves as the body of the post:

```
---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-05-26 20:45:48
categories: jekyll update
---
You’ll find this post in your `_posts` directory.
...
...
```

Since it is explained so well I must defer to [jekyll's documentation](http://jekyllrb.com/docs/posts/) for all post related learning. I will know focus on building a very basic site.

### Jekyll and Twitter Bootstrap
Twitter Bootstrap is a very easy to use library that allows for very intuitive and pretty websites to be built with minimal effort. To use the library we need to edit the head.html file in the _includes directory. It goes in the head.html directory because we are going to stick with the default.html layout as the base for our site. Given this, we need all of the bootstrap files to be available on every page. The bootstrap site we are going to build will have a home page, an about page, and a page that lists all of the blog posts from your _posts folder. To navigate between those pages, we will use a navbar.

First we need to add the following to _includes/head.html:

```
<script src="http://code.jquery.com/jquery.min.js"></script>
<link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
<script src="http://getbootstrap.com/dist/js/bootstrap.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/holder/2.3.1/holder.min.js"></script>
```

This ensures that all of the css/js we need for bootstrap will be available to us. The rest of the work I did for you:

```
git clone https://github.com/gpwclark/user.github.io
```
The site can also be previewed at [http://gpwclark.github.io/user.github.io/](http://gpwclark.github.io/user.github.io/)

If you run jekyll serve in that directory you will see the basic site we were building up to. The head.html, header.html, and footer.html have some default bootstrap code in them. Most importantly, header.html has the code for the navbar. The navbar has three links, home, about, and blog. These correspond to index.html, about.md, and blog.md in the root directory. The index.html file has some more baked in bootstrap code, and the blog.md file uses a feature of Liquid, the templating engine jekyll uses, to list all of the posts, currently, just the intro post.

This repo is good enough to serve as a base for your personal page. Create a repo named yourghusername.github.io and copy the contents of user.github.io in there. When you commit the changes, GitHub will build it for you and host it at yourghusername.github.io.

Make sure to reference the [jekyll site](http://jekyllrb.com/) to fill in the rest of the gaps in your knowledge about jekyll. Twitter also has [great documentation](http://getbootstrap.com/).
