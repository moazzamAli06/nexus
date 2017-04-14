var convopal = angular.module('convopal', ['ngRoute','socialLogin','angularMoment']);
convopal.config(function(socialProvider){
  socialProvider.setLinkedInKey("81i159jlzpga0k");
});
convopal
 .config(function ($locationProvider) {
     //$locationProvider.hashPrefix('!');
     $locationProvider.html5Mode(true);
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
         controller: 'TeacherController'
     }).
    otherwise({
        redirectTo: '/'
    });

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
     $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ($location.hash() !== "" && $location.hash() !== "/") {
            
               if ($rootScope.isAuthorized == true) {
                   $location.url("/" + $location.hash()).replace();
               // no logged user, redirect to /login
                //    if ( next.templateUrl === "angular/partials/login.html") {
                //    } 
                //    else {
                //    $location.path("/login");
                //    }
               }
               else{
                    $location.url("/" + $location.hash());
                   //$location.path("/login");
               }
        }
    });
    // $rootScope.logout = function(){
    //     socialLoginService.logout();
    //      $rootScope.isAuthorized = false;
    //         $rootScope.loggedInUser = "";
    //         $location.path("/login");
    //         $scope.$apply();
    // }
});
convopal.directive("header", function() {
return {
    restrict: 'A',
    transclude: true,
    templateUrl : 'angular/directives/header.html',
    
    // link: function(scope, element, attrs) {
    //   scope.onClick = function () {
    //     if( scope.order === scope.by ) {
    //        scope.reverse = !scope.reverse 
    //     } else {
    //       scope.by = scope.order ;
    //       scope.reverse = false; 
    //     }
    //   }
    // },
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
    // $rootScope.login = function(){
    //         $rootScope.isAuthorized = false;
    //         $rootScope.loggedInUser = "";
    //         $rootScope.userType = 1;
    //         $location.path("/login");
    //         $scope.$apply();
    // }
// controller logic goes here
        }
    }
});
// var app = angular.module("convopal", ["ngRoute"]);
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/dashboard", {
//         templateUrl : "angular/partials/dashboard.html"
//     })
//     .when("/red", {
//         templateUrl : "red.htm"
//     })
//     .when("/green", {
//         templateUrl : "green.htm"
//     })
//     .when("/blue", {
//         templateUrl : "blue.htm"
//     });
// });

