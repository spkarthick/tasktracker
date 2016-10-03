(function(){
	
	var module = angular.module("home");
	
	module.controller("homeController", ["$rootScope", "$filter", "$uibModal", "homeService", function($rootScope, $filter, $uibModal, homeService) {
		var vm = this;
		vm.name = "home";
		vm.dataSource = homeService.data;
		vm.colorHash = new ColorHash();
		vm.openAddList = function() {
			$uibModal.open({
				templateUrl: 'addList.html',
				controller: function($uibModalInstance, homeService) {
					this.addListToData = function() {
						homeService.data.lists.push({
							name: this.listName
						});
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