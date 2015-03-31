"use strict";
angular.module('goodJob.home', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/home', {
      		controller: 'HomeCtrl',
      		templateUrl: 'home/home.html'
    	});
  	}])

	.controller("HomeCtrl", ["$scope", "$routeParams",
		function($scope, $location) {

			//console.log("Writing ads");


		 //$scope.help_message = "";
		}
		]);