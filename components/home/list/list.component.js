(function(){
	var module = angular.module("list");
	
	module.component("list", {
		templateUrl: "components/home/list/list.html",
		controller: "listController",
		controllerAs: "vm"
	});
})();