/*$('.form-feedback form').bind('submit', function(event) {

    $('.input--email').css({'text-transform' : 'lowercase'});

    $('.form-feedback form .required').each(function()
    {
        if(!$(this).val().length) {
            event.preventDefault();
            $(this).addClass('input--error');
            $(this).parent().append("<span class='text-error'>Поле не заполнено</span>");
        } else {
            $(this).addClass('input--ok');
            $(this).removeClass('input--error');
            $('.text-error').remove();
        }
    });

    if($('.input--email').val() != '') {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if(pattern.test($('.input--email').val())){
            $('.input--email').addClass('input--ok');
            $('.input--email').removeClass('input--error');
            $('.text-error').remove();
        } else {
            event.preventDefault();
            $('.input--email').addClass('input--error');
            $('.input--email').parent().append("<span class='text-error'>Неверный формат e-mail</span>");
        }
    }

});

$('.contacts-form__submit--empty').bind('click', function(event) {

    $('.contacts-form form .required').each(function()
    {
        if(!$(this).val().length) {
            event.preventDefault();
            $(this).addClass('input--error');
            $(this).parent().append("<span class='text-error'>Поле не заполнено</span>");
        } else {
            $(this).addClass('input--ok');
            $(this).removeClass('input--error');
            $('.text-error').remove();
        }
    });

    if ($('.contacts-form__input[name="name"]').val().length && $('.contacts-form__input[name="phone"]').val().length) {
        $('.contacts-form__submit').css('display', 'block');
        $('.contacts-form__submit--empty').css('display', 'none');
    }
});*/