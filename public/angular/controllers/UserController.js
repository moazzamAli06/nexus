
convopal.controller('UserController',
function ($scope,$rootScope,$location,$http,authService) {
    
	$scope.$on('event:social-sign-in-success', function(event, userDetails){
		$rootScope.loggedInUser = userDetails;
		var name = userDetails.name;
		var email = userDetails.email;
		var imageUrl = userDetails.imageUrl;
		var userType = "";
		$rootScope.isAuthorized = true;
		$http.post('user/store', {name:name,email:email,imageUrl:imageUrl,UserType:$rootScope.userType}).then(function (response) {
				$rootScope.id = response.data.id;
				$rootScope.userType = response.data.role_id;
				console.log(response);
		
				if($rootScope.userType == "1")
				{
					$location.path("/profile");
					//$scope.$apply();
				}
				else if($rootScope.userType == "2")
				{
					$location.path("/teacher");
					//$scope.$apply();
				}
			});
	
			// $location.path("/teacher");
			// $scope.$apply();
		// $.post("/authenticate/",{name:userDetails.name},function(data){
		// 	console.log(data);
		// });
		 //authService.save(userDetails);
		
    })
	// $scope.$on('event:social-sign-out-success', function(event, logoutStatus){
	// 	$rootScope.isAuthorized = false;
	// 	$rootScope.loggedInUser = "";
	// 	$location.path("/login");
	// 	$scope.$apply();
	// })

});