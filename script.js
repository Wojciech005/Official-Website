//jquery//

$(".pierwsza").on("click", function () {
    $("section.menu .aboutme").toggleClass("active");

})
// $(".druga").on("click", function () {
//     $(".project").toggleClass("active");

// })
$(".trzecia").on("click", function () {
    $(".hobby").toggleClass("active");

})
$(".czwarta").on("click", function () {
    $(".contact").toggleClass("active");

})
$(".animation .button").on("click", function () {
    $(".animation p").toggleClass("active");

})

$("div.switch").on("click", function () {
    $(".aboutme, .project, .hobby, .contact").removeClass("active");

})

