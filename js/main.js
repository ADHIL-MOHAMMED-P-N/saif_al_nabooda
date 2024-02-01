const hamburgerBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

/* toggling hamburger button */
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("menu-open");
  mobileMenu.classList.toggle("hidden");
});
