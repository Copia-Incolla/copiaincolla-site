$(".scrollto").on('click', function(e) {
    target = $(this).attr("href");
   // prevent default anchor click behavior
   e.preventDefault();

   // animate
   $('html, body').animate({
       scrollTop: $(target).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = target;
     });

});

/* ANDROID HACK 
 * see: http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
 */
$(function(){
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    jQuery(window).resize("resizeBackground");
    resizeBackground();
  }
  
  function resizeBackground(){
    var height = jQuery(window).height() + 60;
    $(".bigContainer").css("height",height+"px");
  }
});
/* //ANDROID HACK */