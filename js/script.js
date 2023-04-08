$(function(){
    'use strict'

    $('.menu-icon i').on('click',function(){
        $('.main-menu').animate({
            'left'  :0
        });
    });
    $('.close-icon i').on('click',function(){
        $('.main-menu').animate({
            'left'  : -300,
        });
    });

    $('.slider-4xyz').slick({

        'dots' : true,
        'autoplay' :true,
        'autoplaySpeed' : 2000,
        'pauseOnHover' : false,
        'speed' : 1000,
        'pauseOnDotsHover' : true,
        'slidesToShow': 1,
    });

 

    function showModal(){
        $('.modal-xyz').show();
        $('html body').css({'overflow':'hidden'});
    }
    setTimeout(showModal,2000);
    
    function modalClose(){
        $('.modal-xyz').hide();
    }
    
    $('.modal-xyz i').on('click',function(){
        modalClose();
    });


    $('.main-menu ul li a').on('click',function(){
        $('.main-menu ul li a').removeClass('active');
        $(this).addClass('active');
    });
  

    // $('.main-menu ul li').on('click',function(){
    //     $(this).children('ul').slideToggle();
    // });


}) ;
