$(document).ready(function(){
$(".bxslider").bxSlider({
    mode: "horizontal",
    auto: true,
  });
    $(".menu-togglr").on("click", function(){
        $("#main-nav").slideToggle("fast");
        $(this).toggleClass("active");
    });
});