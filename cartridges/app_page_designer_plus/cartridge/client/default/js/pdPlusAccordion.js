'use strict';

$(document).ready(function () {
    $(".accordion-button").each(function() {
        if ($(this).hasClass('active')){
            $(this).parent().find(".inner").show();
        }
    });

    $(".pdPlusAccordion .experience-component .accordion-button").click(function () {
        $(this).toggleClass("active").next(".inner").slideToggle().parent().siblings().find(".inner").slideDown().prev().removeClass("active");
        $(".inner").not($(this).next()).slideUp(500);
    });
});
