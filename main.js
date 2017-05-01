var toggleNav = document.getElementsByClassName("toggle-nav");
var responsiveNav = document.getElementById("responsive-nav");

for (var i = 0; i < toggleNav.length; i++) {
  toggleNav[i].addEventListener("click", function () {
    responsiveNav.classList.toggle("toggle-nav");
  })
}
