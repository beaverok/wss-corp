$(document).ready(function () {
    $('.sbOptions li a').click(function () {
        alert('!!!');
        var num = $(this).attr("rel");

        var d = $('.index-projects__list').find('.index-project').attr("data-type");
            if (d == num) {
                $('.index-project').addClass("index-project--hidden");
            }
        })

    });
});
