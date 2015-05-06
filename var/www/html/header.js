
var multi_line_header_string = String.raw`

  <!DOCTYPE html>
  <html>
  <head>
  <meta name="description" content="The University of Antarctica" />
    <script src="http://code.jquery.com/jquery.min.js"></script>
    <link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="css/extras.css" rel="stylesheet" type="text/css" />
    <script src="http://getbootstrap.com/dist/js/bootstrap.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/holder/2.3.1/holder.min.js"></script>
    <meta charset="utf-8">
    <title>The University of Antarctica</title>
    
  <!-- Load Carousel Stuff -->
    <script>
      $(document).ready(function(){
        $('.carousel').carousel();
      });
    </script>

  <!-- Choose Random Background -->
    <script type="text/javascript">

    $(document).ready(function() {
      var images = ['01.jpg', '02.jpg', '03.jpg', 
      '04.jpg', '05.jpg', '06.jpg'];

      var chosen_image_name = images[
        Math.floor(
          Math.random() * images.length
        )
      ];
      var chosen_image_url = './images/backgrounds/'+chosen_image_name


      document.body.style.background = 
        "#f3f3f3 url(" 
        + chosen_image_url 
        + ") no-repeat top fixed";
    });
    </script>

  </head>
  <body>
      <br/>
      <br/>
      <br/>

      <!-- entire page -->
      <div class="col-md-2"></div>
      <div class="container col-md-8 well">
      
        <!-- nav bar -->
        <div class="navbar navbar-default" role="navigation">
          <div class="well"> 
              <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-2" id="header_image">
                      <img src="images/UANT_logo.jpg" class="img-rounded" alt="uant-logo" width="65px" >
                    </div>
                    <div class="col-sm-10" id="header_text">
                      <h4 id="header_title"> The University of Antarctica </h4>
                      <small id="header_subtitle">A place as real as it is cold, honest. </small>
                    </div>
                </div>
              </div>
          </div>
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
	<div class="row row-offcanvas row-offcanvas-right">
	<div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          	<div class="list-group">
            		<a href="#" class="list-group-item active">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
            		<a href="#" class="list-group-item">Link</a>
          	</div>
        </div>

	<div class="col-xs-12 col-sm-9">
`;

document.write(multi_line_header_string);
