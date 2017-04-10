convopal.controller('ProfileController',
function($scope,$rootScope,$location) {
	//$scope.username = $rootscope.userDetails.name;
	$scope.username = $rootScope.loggedInUser.name;
	$scope.email = $rootScope.loggedInUser.email;
	$scope.imageUrl = $rootScope.loggedInUser.imageUrl;
	//$location.path('/profile').replace();
	//$location.replace();
});