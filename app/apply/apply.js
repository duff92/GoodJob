"use strict";
angular.module('goodJob.apply', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/apply', {
      		controller: 'ApplyCtrl',
      		templateUrl: 'apply/apply.html'
    	});
  	}])

	.controller("ApplyCtrl", ["$scope", "$routeParams",
		function($scope, $location) {

			console.log("Apply");


		 //$scope.help_message = "";
		}
		]);