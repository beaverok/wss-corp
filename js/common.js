$(document).ready(function () {
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

    $('.page-header__projects-active').click(function () {
       $('.page-header__projects-list').slideToggle();
    });
    $(document).click(function(event) {
        if ($('.page-header__projects-list:visible')) {
            if ($(event.target).closest(".page-header").length) return;
            $('.page-header__projects-list').slideUp();
            event.stopPropagation();
        }
    });

    $('.project-tasks__more-link').click(function () {
       $(this).hide();
       $('.project-tasks__list--other').slideDown();
    });

});
