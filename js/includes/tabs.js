$(".advantages-tabs__title").click(function() {
    var parentBox = $(this).parents('.advantages-tabs');

    $(parentBox).find("a").removeClass("advantages-tabs__title--active");
    $(this).addClass("advantages-tabs__title--active");
    $(".advantages-tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.advantages-tabs__title--active)").addClass('advantages-tabs__title--active');
    return false;
});

$(".scopes-tabs__link").click(function() {
    var parentBox = $(this).parents('.scopes-tabs');

    $(parentBox).find("a").removeClass("scopes-tabs__link--active");
    $(this).addClass("scopes-tabs__link--active");
    $(".scopes-tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.scopes-tabs__link--active)").addClass('scopes-tabs__link--active');
    return false;
});

$(".price-block__tabs-link").click(function() {
    var parentBox = $(this).parents('.price-block__tabs');

    $(parentBox).find("a").removeClass("price-block__tabs-link--active");
    $(this).addClass("price-block__tabs-link--active");
    $(".price-tab").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.price-block__tabs-link--active)").addClass('price-block__tabs-link--active');
    return false;
});

$(".price-tab__link").click(function() {
    var parentBox = $(this).parents('.price-block__inner');

    $(parentBox).find("a").removeClass("price-tab__link--active");
    $(this).addClass("price-tab__link--active");
    $(".price-inner").hide();

    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $(activeTab).find("> ul:not(.price-tab__link--active)").addClass('price-tab__link--active');
    return false;
});