$(document).ready(function () {
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
      $(".page-header").addClass("header-fixed");
      console.log(scroll);
    } else {
      $(".page-header").removeClass("header-fixed");
      console.log(scroll);
    }
  });
});
