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
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

 	function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
	$('.popup-button').click(function(){
		$('.popup-container').fadeIn(400, disableScroll);
		$('.popup').animate({
			width: '370px',
			height: '430px'
		}, 400);
	});

	$('.popup-container').click(function(event){
		if(event.target == this){
			$(this).fadeOut(400, enableScroll);
			$('.popup').animate({
			width: 0,
			height: 0
		}, 400);
		}
	})
});
