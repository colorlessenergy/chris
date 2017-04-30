var open = document.getElementById("open");
var close = document.getElementById("close");
var responsiveNav = document.getElementById("responsive-nav");

close.addEventListener("click", function () {
  responsiveNav.style.display = "none";
});

open.addEventListener("click", function () {
  responsiveNav.style.display = "flex";
});
