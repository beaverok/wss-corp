$(document).ready(function () {
    var bg = 'url('+$('.active-slide .top-slider__slide-bg').attr('data-pic')+')';
    $('.top-slider').css('background-image', bg);

    if ($(window).width() < 1000) {
        var src = 'url(' + $('.top-slider__slide-bg').attr('data-pic') + ')';
        $('.top-slider').css('background-image', src);
    }

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
    });
    $(document).click(function(event) {
        if ($(window).width() < 767 && $('.main-menu:visible')) {
            if ($(event.target).closest(".page-header").length) return;
            $('.main-menu').slideUp();
            event.stopPropagation();
        }
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

    if ($(window).width() < 767) {
        $('.price-tab__link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -70 });
        })
    }
});