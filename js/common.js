$(document).ready(function () {
    $('.top-slider__slides').bxSlider({
        mode: 'fade',
        controls: false,
        pagerSelector: '.top-slider__pager',
        auto: true,
        pause: 8000
    });

    $('.index-projects__list').bxSlider({
        controls: false
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
});
