$( document ).ready(function() {
	$('.container').each(function() {
		addCard($(this));
	});
});

function addCard(container) {
	var card = $('<div class="card"></div>');
	container.append(card);

	// from style.js
	resizeCards(container);
}