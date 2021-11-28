$(document).ready(function () {
  var aboutPos = $(".about-section").offset().top;
  console.log(aboutPos);

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".page-header").addClass("header-fixed");
    } else {
      $(".page-header").removeClass("header-fixed");
    }
  });
});

var button = document.querySelectorAll(".btn-action");

button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;
    console.log(x + " " + y);
    let rippleElement = document.createElement("span");
    rippleElement.style.left = x + "px";
    rippleElement.style.top = y + "px";

    this.appendChild(rippleElement);

    setTimeout(() => {
      rippleElement.remove();
    }, 1000);
  });
});

var pageLoading = document.querySelector(".page-loading");
window.addEventListener("load", function (e) {
  setTimeout(() => {
    pageLoading.style.display = "none";
  }, 2000);
});
