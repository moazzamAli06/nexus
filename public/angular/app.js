var convopal = angular.module('convopal', ['ngRoute','socialLogin']);
convopal.config(function(socialProvider){
  socialProvider.setLinkedInKey("81i159jlzpga0k");
});
convopal
 .config(function ($locationProvider) {
     //$locationProvider.hashPrefix('!');
     $locationProvider.html5Mode(true);
 })
.config(function ($routeProvider, $locationProvider) {
    //socialProvider.setLinkedInKey("81i159jlzpga0k");
    //$locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true).hashPrefix('*');
    $routeProvider.
    when('/login', {
        templateUrl: 'angular/partials/login.html',
        controller: 'UserController'
    }).
    when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupController'
    }).
    when('/', {
        templateUrl: 'angular/partials/dashboard.html',
        controller: 'MainController'
    }).
     when('/profile', {
         templateUrl: 'angular/partials/profile.html',
         controller: 'ProfileController'
     }).
    otherwise({
        redirectTo: '/'
    });


})
.run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ($location.hash() !== "" && $location.hash() !== "/") {
            $location.url("/" + $location.hash()).replace();
            //    if ($rootScope.loggedInUser == null) {
            //    // no logged user, redirect to /login
            //        if ( next.templateUrl === "angular/partials/login.html") {
            //        } 
            //        else {
            //        $location.path("/login");
            //        }
            //    }
        }
    });

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

