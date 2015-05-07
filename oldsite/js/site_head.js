<!-- REMOVE FROM HEADER -->
  <meta name="description" content="The University of Antarctica" />

    <script src="http://code.jquery.com/jquery.min.js"></script>
    <link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="http://uofantarctica.com/css/extras.css" rel="stylesheet" type="text/css" />
    <script src="http://getbootstrap.com/dist/js/bootstrap.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/holder/2.3.1/holder.min.js"></script>
    <meta charset="utf-8">

  <!-- Choose Random Background -->
    <script type="text/javascript">

       $(document).ready(function() {
         var bg_img_url = SelectRandomBackgroundImageURL();
         SetImageAsBackground(bg_img_url);
       });

      function SelectRandomBackgroundImageURL(){

        var images = ['01.jpg', '02.jpg', '03.jpg', 
        '04.jpg', '05.jpg', '06.jpg'];

        var chosen_image_name = images[
          Math.floor(
            Math.random() * images.length
          )
        ];
        var chosen_image_url = 'http://uofantarctica.com/images/backgrounds/'+chosen_image_name;
        return chosen_image_url;
      }

      function SetImageAsBackground(chosen_image_url){
          $("#background").attr("src",chosen_image_url);
          $("#background").css('opacity','1');
      }

    </script>

