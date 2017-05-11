convopal.controller('TeacherDashboardController',
function($scope,$location,$rootScope,$http) {
	//$scope.imageUrl = $rootScope.loggedInUser.imageUrl;
    //$scope = $rootScope;
  var experience = function(id,from,to,city,country,company,position,description)
	{
		this.id = id;
		this.from = from;
		this.to = to;
		this.city = city;
		this.company = company;
		this.position = position;
		this.description = description;
	}
	var education = function(id,from,to,institute,major,degree,description)
	{
		this.id = id;
		this.from = from;
		this.to = to;
		this.institute = institute;
		this.major = major;
		this.degree = degree;
		this.description = description;
	}
	$scope.experiences =[];
	$scope.educations =[];
   $scope.get = function(){
		$http({
		method: 'GET',
		url: 'professional/show'
	}).then(function successCallback(response) {
			if($rootScope.loggedInUser == "")
			{
				$rootScope.loggedInUser = new userDetails(response.data.imageUrl,response.data.username,response.data.user_id);
				//$rootScope.loggedInUser.imageUrl = response.data.imageUrl;
			}
			$rootScope.isAuthorized = response.data.isAuthorized;
			$scope.id = response.data.id;
			$scope.user_id = response.data.user_id;
			$scope.username = response.data.username;
			$scope.lname = response.data.lname;
			$scope.fname = response.data.fname;
			$scope.city = response.data.city;
			
			$scope.imageUrl = response.data.imageUrl;
			
		
			$scope.account_id = response.data.account_id;
			$scope.availble_status = response.data.availble_status;
			$scope.brief_into = response.data.brief_into;
			//$scope.living_country = response.data.living_country;
			$scope.long_intro = response.data.long_intro;
			$scope.social_id = response.data.social_id;
			$scope.video_url = response.data.video_url;
			//$scope.experiences = response.data.experiences;
			$.each(response.data.experiences,function(i,j){
					$scope.experiences.push(new experience(j.id,j.from_date,j.to_date,j.city,j.country,j.company,j.position,j.description));
			});
			$.each(response.data.educations,function(i,j){
					$scope.educations.push(new education(j.id,j.from_date,j.to_date,j.institute,
										j.topics,j.degree,j.description));
			})


			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response);
		});
	}
        });