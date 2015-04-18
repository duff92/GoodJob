/* Module for the home screen, linked to the home view, only routing is done.
*
*/
"use strict";
angular.module('goodJob.home', ['firebase.auth', 'firebase.utils', 'ngRoute'])
	//Routing
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/home', {
      		controller: 'HomeCtrl',
      		templateUrl: 'home/home.html'
    	});
  	}])

	.controller("HomeCtrl", ["$scope", "$routeParams",
		function($scope, $location) {

		}
		]);