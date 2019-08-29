$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $(".owl-two").owlCarousel({
    center: true,
    items:6,
    loop:true,
    margin:2,
    nav: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1920:{
          items:6
      }
    }
  });
   

  var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});

