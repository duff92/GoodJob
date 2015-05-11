/* Module linked to the login view
*  Implementation of the controller for the view taking care of user login with firebase.
*  @See firebase.auth
*/

"use strict";
angular.module('goodJob.login', ['firebase.auth', 'firebase.utils', 'ngRoute'])
	//Routing
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/login', {
      		controller: 'LoginCtrl',
      		templateUrl: 'login/loginView.html'
    	});
  	}])
	//Definition of the controller
	.controller("LoginCtrl", ["$scope", "Auth", "$location",
		function($scope, Auth, $location) {
		 //Login method attached to login button
		 $scope.login = function() {
			//Firebase rememberme option initialization
		  	var remMe = "default";
		  	console.log("Trying to login...");
		
		  	if($scope.rememberMe){
		  		remMe = "sessionOnly";
		  	}
			//Use of Auth object for the login with firebase
			Auth.$authWithPassword({
			  //Get information from the view
			  email: $scope.user.email,
			  password: $scope.user.password
			},{
				//RememberMe option from view's switch
				rememberMe: remMe
			}).then(function(authData) {
			  console.log("Logged in as:", authData);
			  //Redirect to profile when successfull login
			  $location.path('/profile');
			}).catch(function(error) {
			  //Error handling
			  console.error("Authentication failed:", error);
			  $scope.help_message = error.message;
			});
	    }
	}]);