$(document).ready(function(){

	// DISABLE BUTTONS SINCE THEY AREN'T HOOKED UP TO A BACKEND
	// ------------------------------------------------------------------
	$('.button').click(function(){
		return false;
	});

	// TOGGLE CAULDRON
	// ------------------------------------------------------------------
	var cauldron = $('.cauldron');
	$('.js-toggle-cauldron').click(function(){
		cauldron.slideToggle();
	});

	$('.js-close-cauldron').click(function(){
		cauldron.slideUp();
	});

	// REPLACE TEXT
	// ------------------------------------------------------------------
	// See vendor.js
	function isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}

	if (!isMobile()) {
		$(function(){
			$('.js-product-name').typed({
				strings: ['Amortentia', 'Veritaserum', 'Felix Felicis'],
				typeSpeed: 100,
				backSpeed: 25,
				backDelay: 1500,
				loop: true
			});
		});
	}
});