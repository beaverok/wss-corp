$(".solutions-tabs__link").click(function() {
    var parentBox = $(this).parents('.solutions-tabs');

    $(parentBox).find("a").removeClass("solutions-tabs__link--active");
    $(this).addClass("solutions-tabs__link--active");
    $(".solutions-tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.solutions-tabs__link--active)").addClass('solutions-tabs__link--active');
    return false;
});