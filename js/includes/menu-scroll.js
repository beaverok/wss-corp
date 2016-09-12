var menu_selector = ".main-menu__list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        var pos = target.position().top-150;
        if (pos <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.main-menu__link--active").removeClass("main-menu__link--active");
            $(this).addClass("main-menu__link--active");
        } else {
            $(this).removeClass("main-menu__link--active");
        }
    });
}

$(document).ready(function () {

    $(document).on("scroll", onScroll);

});
