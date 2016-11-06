$(document).ready(function () {
    $('.index-projects__select select').selectbox();
    $(".index-projects__select .sbOptions").mCustomScrollbar();

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

    /*$('.scopes-tab__item').mouseenter(function () {
        var pic = $(this).attr("data-pic");

        $('.scopes-tab__item').removeClass('scopes-tab__item--active');
        $(this).addClass('scopes-tab__item--active');

        $('.scopes-tab__pic img').attr("src", pic);
    })*/

    $('.button-up a').click(function () {
        $('.main-menu__link').removeClass('main-menu__link--active');
    });

    if ($(window).width() < 767) {
        $('.advantages-tabs__title').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -70 });
        });
        $('.scopes-tabs__link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -70 });
        });
        $('.price-block__tabs-link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -70 });
        });
        $('.price-tab__link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -70 });
        });
        $('.solutions-tabs__link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -70 });
        });
    } else {
        $('.advantages-tabs__title').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -400 });
        });
        $('.scopes-tabs__link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -220 });
        });
        $('.price-block__tabs-link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -170 });
        });
        $('.price-tab__link').click(function () {
            $('.price-inner__total').removeClass('price-inner__total--active');

            var cls = '.' + $(this).attr('data-id');
            var selected = $(this).attr('href');

            $.scrollTo(selected, 1000, { offset: -390 });
            $(cls).addClass('price-inner__total--active');
        });
        $('.solutions-tabs__link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -130 });
        });
    }

    var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 &&  navigator.userAgent.indexOf('Android') == -1;
    if (is_safari) {
        $('body').addClass('safari');
    }
});