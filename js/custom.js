// ==================================
// Slider
// ==================================

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 120) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// ==================================
// Small Screen Menu button
// ==================================

const onpenBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");
const overlayBtn = document.querySelector(".overlay");
const navBar = document.querySelector(".navbar");

onpenBtn.addEventListener("click", () => {
  closeBtn.classList.add("active");
  overlayBtn.classList.add("active");
  navBar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("active");
  overlayBtn.classList.remove("active");
  navBar.classList.remove("active");
});

overlayBtn.addEventListener("click", () => {
  closeBtn.classList.remove("active");
  overlayBtn.classList.remove("active");
  navBar.classList.remove("active");
});
