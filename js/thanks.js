$(function(){
	$(function () {
	
	});

	$('.thanks-block .close').click(function() {
		$('.thanks-block').fadeOut();
	});

	
	$(document).mousemove(function(e) {
		var x = (e.pageX * -1 / 50), y = (e.pageY * -1 / 50);
		$('.about-video-block .bg').css('margin', x + 'px ' + y + 'px');
	});
	$(document).mousemove(function(e) {
		var x = (e.pageX * +1 / 50), y = (e.pageY * +1 / 50);
		$('.index-catalog3 .bg').css('margin', x + 'px ' + y + 'px');
	});
	$(document).mousemove(function(e) {
		var x = (e.pageX * -1 / 50), y = (e.pageY * -1 / 50);
		$('.header .bird').css('margin', x + 'px ' + y + 'px');
	});
	$(document).mousemove(function(e) {
		var x = (e.pageX * -1 / 100), y = (e.pageY * -1 / 5000);
		$('.first-block .aft').css('margin', x + 'px ' + y + 'px');
	});
	$(document).mousemove(function(e) {
		var x = (e.pageX * -1 / 100), y = (e.pageY * -1 / 5000);
		$('.first-block .aft2').css('margin', x + 'px ' + y + 'px');
	});
	$(document).mousemove(function(e) {
		var x = (e.pageX * -1 / 5000000), y = (e.pageY * -1 / 100);
		$('.quiz-block .top-image img').css('margin', x + 'px ' + y + 'px');
	});
	$('.popup .window .close').click(function() {
		$('.popup').fadeOut();
	});

	$("#phone").mask("+7(999) 999-9999");
	
	$('.ages-block .list').slick({
	  arrows: false,
	  dots: false,
	  centerMode: true,
	  variableWidth: true
	});
	
});