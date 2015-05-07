var multi_line_header_string = String.raw`

  <!-- nav bar -->
  <div class="navbar navbar-default" role="navigation">
    <div class="well"> 
        <div class="container-fluid">
          <div class="row">
              <div class="col-sm-2" id="header_image">
                <img src="http://uofantarctica.com/images/UANT_logo.jpg" class="img-rounded" alt="uant-logo" width="65px" >
              </div>
              <div class="col-sm-10" id="header_text">
                <h3 id="header_title"><tt> The University of Antarctica </tt></h3>
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
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Athletics</a></li>
          <li><a href="#">Clubs</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

document.write(multi_line_header_string);
