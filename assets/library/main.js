$(function () {
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	})
});

$(document).ready(function(){
	$('.ui.accordion').accordion();
	$('.tabular.menu .item').tab({history:false});
});
