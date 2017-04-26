var convopal = angular.module('convopal', ['ngRoute','socialLogin','angularMoment']);
convopal.config(function(socialProvider){
  socialProvider.setLinkedInKey("81i159jlzpga0k");
});
convopal
 .config(function ($locationProvider) {
     //$locationProvider.hashPrefix('!');
     $locationProvider.html5Mode(true).hashPrefix('!');
 })
.config(function ($routeProvider, $locationProvider) {
     //$rootScope.isAuthorized = false;
    //socialProvider.setLinkedInKey("81i159jlzpga0k");
    //$locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true).hashPrefix('*');
    $routeProvider.
     when('/', {
        templateUrl: 'angular/partials/index.html',
        controller: 'MainController'
    }).
     when('/dashboard', {
        templateUrl: 'angular/partials/studentDashboard.html',
        controller: 'StudentDashboardController'
    }).
    when('/login', {
        templateUrl: 'angular/partials/login.html',
        controller: 'UserController'
    }).
    when('/signup', {
        templateUrl: 'angular/partials/signup.html',
        controller: 'UserController'
    }).
     when('/profile', {
         templateUrl: 'angular/partials/profile.html',
         controller: 'ProfileController'
     }).
      when('/teacher', {
         templateUrl: 'angular/partials/teacher.html',
         controller: 'TeacherController'
     }).
      when('/Tdashboard', {
         templateUrl: 'angular/partials/teacherDashboard.html',
         controller: 'TeacherDashboardController'
     }).
    otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
//  $rootScope.logout = function(){
//         socialLoginService.logout();
//          $rootScope.isAuthorized = false;
//             $rootScope.loggedInUser = "";
//             $location.path("/login");
//             $scope.$apply();
//     }
})
.run(function($rootScope, $location) {
    $rootScope.loggedInUser = "";
    $rootScope.isAuthorized = false;
     $rootScope.$on("$routeChangeStart", function(event, next, current) {
        
        var url = $location.hash();
        if(url !== "")
        {
            $location.url(url);
            $location.path(url);
        }
        // if (url != "" && url != "/" && url != "/signup" && url != "/#signup" && url != "/login") {
            
        //        if ($rootScope.isAuthorized == true) {
        //            $location.url("/" + $location.hash()).replace();
        //        // no logged user, redirect to /login
        //         //    if ( next.templateUrl === "angular/partials/login.html") {
        //         //    } 
        //         //    else {
        //         //    $location.path("/login");
        //         //    }
        //        }
        //        else{
        //             //$location.url("/" + $location.hash());
        //            $location.url("/login");
        //        }
        // }
        // else{
        //     if($location.hash() == "" )
        //     {
        //         $location.url($location.path());
        //     }
        //     else
        //     {
        //          $location.url("/" + $location.path()).replace();
        //     }
              
        // }
    });
});
convopal.directive("header", function() {
return {
    restrict: 'A',
    transclude: true,
    templateUrl : 'angular/directives/header.html',
    controller:function($scope, $element, $attrs, $transclude,$rootScope,$location,socialLoginService) {
        $rootScope.loggedInUser = "";
        $rootScope.isAuthorized = false;
        $rootScope.userType = 1;
         $rootScope.logout = function(){
            socialLoginService.logout();
            $rootScope.isAuthorized = false;
            $rootScope.loggedInUser = "";
            $location.path("/login");
            $scope.$apply();
    }
        }
    }
});
convopal.directive("fileread", [
  function() {
    return {
      scope: {
        fileread: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.fileread = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }
    }
  }
]);