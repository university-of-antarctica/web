
var multi_line_header_string = String.raw`

  <!DOCTYPE html>
  <html>
  <head>
  <meta name="description" content="The University of Antarctica" />
    <script src="http://code.jquery.com/jquery.min.js"></script>
    <link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="css/extras.css" rel="stylesheet" type="text/css" />
    <link href="css/offcanvas.css" rel="stylesheet" type="text/css" />
    <script src="js/offcanvas.js"></script>
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
    <script src="js/background.js"></script>

  </head>
  <body>
      <br/>
      <br/>
      <br/>

      <!-- entire page -->
      <img id="background">
      <div class="col-md-2"></div>
      <div class="container col-md-8 well">
      
        <!-- nav bar -->
        <script src="js/navbar.js"></script>
`;

document.write(multi_line_header_string);
