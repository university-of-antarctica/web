
       $(document).ready(function() {
         var bg_img_url = SelectRandomBackgroundImageURL();
         SetImageAsBackground(bg_img_url);
         // ShowBody();
       });
      // function ShowBody(){
      //   $("body").css("opacity","1");
      // }
      function SelectRandomBackgroundImageURL(){

        var images = ['01.jpg', '02.jpg', '03.jpg', 
        '04.jpg', '05.jpg', '06.jpg'];

        var chosen_image_name = images[
          Math.floor(
            Math.random() * images.length
          )
        ];
        var chosen_image_url = './images/backgrounds/'+chosen_image_name;
        return chosen_image_url;
      }

      function SetImageAsBackground(chosen_image_url){
          $("#background").attr("src",chosen_image_url);
          $("#background").css('opacity','1');
      }
