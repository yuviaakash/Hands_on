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
//create the currentDot class and nextDot
		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

//if the slide reaches the last , Then nextslide will equals to firstslide and the nextdot equals to first dot  
		if(nextSlide.length==0)
		{
			var nextSlide = $('.slide').first();
			var nextDot = $('.dot').first();

		}

		currentSlide.fadeOut(600).removeClass('.active-slide');
		nextSlide.fadeIn(600).addClass('.active-slide');
//Change the active-dot when the slide changes through the arrow-next
		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});
	$('.prev-next').click(function()
	{
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide().prev;
//create the currentDot class and prevDot
		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

//if the slide reaches the first , Then prevslide will equals to lastslide and the prevdot equals to lastdot  
		if(prevSlide.length==0)
		{
			var prevSlide = $('.slide').first();
			var prevDot = $('.dot').first();

		}

		currentSlide.fadeOut(600).removeClass('.active-slide');
	    prevSlide.fadeIn(600).addClass('.active-slide');
//Change the active-dot when the slide changes through the arrow-prev
		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});
}

$(document).ready(main);