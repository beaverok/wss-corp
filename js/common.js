$(document).ready(function () {
    $('.top-slider__slides').fractionSlider({
        'slideTransition': 'fade',
        'slideTransitionSpeed' : 100,
        'transitionIn' : 'fade',
        'transitionOut' : 'fade',
        'timeout': 8000,
        'speedIn' : 2000,
        'delay': 300,
        'controls': true,
        'pauseOnHover': true
    });

    var bg = 'url('+$('.active-slide .top-slider__slide-bg').attr('data-pic')+')';
    $('.top-slider').css('background-image', bg);

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

    $('.top-slider__play-btn').fancybox({
        'width'				: '90%',
        'height'			: '100%',
        'autoScale'     	: true,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe',
        'scrolling'		: 'no'
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
    })
});
