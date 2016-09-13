$(document).ready(function () {
    if ($(window).width() > 1000) {
        $('.top-slider__slides').fractionSlider({
            'slideTransition': 'fade',
            'slideTransitionSpeed': 100,
            'transitionIn': 'fade',
            'transitionOut': 'fade',
            'timeout': 8000,
            'speedIn': 2000,
            'delay': 300,
            'controls': true,
            'pauseOnHover': true
        });
    } else {
        $('.top-slider__slides').bxSlider({
            pager: false,
            nextText: '',
            prevText: ''
        });
    }

    var bg = 'url('+$('.active-slide .top-slider__slide-bg').attr('data-pic')+')';
    $('.top-slider').css('background-image', bg);

    if ($(window).width() > 750 && $(window).width() < 1000) {
        var src = 'url(' + $('.top-slider__slide-bg').attr('data-pic') + ')';
        $('.top-slider').css('background-image', src);
    }

    $('.personal__slider').bxSlider({
        pager: true,
        pagerSelector: '.personal-slider',
        pagerCustom: '.personal-tabs',
        nextText: '',
        prevText: '',
        onSliderLoad: function(){
            $('.personal-tab').css('display','block');
        }
    });

    $('.index-product__link--video').fancybox({
        'width'				: '90%',
        'height'			: '100%',
        'autoScale'     	: true,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe',
        'scrolling'		: 'no'
    });

    $('.index-projects__select').selectbox();

    $('.page-header__menu-btn').click(function () {
        $('.main-menu').slideToggle();
    });

    $('.scopes-tab__item').click(function () {
        var pic = $(this).attr("data-pic");

        $('.scopes-tab__item').removeClass('scopes-tab__item--active');
        $(this).addClass('scopes-tab__item--active');

        $('.scopes-tab__pic img').attr("src", pic);
    })

    $('.button-up a').click(function () {
        $('.main-menu__link').removeClass('main-menu__link--active');
    });
});