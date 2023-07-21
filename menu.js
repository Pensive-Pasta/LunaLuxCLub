var menu = document.getElementById("menu");
var burgerIcon = document.getElementById("burger-icon");

burgerIcon.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menu.style.display = "";
  }
});
