
convopal.controller('UserController',
function ($scope, $location) {
    //$location.absUrl = "http://127.0.0.1:8000/login";
	//$scope.username = "Ali";
	$scope.login = function(data){

	};
	$scope.$on('event:social-sign-in-success', function(event, userDetails){
		$scope.loggedInUser = userDetails
	    //console.log(userDetails);
		//$location.hash('');
		$location.url("profile");
    })
	
    //$location.replace();

});