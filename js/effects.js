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