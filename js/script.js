$(document).ready(function(){

  $('.fly-elements').addClass('fly-elements--active');

});

$('.menu__link').hover(
  function(){
    $(this).addClass('menu__link--active')
  },
  function(){
    $(this).removeClass('menu__link--active')
  }
);

$(function(){
	$('.header__burger-menu').click(function(e){
		e.preventDefault();
		$(this).toggleClass('header__burger-menu--close');

		$('.menu').toggle(200);
  });
});

$(function () {

	function disableScroll() {
    $('html, body').on('mousewheel', function(){
      return false;
    });
}

 	function enableScroll() {
    $('html, body').off('mousewheel');
}

	$('.popup-button').click(function(){
		$('.popup-container').fadeIn(400, disableScroll);
		$('.popup').animate({
			width: '370px',
			height: '430px'
		}, 400);
	});

	$('.popup-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
			$('.popup').animate(
        {
			width: 0,
			height: 0
		    }, 400);
		}
	});
});

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
});

