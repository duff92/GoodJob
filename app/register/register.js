"use strict";
angular.module('goodJob.register', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/register', {
      		controller: 'RegisterCtrl',
      		templateUrl: 'register/register.html'
    	});
  	}])

	.controller("RegisterCtrl", ["$scope", "Auth", "$location",
		function($scope, Auth, $location) {
		 //$scope.help_message = "";
		 $scope.login = function() {
		  	console.log("Trying to login...", Auth);

			Auth.$authWithPassword({
			  email: $scope.email,
			  password: $scope.pass
			}).then(function(authData) {
			  console.log("Logged in as:", authData);
			  $location.path('/home');
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
			});
	    }

		  $scope.createUser = function(){
		  	  $scope.message = null;
		      $scope.error = null;
		      console.log("creating user...");
		      Auth.$createUser({
				  email: $scope.email,
				  password: $scope.pass
				}).then(function(userData) {
				  console.log("User " + userData.uid + " created successfully!");

				  return Auth.$authWithPassword({email: $scope.email, password: $scope.pass});
				}).then(function(authData) {
				  console.log("Logged in as:", authData.uid);
				//  PersonalProfile.createProfile("Write your name", "Your adress");
				}).catch(function(error) {
				  console.error("Error: ", error);
				});
		  }

 $scope.personal = {
        value: 12
      };


	}]);