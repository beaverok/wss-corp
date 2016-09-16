$(document).ready(function () {
    $('.top-slider__slides').bxSlider({
        mode: 'fade',
        controls: false,
        pagerSelector: '.top-slider__pager',
        auto: true,
        pause: 8000
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

    $('.index-projects__select select').selectbox();

    $('.page-header__menu-btn').click(function () {
        $('.main-menu').slideToggle();
    })
});
