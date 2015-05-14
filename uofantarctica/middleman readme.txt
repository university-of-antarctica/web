middleman

startup:
  clone project
  switch to middleman branch
  >> cd uofantarctica
  >> bundle install
  >> middleman server



file structure:
  source folder:
    images folder
    javascripts folder
    stylesheets folder
    root directory

editing:
  modify file in source folder

testing:
  >> middleman server
  navigate to localhost:4567
  editing and saving a file automatically changes the page!

deploying:
  >> middleman deploy



ruby shit
  lines like this go in your Gemfile
  gem "middleman-deploy"
  gem 'middleman-bootstrap-navbar'
  gem "bootstrap-sass"
  gem "jquery-middleman"

  install everything in your gemfile if you don't have it installed yet
  ( gem install xxxxx installs it for ruby itself, but each project has different dependencies that it uses)
  >> bundle install 



  Explanations

  config.rb
    Apparently this uses the Compass framework.

    We can set some settings for what to do for development versions vs deployment versions.  As simple as configure "development do activate :livereload end"

    We set the base directories for stylesheets, javascript files, images here

    we activate extensions for middleman here.  In our case, jquery, relative_assets, bootstrap_navbar, livereload.




  layout.erb.html
    We use this to design the layout of our pages.  There can be multiple layouts but I only know how to work with one at the moment.

    just include HTML as normal and then put <%= yield %> where the content of the page should go.  This file therefore acts as the header and footer.

    <%= %> opening and closing tags mark stuff to be PREPROCESSED!!! (ERB templating feature of Ruby)

    regular links and links to stylesheets and images and javascript should all use ERB instead of regular HTML like so

      <%= link_to "the_name_of_the_link", "the_url_to_the_link" %>
      <%= stylesheet_link_tag "the_url_to_the_file" %>
      <%= javascript_include_tag "the_url_to_the_file" %>
      <%= image_tag "the_url_to_the_file" %>

      the_url_to_the_file can be absolute, or relative.

      also surround "the_url_to_the_file" to be url_for("the_url_to_the_file")
      I think this makes it so that the relative_assets extension can give its two cents on the issue.  Conceptually, the url we're giving is the url to the asset as it will be in our SOURCE directory.  Middleman figures out where the URL to point to it in our BUILD directory will be when you use url_for.  This allows us to have different structure for our source directory.

      to add classes or other attributes to these ERB tags just check out this example: <%= image_tag url_for("UANT_logo.jpg"), :class=>"img-rounded", :width=>"65px"%>

index.html.erb

  same stuff as the above ERB file regarding images and links

  at the top you can specify "Frontmatter" ( https://middlemanapp.com/basics/frontmatter/ )

    in layout.erb.html we see the following line:
      <title><%= current_page.data.title || "The Middleman" %></title>

    in index.erb.html we see the following lines:
      ---
      title: Welcome to Uant
      ---

    As you can see, the title "variable" gets passed to the layout template as "current_page.data.title"


blogging
  
  middleman article ARTICLENAME
    automatically creates a file in the blog folder named 2015-XX-XX-ARTICLENAME.html.markdown.

    This blog will appear in a list as declared in /blog/index.html.erb

    just go edit that file and you got your blog post