
/*$( document ).ready(function() {
	resizeContainers();
	$('.container').each(function() {
		resizeCards($(this));
	});
});

$( window ).resize( function(){
	resizeContainers();
	$('.container').each(function() {
		resizeCards($(this));
	});
});
*/

function resizeContainers() {
	var height = $( window ).height();
	var width = $( window ).width();
	var margin = $('.container').css("margin-top");
	margin = margin.substring(0,margin.length-2);
	
	var border = $('.container').css("border-left-width");
	border = border.substring(0,border.length-2);
	
	var h = (height-margin-border-50)/7 - margin-2*border;
	var w = width - 2*margin - 2*border;
	
	$('.container').css("height", h+"px"); 
	$('.container').css("width", w+"px");
}


function resizeCards(container) {
	var height = container.height();
	var margin = $('.card').css("margin-top");
	margin = margin.substring(0,margin.length-2);
	
	var h = height-2*margin;
	var w = h*2/3;
	
	$('.card').css("height", h+"px"); 
	$('.card').css("width", w+"px");
}
