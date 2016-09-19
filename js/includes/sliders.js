$(document).ready(function () {
    $('.top-slider__slides').bxSlider({
        mode: 'fade',
        controls: false,
        pagerSelector: '.top-slider__pager',
        auto: true,
        pause: 8000
    });

    $('.solutions-slider__inner').bxSlider({
        controls: true,
        pager: false,
        nextText: '',
        prevText: ''
    });
});
