$(document).ready(function () {

    function heightDetect() {
        $(".mobile__nav__menu li").css("width", $(window).width());
        $(".header").css("width", $(window).width());

        $(".gradient").css("width", $(window).width());
        $(".gradient").css("height", $(window).height());

        $(".images__content").css("height", $(".images__content").width());
        $(".img").css("height", $(".img").width());

        $(".pancakes__left ").css("height", $(".slider-for__item").height());
        $(".slider-nav").css("width", $(".pancakes__right").width());

        $(".menu").css("height", $(".breakfast__left").height());
    };

    heightDetect();

    $(window).resize(function () {
        heightDetect();
    });

    $('.button__show__menu').on('click', function () {
        $(this).toggleClass('is-active');
        $('.header').toggleClass('is-active-menu');
        $('.header__mobile__menu').slideToggle();
    });

    $(".hamburger__2").click(function () {
        $(this).toggleClass("is-active");
    });

    $('#slides').superslides({
        slide_easing: 'easeInOutCubic',
        slide_speed: 'normal',
        animation: 'slide',
        play: 10000,
        pagination: true,
        hashchange: true,
        scrollable: true
    });


    // slick-slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        prevArrow: '<button type="button" class="arrow prev"></button>',
        nextArrow: '<button type="button" class="arrow next"></button>'
    });
});