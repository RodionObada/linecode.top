var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
  breakpoints: {
    768: {
    slidesPerView: 2,
    spaceBetween: 30,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 30,
      },
    },
})

