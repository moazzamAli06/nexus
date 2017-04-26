convopal.controller('TeacherDashboardController',
function($scope,$location,$rootScope,$http) {
	//$scope.imageUrl = $rootScope.loggedInUser.imageUrl;
    //$scope = $rootScope;
    $scope.get = function(){
		$http({
		method: 'GET',
		url: 'teacher/show'
	}).then(function successCallback(response) {
			$scope.id = response.data.id;
			$scope.user_id = $rootScope.id;
			$scope.username = response.data.username;
			$scope.lname = response.data.lname;
			$scope.fname = response.data.fname;
			$scope.city = response.data.city;
			//$scope.liveIncountries.model = response.data.living_country;
			$scope.created_at = response.data.created_at;
			$scope.imageUrl = response.data.imageUrl;
			//$scope.C_countries.model = response.data.C_country;
			$scope.C_city = response.data.C_city;
			$scope.C_country = response.data.C_country;
			$scope.C_email = response.data.C_email;
			$scope.C_fname = response.data.C_fname;
			$scope.C_lname = response.data.C_lname;
			$scope.C_phone = response.data.C_phone;
			$scope.C_state = response.data.C_state;
			$scope.C_streetaddress = response.data.C_streetaddress;
			$scope.C_zip = response.data.C_zip;
			$scope.account_id = response.data.account_id;
			$scope.availble_status = response.data.availble_status;
			$scope.brief_into = response.data.brief_into;
			$scope.is_show_publicity = response.data.is_show_publicity;
			//$scope.living_country = response.data.living_country;
			$scope.long_intro = response.data.long_intro;
			$scope.social_id = response.data.social_id;
			$scope.video_url = response.data.video_url;

			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response);
        })
    }
        });