$(document).ready(function () {
// project page
    $('.page-header__projects-active').click(function () {
        $('.page-header__projects-list').slideToggle();
    });
    $(document).click(function (event) {
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

    $('.project-tasks__item-name').click(function () {
        $(this).addClass('project-tasks__item-name--active');
        $(this).next().slideDown();
    });
});