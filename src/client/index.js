const navbarToggle = document.getElementById("navbarToggle");
const navbarNav = document.getElementById("navbarNav");

navbarToggle.addEventListener("click", function () {
  navbarToggle.classList.toggle("active");
  navbarNav.classList.toggle("active");
});
