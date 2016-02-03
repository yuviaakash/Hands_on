//JQuery 3.2.16
//Basic skeleton of JavaScript
var main = function()
{
//create the event handler
	$('.dropdown-toggle').click(function()
	{
		$('.dropdown-menu').toggle();
	});
//craete the fadeIn and fadeOut effect for the slider
	$('.arrow-next').click(function()
	{
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide().next;
		currentSlide.fadeOut(600).removeClass('.active-slide');
		nextSlide.fadeIn(600).addClass('.active-slide');
	});
}

$(document).ready(main);