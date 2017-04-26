convopal
.controller('MainController',
function($scope,$rootScope,$location) {
	//$scope.username = "Ali";
	$rootScope.signup = function(){
		$rootScope.userType = 2;
		$location.path("/login");
	}
//$location.replace();
});