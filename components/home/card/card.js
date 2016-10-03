(function(){
	
	var module = angular.module("card", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "card",
			url: "/card",
			template: "<card></card>",
		});
	}]);
	
	
})();