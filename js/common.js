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

    $('.scopes-tab__item').mouseenter(function () {
        var pic = $(this).attr("data-pic");

        $('.scopes-tab__item').removeClass('scopes-tab__item--active');
        $(this).addClass('scopes-tab__item--active');

        $('.scopes-tab__pic img').attr("src", pic);
    })

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
        $('.price-tab__link').click(function () {
            var selected = $(this).attr('href');
            $.scrollTo(selected, 1000, { offset: -70 });
        })
    }
});