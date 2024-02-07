const hamburgerBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile__link");

/* toggling hamburger button */
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("menu-open");
  mobileMenu.classList.toggle("hidden");
});

/* closing mobile navbar and handburger menu on clicking mobile navbar links */

mobileLinks.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("menu-open");
    mobileMenu.classList.toggle("hidden");
  });
});
