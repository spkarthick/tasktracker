(function(){
	
	var module = angular.module("card");
	
	module.controller("cardController", ["cardService", function(cardService) {
		var vm = this;
		vm.name = "card";
	}]);
	
})();