const hamburgerBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile__link");
const customers = document.querySelectorAll(".customer");
const customerReview = document.querySelector(".customer__review");

/* ano animation */
AOS.init({
  offset: 100,
  duration: 1000,
});
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

/* change customer voice on time */

let currCustomer = 0;
let prevCustomer = 2;
const changeTime = 5000;

const customerVoices = [
  "I am absolutely thrilled with the exceptional service and craftsmanship provided by this custom fabrication company! From the initial consultation to the final product delivery, their team demonstrated professionalism and attention to detail. The end result exceeded my expectations, and I now have a unique, high-quality piece that perfectly suits my needs. I highly recommend their services to anyone seeking top-notch custom fabrication!",
  "Working with this custom fabrication company was a fantastic experience from start to finish. The team was not only talented but also incredibly collaborative, taking the time to understand my vision and bringing it to life with precision and creativity. The level of craftsmanship evident in the final product is outstanding, and the finished piece has become a focal point in my space. Thank you for turning my ideas into a reality with such skill and dedication!",
  "I can't express how pleased I am with the outstanding work done by this custom fabrication company. The entire process was seamless, and the team was a pleasure to work with. They not only delivered my project on time but also surpassed my expectations in terms of quality and design. The attention to detail is truly commendable, and the end result is a testament to their expertise. I would recommend this company without hesitation to anyone looking for customized, top-of-the-line fabrication services.",
];

function changeCustomer() {
  customers[currCustomer].classList.add("customer__active");
  customers[prevCustomer].classList.remove("customer__active");
  customerReview.style.opacity = 0;
  customerReview.innerHTML = customerVoices[currCustomer];
  customerReview.style.opacity = 1;

  if (currCustomer < 2) {
    currCustomer++;
    prevCustomer = currCustomer - 1;
  } else {
    prevCustomer = currCustomer;
    currCustomer = 0;
  }
}
/* setInterval(changeCustomer, changeTime);
window.onload = changeCustomer(); */ /* chanfe with timer */
function clearClasses() {
  customers.forEach((item) => {
    if (item.classList.contains("customer__active")) {
      item.classList.remove("customer__active");
    }
  });
}
/* change customer on click */
customers[0].classList.add("customer__active"); //first element active
customers.forEach((item, index) => {
  item.addEventListener("click", () => {
    clearClasses();
    item.classList.add("customer__active");
    /*  unselected = customers.filter */
    customerReview.innerHTML = customerVoices[index];
  });
});
