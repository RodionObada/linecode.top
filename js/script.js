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
