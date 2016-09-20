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

    $('.personal__slider').bxSlider({
        pager: true,
        pagerSelector: '.personal-slider',
        pagerCustom: '.personal-tabs',
        nextText: '',
        prevText: '',
        onSliderLoad: function () {
            $('.personal-tab').css('display', 'block');
        }
    });

    $('.solutions-slider__inner').bxSlider({
        controls: true,
        pager: false,
        nextText: '',
        prevText: ''
    });
});