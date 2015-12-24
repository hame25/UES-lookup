
function SchoolLookupController (model, view) {
	this.model = new model();
	this.view = new view();

	this.bindEvents();
}

SchoolLookupController.prototype.bindEvents = function () {
	$(this.view).on('inputChange', $.proxy( this.onInputChange, this ));
	$(this.model).on('updated', $.proxy( this.updateView, this ));
}

SchoolLookupController.prototype.onInputChange = function (e, inputValue) {
	this.getSearchResults(inputValue);
}

SchoolLookupController.prototype.getSearchResults = function (inputValue) {
	if(inputValue.length >= 3) {
		var self = this
		$.ajax({
		  method: "GET",
		  url: "http://localhost:2016/organisation?query=" + inputValue,
		})
		.done(function(response) {
		   self.updateSchoolModel(response)
		});
	} else {
		this.updateSchoolModel({});
	}
}

SchoolLookupController.prototype.updateSchoolModel = function (data) {
	this.model.update(data);
}

SchoolLookupController.prototype.updateView = function () {
	this.view.render(this.model.getData());
}

