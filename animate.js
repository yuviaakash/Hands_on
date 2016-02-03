//JQuery 3.2.16
//Basic skeleton of JavaScript
var main = function()
{
//create the event handler
	$('.dropdown-toggle').click(function()
	{
		$('.dropdown-menu').toggle();
	});
}

$(document).ready(main);