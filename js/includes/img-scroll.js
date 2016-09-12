$('.scopes-tab__pic-inner img').mouseover(function() {
    $(this).animate({'margin-top': -($(this).height()-$('.scopes-tab__pic-inner').height())}, 5000);
});

$('.scopes-tab__pic-inner img').mouseleave(function(event) {
    $(this).stop().animate({'margin-top': 0}, 3000);
});