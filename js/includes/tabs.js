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

$(".product-page__tabs-link").click(function() {
    var parentBox = $(this).parents('.product-page__tabs');

    $(parentBox).find("a").removeClass("product-page__tabs-link--active");
    $(this).addClass("product-page__tabs-link--active");
    $(".product-page__scopes-tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.product-page__tabs-link--active)").addClass('product-page__tabs-link--active');
    return false;
});