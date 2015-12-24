window.onload = function () {
	var schoolModel = SchoolModel;
	var schoolLookupView = SchoolLookupView; 
	new SchoolLookupController(schoolModel, schoolLookupView);
}