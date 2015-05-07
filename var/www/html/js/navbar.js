
var multi_line_header_string = String.raw`

  <!-- nav bar -->
  <div class="navbar navbar-default" role="navigation">
    <div class="well"> 
        <div class="container-fluid">
          <div class="row">
              <div class="col-sm-2" id="header_image">
                <img src="images/UANT_logo.jpg" class="img-rounded" alt="uant-logo" width="65px" >
              </div>
              <div class="col-sm-10" id="header_text">
                <h3 id="header_title"> The University of Antarctica </h3>
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
`;

document.write(multi_line_header_string);
