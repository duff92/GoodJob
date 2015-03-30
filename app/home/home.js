"use strict";
angular.module('goodJob.home', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/home', {
      		controller: 'HomeCtrl',
      		templateUrl: 'home/home.html'
    	});
  	}])

	.controller("HomeCtrl", ["$scope","$location",
		function($scope, $location) {
		 //$scope.help_message = "";
		}
		]);