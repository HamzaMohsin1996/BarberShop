$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        autoplay: false,
               responsive:{
                 180:{
                       items:1
                   },
                   480:{
                       items:2
                   },
                   768:{
                       items:3
                   },
                   992:{
                       items:3
                   }
               }
     });
    $("#testimonial-slider-1").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        margin: 20,
        stagePadding: 250,
        autoplay: false,
               responsive:{
                 180:{
                       items:1,
                        margin: 5,
                       stagePadding: 50
                   },
                   480:{
                       items:2,
                       margin: 5,
                       stagePadding: 50
                   },
                   768:{
                       items:2,
                       margin: 10,
                       stagePadding: 100
                   },
                   992:{
                       items:2
                   }
               }
     }); 

  // toggle main menu

  $(".menu-toggle").click(function () {
    $(this).toggleClass("change");
    $(".main-nav").toggleClass("menu-slide");
  });

});