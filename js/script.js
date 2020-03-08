$(document).ready(function() {

  $('.fly-elements').addClass('fly-elements--active');

// Выпадающее меню
  $('.header__burger-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('header__burger-menu--close');

		$('.menu').toggle(200);
  });

// Поп ап
  $('.popup__button').click(function() {
    $('html').addClass('scroll-off');
		$('.popup').fadeIn(400);
		$('.popup__form').fadeIn(400);
	});

	$('.popup').click(function(event) {
		if(event.target == this) {
      $('html').removeClass('scroll-off');
			$(this).fadeOut(400);
			$('.popup__form').fadeOut(400);
		}
	});
});

// Слайдер
new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

