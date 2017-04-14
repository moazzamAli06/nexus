convopal.controller('StudentDashboardController',
function($scope,$location,$rootScope) {
    // $scope.logout = function(){
    //     socialLoginService.logout();
    //     $location.path("/login");
	// 	$scope.$apply();
    // }
	$scope.imageUrl = $rootScope.loggedInUser.imageUrl;
//$location.replace();
});