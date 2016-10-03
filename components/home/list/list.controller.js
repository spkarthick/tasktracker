(function(){
	
	var module = angular.module("list");
	
	module.controller("listController", ["$uibModal", function($uibModal) {
		var vm = this;
		vm.name = "list";
		vm.openAddCard = function() {
			$uibModal.open({
				templateUrl: 'addCard.html',
				controller: function($uibModalInstance, homeService) {
					vm.card = {
							title: "",
							description: "",
							comments: []
						}
					vm.comment = "";
					this.addComment = function() {
						debugger
						vm.card.comments.push(vm.comment);
						vm.comment = "";
					}
					this.addListToData = function() {
						items.push(card);
						$uibModalInstance.dismiss();
					}
					this.cancel = function() {
						$uibModalInstance.dismiss();
					}
				},
				controllerAs: 'vm'
			});
		}
	}]);
	
})();