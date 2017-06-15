$('.scroll').on('click', function(){
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#work').offset().top}, 300);
});


