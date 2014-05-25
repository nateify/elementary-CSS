$(function () {
    // Checkboxes
    $('<span class="checkStyle"></span>').insertAfter('input[type="checkbox"]');
    // Radios
    $('<span class="radioStyle"></span>').insertAfter('input[type="radio"]');
    // Slider
    $(".slider").slider({
        orientation: "horizontal",
        start: function () {
            $("html").css("cursor", "ew-resize");
        },
        stop: function () {
            $("html").css("cursor", "auto");
        }
    });
});