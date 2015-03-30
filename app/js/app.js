
var goodJobApp = angular.module('GoodJob', ['firebase','ngRoute','ngResource']);


goodJobApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/applications', {
        templateUrl: 'partials/applications.html',
        controller: 'MainCtrl'
      }).
      when('/application/:applicationId', {
        templateUrl: 'partials/home.html',
        controller: 'ApplicationCtrl'
      }).
      when('/apply', {
        templateUrl: 'partials/apply.html',
        controller: 'MainCtrl'
      }).
      when('/home',{
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
      }).
       when('/jobs', {
        templateUrl: 'partials/jobs.html',
        controller: 'AvailableJobsCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      }).
      when('/register', {
        templateUrl: 'partials/apply.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);