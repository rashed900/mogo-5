$(document).ready(function(){
    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //custom scrollbar
    $(".card-body p").mCustomScrollbar();
    //unslider
    $('.feedback').unslider({
        nav: true,
        arrows: {
            prev: '<a class="unslider-arrow prev"><i class="fas fa-chevron-left"></i></a>',
            next: '<a class="unslider-arrow next"><i class="fas fa-chevron-right"></i></a>',
        }
    });
    //carousel
    $('.logo_slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        slideBy:2,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            767:{
                items:3
            },
            992:{
                items:6
            },
            
        }
    })
});