$(document).ready(function () {
    if ($(window).width() > 1000) {
        $('.top-slider__slides').fractionSlider({
            'slideTransition': 'fade',
            'slideTransitionSpeed': 0,
            'transitionIn': 'fade',
            'transitionOut': 'fade',
            'timeout': 8000,
            'speedIn': 500,
            'delay': 0,
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

    if ($(window).width() < 1000) {
        var src = 'url(' + $('.top-slider__slide-bg').attr('data-pic') + ')';
        $('.top-slider').css('background-image', src);
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

    if ($(window).width() < 768) {
        $('.top-clients__list').bxSlider({
            pager: false,
            nextText: '',
            prevText: '',
            slideWidth: 300,
            infiniteLoop: false
        });
    }
});