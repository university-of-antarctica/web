var multi_line_carousel_string = String.raw`

  <!-- Load Carousel Stuff -->
  <script>
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  </script>


  <!--  Carousel - consult the Twitter Bootstrap docs at 
        http://twitter.github.com/bootstrap/javascript.html#carousel -->
  <div id="myCarousel" class="carousel slide"><!-- class of slide 
    for animation -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="item active">
      <!-- class of active since it is the first item -->
        <img src="images/steven.jpg" alt="" />
        <div class="carousel-caption">
          <p>Can you believe this guy?</p>
        </div>
      </div>
      <div class="item">
        <img src="images/steven1.jpg" alt="" />
        <div class="carousel-caption">
          <p>Just look at him</p>
        </div>
      </div>
      <div class="item">
        <img src="images/steven2.jpg" alt="" />
        <div class="carousel-caption">
          <p>Does he ever even get his haircut?!?!</p>
        </div>
      </div>
    </div><!-- /.carousel-inner -->
    <!--  Next and Previous controls below
          href values must reference the id for this carousel -->
      <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
      <a class="carousel-control right" href="#myCarousel-id" data-slide="next">&rsaquo;</a>
  </div><!-- /.carousel -->
  <br>
 `;

 document.write(multi_line_carousel_string);