$('.main-menu__link').click(function(){
    $('.main-menu__link').removeClass('main-menu__link--active');
    $(this).addClass('main-menu__link--active');
    var selected = $(this).attr('href');
    $.scrollTo(selected, 1000, { offset: -70 });

    if ($(window).width() < 768) {
        $('.main-menu').slideUp();
    }
    return false;
});