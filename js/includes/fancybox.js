$(document).ready(function () {
    $('.project-descr__play-btn').fancybox({
        'width': '70%',
        'height': '70%',
        'autoScale': true,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'scrolling': 'no'
    });

    $('.fancy-pic').fancybox({
        'autoHeight': true
    });

    $('.fancy-link').fancybox();
});