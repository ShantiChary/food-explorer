// Insert JavaScript here...

(function($){

	'use strict';
	
	const $body = $('body');
	const $hamburgerMenu = $('.hamburger');
	

	$hamburgerMenu.on('click', function() {
		$body.toggleClass('main-nav-open');
	});
	
	$hamburgerMenu.on('mousedown', function(e){
		e.preventDefault();
	});

	// $(window).resize(function(){

	// 	let pageWidth = $(window).width();
	// 	// if (pageWidth > 800 ){

	// 	// 	$(".inner-nav ul").append(
	// 	// 		$('<li>').append($('.search'))
	// 	// 	)};
	//  if (pageWidth < 800){
	// 		$( ".search" ).insertBefore( $( ".social" ) );	
	// 		$('.inner-nav li').each(
	// 			function(){
	// 				if($(this).html().trim()===''){
	// 					$(this).remove();
	// 				}
			
	// 			});
	// 	}


	// });
	
}(jQuery));

// $( ".header-right" ).prepend( $( ".search" ) );	