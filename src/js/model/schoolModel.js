
function SchoolModel (data) {
	this.data = data || {};
}

SchoolModel.prototype.getData = function () {
	return this.data;
}

SchoolModel.prototype.update= function (data) {
	this.data = data;
	$(this).trigger('updated');
}