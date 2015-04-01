"use strict";
angular.module('goodJob.login', ['firebase.auth', 'firebase.utils', 'ngRoute', 'firebase'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/login', {
      		controller: 'LoginCtrl',
      		templateUrl: 'login/login.html'
    	});
  	}])

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