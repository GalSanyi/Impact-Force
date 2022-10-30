var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    378: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    834: {
      slidesPerView: 2.2,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 3.2,
      spaceBetween: 0,
    },
  },
});

// var swiper = new Swiper(".mySwiper-container__tab", {
//   slidesPerView: 2.2,
//   spaceBetween: 0,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
