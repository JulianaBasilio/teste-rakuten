$(document).ready(function(){
    $('.color-carousel').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.product-carousel').slick({
        arrows: true,
        slidesToShow: 5
    });

    $('.instagram-carousel').slick({
        arrows: true,
        slidesToShow: 4
    });

    $('.gallery-carousel-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        focusOnSelect: false
      });
      
      $('.gallery-carousel-nav').slick({
        slidesToShow: 6,
        asNavFor: '.gallery-carousel-main',
        dots: false,
        focusOnSelect: true,
        vertical: true
      });
    
});