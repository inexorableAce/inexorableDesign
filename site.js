$('.scroll').on('click', function(){
	$('html, body').animate({scrollTop: $('.work').offset().top}, 500);
});

 $(window).scroll(function(){
	 var topVal = $('.work').offset().top - 45;
if (document.documentElement.scrollTop || document.body.scrollTop >= topVal){
	if ($(window).width() <= 420){
		$('nav').css('bottom', '0px')
		$('nav').css('top', 'auto')
	}else{
		$('nav').css('top', '0px')
		$('nav').css('bottom', 'auto')
	}
	
	}
else{
	if ($(window).width() <= 420){
		$('nav').css('bottom', '-45px')
		$('nav').css('top', 'auto')
	}else{
		$('nav').css('top', '-45px')
		$('nav').css('bottom', 'auto')
	}
	
	}
	
}); 