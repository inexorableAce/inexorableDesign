$(document).ready(function () {
    var logoFront = document.getElementById('logoFront');
    var logoBack = document.getElementById('logoBack');
    logoFront.homePos = { x: logoFront.offsetLeft, y: logoFront.offsetTop };
    logoBack.homePos = { x: logoBack.offsetLeft, y: logoBack.offsetTop };
    
    $('.header').mousemove(function (e) {
        parallax(e, logoFront, 11);
        parallax(e, logoBack, 14);
    });
});

$(window).resize(function () {
	$(".logo").attr("style",""); 
	logoFront.homePos = { x: logoFront.offsetLeft, y: logoFront.offsetTop };
    logoBack.homePos = { x: logoBack.offsetLeft, y: logoBack.offsetTop };
});

function parallax(e, target, layer) {
    var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
    var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    $(target).offset({ top: y ,left : x });
};

$('.scroll').on('click', function(){
	$('html, body').animate({scrollTop: $('.work').offset().top}, 500);
});
