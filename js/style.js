var doit;
window.onresize = function(){
	clearTimeout(doit);
	//$('.card').css("display","none");
	doit = setTimeout(function() {
		resize();
		//$('.card').css("display","inline-block");
	}, 100);
};

function resize() {
	$('.container').each(function() {
		resizeCards($(this));
	});
}

function resizeCards(container) {
	var ratio = 2/3;
	var w = ratio * (container.height());
	container.find('.card').each(function(){
		$(this).css("width", w+"px");
	});
}


