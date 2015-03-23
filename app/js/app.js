
var goodJobApp = angular.module('GoodJob', ['firebase','ngRoute','ngResource']);


goodJobApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home',{
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/application/:applicationId', {
        templateUrl: 'partials/home.html',
        controller: 'ApplicationCtrl'
      }).

      otherwise({
        redirectTo: '/login'
      });
  }]);