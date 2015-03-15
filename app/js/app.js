
var goodJobApp = angular.module('GoodJob', ['ngRoute','ngResource']);


goodJobApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
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