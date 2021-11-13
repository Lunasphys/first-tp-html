$(window).scroll(function() {

    if ($(this).scrollTop()>50)
     {
        $('audio').fadeOut();
     }
    else
     {
      $('audio').fadeIn();
     }
 });