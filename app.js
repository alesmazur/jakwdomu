var upClass = "toggle-up";
var downClass = "toggle-down";

function toggle() {
  var switcher = document.querySelector(".switcher");

  if (~switcher.className.indexOf(downClass)) {
    switcher.className = switcher.className.replace(downClass, upClass);
  } else {
    switcher.className = switcher.className.replace(upClass, downClass);
  }
}

$(document).ready(function () {
  $(".switcher").on("click", function (event) {
    event.preventDefault();
    $(".wrapper").toggleClass("dark");
  });
});
