$(document).ready(() => {
  // App Screenshot
  $(".owl-carousel").owlCarousel({
    stagePadding: 50,
    autoplay: true,
    autoplaySpeed: 1500,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Scroll top button Show/Hide
  $(window).scroll(() => {
    if ($(this).scrollTop() > 100) {
      $(".scrollUp").fadeIn();
    } else {
      $(".scrollUp").fadeOut();
    }
  });

  $(window).on("load", function () {
    $(".preloader").fadeOut(1000);
  });
});

// Scroll top button
const scrollTopBtn = document.querySelector(".scrollUp");
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Sticky Navbar
const header = document.querySelector("header");
document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Responsive Moble Menu
const menuBtn = document.getElementById("moible-menu-icon");
const mainMenu = document.querySelector(".main-menu");

menuBtn.addEventListener("click", () => {
  mainMenu.classList.toggle("slideLeft");
});
