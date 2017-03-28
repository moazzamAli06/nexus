
convopal.controller('UserController',
function($scope,$location) {
	//$scope.username = "Ali";
	$scope.login = function(data){

	};
	$scope.$on('event:social-sign-in-success', function(event, userDetails){
		$scope.loggedInUser = userDetails
		console.log(userDetails);

    })
	//$location.path('/login').replace();
	//$location.replace();
});