(function(){
	var module = angular.module("card");
	
	module.component("card", {
		templateUrl: "components/home/card/card.html",
		controller: "cardController",
		controllerAs: "vm"
	});
})();