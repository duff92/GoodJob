"use strict";
angular.module('goodJob.login', ['firebase.auth', 'firebase.utils', 'ngRoute', 'firebase'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/login', {
      		controller: 'LoginCtrl',
      		templateUrl: 'login/login.html'
    	});
  	}])

<<<<<<< HEAD
	.controller("LoginCtrl", ["$scope", "Auth", "$location",
		function($scope, Auth, $location) {
		 //$scope.help_message = "";
		 $scope.login = function() {
		  	var remMe = "default";
		  	console.log("Trying to login...");

		  	if(!!$scope.rememberMe){
		  		remMe = "sessionOnly";
		  	}
			Auth.$authWithPassword({
			  email: $scope.email,
			  password: $scope.pass
			},{
				rememberMe: remMe
			}).then(function(authData) {
			  console.log("Logged in as:", authData);
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
=======
	.controller("LoginCtrl", ["$scope", "CommonProp", "$firebaseAuth", "$location",
		function($scope, $firebaseAuth, $location) {
			var ref = new Firebase("https://goodjob.firebaseio.com");
			var loginObj = $firebaseAuth(ref);
			
			$scope.user = {};
			$scope.login = function(e) {
				//Basic angularfire authentication with e-mail/password
				e.preventDefault();
				var userEmail = $scope.user.email;
				var userPassword = $scope.user.password;
				loginObj.$authWithPassword({
					email: userEmail,
					password: userPassword
				})
				.then(function(user) {
					console.log("Logged in !");
					CommonProp.setUser(userEmail);
					$location.path('/home');
				}).catch(function(error) {
					console.error("Authentication failed:", error);
					//Add some failure actions on the scope
			});
	    }
	}])
	.service('CommonProp', function(){ //Common properties to get the user
		var user = '';
		
		return{
			getUser: function() {
				return user;
			},
			setUser: function(value) {
				user = value;
			}
		};
	});
>>>>>>> origin/josselin-branch
