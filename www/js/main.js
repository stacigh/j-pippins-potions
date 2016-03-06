$(document).ready(function(){

	// TOGGLE CAULDRON
	var cauldron = $('.cauldron');
	// Toggle Cauldron
	$('.js-toggle-cauldron').click(function(){
		cauldron.slideToggle();
	});

	$('.js-close-cauldron').click(function(){
		cauldron.slideUp();
	});


	// REPLACE TEXT
	// See vendor.js
	$(function(){
      $('.product-name').typed({
        strings: ['Amortentia', 'Veritaserum', 'Felix Felicis'],
        typeSpeed: 100,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
      });
  });
});