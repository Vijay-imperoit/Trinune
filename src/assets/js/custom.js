document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {
    document.querySelectorAll(".navbar .dropdown").forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        const dropdownMenu = this.querySelector(".dropdown-menu");
        dropdown.classList.add("show");
        dropdownMenu.classList.add("show");
      });
      dropdown.addEventListener("mouseleave", function () {
        const dropdownMenu = this.querySelector(".dropdown-menu");
        dropdown.classList.remove("show");
        dropdownMenu.classList.remove("show");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-sticky");
  const navbarToggle = document.querySelector(".navbar-toggler");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  navbarToggle.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      navbar.classList.toggle("bg-dark", !navbar.classList.contains("bg-dark"));
    }
  });
});