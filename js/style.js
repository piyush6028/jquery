$(document).ready(function(){

    new WOW().init();

    $(".back-to-top").click(function(){
        $("html").animate({scrollTop: 0});
    });

    $(".toggle-menu").click(function(){
        $("nav").slideToggle();
    });

    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000 
    });

});

$(window).scroll(function(){

    if($(this).scrollTop() > 0 ){
        $("header").addClass("active");
        $(".back-to-top").fadeIn();
    }
    else{
        $("header").removeClass("active");
        $(".back-to-top").fadeOut();
    }

});