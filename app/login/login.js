"use strict";
angular.module('goodJob.login', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/login', {
      		controller: 'LoginCtrl',
      		templateUrl: 'login/login.html'
    	});
  	}])

	.controller("LoginCtrl", ["$scope", "Auth", "$location",
		function($scope, Auth, $location) {
		 //$scope.help_message = "";
		 $scope.login = function() {
		  	var remMe = "default";
		  	console.log("Trying to login...");
			//DOUBLE NEGATION
		  	if($scope.rememberMe){
		  		remMe = "sessionOnly";
		  	}
			//Use of Auth object for the login
			Auth.$authWithPassword({
			  email: $scope.email,
			  password: $scope.pass
			},{
				rememberMe: remMe
			}).then(function(authData) {
			  console.log("Logged in as:", authData);
			  //Redirect to profile when successfull login
			  $location.path('/profile');
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
			});
	    }
/*
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
		  }*/
	}]);