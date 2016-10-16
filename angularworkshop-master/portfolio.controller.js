var portfolioApp = angular.module('portfolioApp',[]);
portfolioApp.controller("Portfolio", ["scope", function($scope) {
	$scope.isHome = true;
	$scope.isAboutMe = false;
}]);