function SchoolLookupView () {
	this.input = $('#search-box');
	this.template = $('#lookup-list');
	this.resultsContainer = $('#lookup-results');
	this.bindEvents();
}

SchoolLookupView.prototype.bindEvents = function () {
	this.input.on('keyup', $.proxy( this.onInputChange, this ));
}

SchoolLookupView.prototype.onInputChange = function (e) {
	var userInput = $(e.target).val();
	$(this).trigger('inputChange', userInput);
}

SchoolLookupView.prototype.render = function (data) {
	var markup = Mustache.render(this.template.html(), data);
	this.resultsContainer.html(markup);
}