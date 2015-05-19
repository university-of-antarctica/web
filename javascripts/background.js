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

        // I have to use a URL to an actual resource
        // in order to get this relative URL to work properly
        // Ideally I could just get the URL to the directory
        // So I'll get the URL to this resource and then delete the last
        // few characters to get the relative URL to the directory...
        var specific_image_url = '../images/backgrounds/blue.jpg';
        var image_directory_url = DirectoryURLFromFileURL(specific_image_url);

        var chosen_image_url = image_directory_url + chosen_image_name;
        return chosen_image_url;
  }

  function DirectoryURLFromFileURL(file_url){
     var last_slash_index = file_url.lastIndexOf("/");
     var directory_url = file_url.substring(
          0,last_slash_index+1);
     return directory_url;
  }

  function SetImageAsBackground(chosen_image_url){
      $("#background").attr("src",chosen_image_url);
      $("#background").load(function(evt){
        $("#background").css('opacity','1');
      });
  }
;
