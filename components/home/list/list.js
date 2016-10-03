(function(){
	
	var module = angular.module("list", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "list",
			url: "/list",
			template: "<list></list>",
		});
	}]);
	
	
})();