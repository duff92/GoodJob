"use strict";
angular.module('goodJob.values', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/values', {
      		controller: 'ValuesCtrl',
      		templateUrl: 'values/values.html'
    	});
  	}])

	.controller("ValuesCtrl", ["$scope", "$routeParams",
		function($scope, $location) {

			console.log("Writing ads");


		 //$scope.help_message = "";
		}
		]);