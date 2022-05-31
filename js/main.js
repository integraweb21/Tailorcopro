$(document).ready(function(){

    // Nav Tabs

    $('#bloc-1').click(function(){
        if($('#content-1').is(":visible")){
          $('#content-1').hide();
        }else{
          $('#content-1').show();
        }
    });
      
    $('#bloc-2').click(function(){
        if($('#content-2').is(":visible")){
          $('#content-2').hide();
        }else{
          $('#content-2').show();
        }
    });

    $('#bloc-3').click(function(){
        if($('#content-3').is(":visible")){
          $('#content-3').hide();
        }else{
          $('#content-3').show();
        }
    });

    // Owl Carousel

    $('.testimonials').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.partners').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})