$( document ).ready(function() {
	resize();
});

var doit;
window.onresize = function(){
	clearTimeout(doit);
	$('.card').css("display","none");
	doit = setTimeout(function() {
		resize();
		$('.card').css("display","inline-block");
	}, 100);
};

function resize() {
	resizeContainers();
	$('.container').each(function() {
		resizeCards($(this));
	});
}

function resizeContainers() {
	
	var height = $(window).height()-2;
	var margin = $('.container').css("margin-bottom");
	margin = margin.substring(0,margin.length-2);
	
	var border = $('.container').css("border-left-width");
	border = border.substring(0,border.length-2);
	
	var h = (height-margin)/6 - margin-2*border;
	$('.container').css("height", h+"px"); 
}

function resizeCards(container) {
	var height = container.height();
	var margin = $('.card').css("margin-top");
	margin = margin.substring(0,margin.length-2);
	
	var h = height-2*margin;
	var w = h*2/3;
	container.find('.card').each(function(){
		$(this).css("height", h+"px"); 
		$(this).css("width", w+"px");
	});
}


