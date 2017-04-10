
convopal.controller('UserController',
function ($scope,$rootScope,$location,$http,authService) {
    
	$scope.$on('event:social-sign-in-success', function(event, userDetails){
		$rootScope.loggedInUser = userDetails;
		var name = userDetails.name;
		var email = userDetails.email;
		var imageUrl = userDetails.imageUrl;
		$rootScope.isAuthorized = true;
		$http.post('store', {name:name,email:email,imageUrl:imageUrl}).then(function (response) {
			console.log(response);
		});
		// $.post("/authenticate/",{name:userDetails.name},function(data){
		// 	console.log(data);
		// });
		 //authService.save(userDetails);
		$location.path("/profile");
		$scope.$apply();
    })

});