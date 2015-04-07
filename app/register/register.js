"use strict";
angular.module('goodJob.register', ['firebase.auth', 'firebase.utils', 'ngRoute'])
	//ng-route setup
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/register', {
      		controller: 'RegisterCtrl',
      		templateUrl: 'register/register.html'
    	});
  	}])
	//Definition of the controller
	.controller("RegisterCtrl", ["$scope", "Auth", "$location", "Profile",
		function($scope, Auth, $location, Profile) {
		 
		 
		  //Define the createUser method user when register button is clicked
		  $scope.createUser = function(){
		  	  $scope.message = null;
		      $scope.error = null;
		      console.log("creating user...");
			  //Check if the form is valid and passwords match @TODO find a better way.
		      if(!scope.registerForm.$invalid && $scope.password1 == $scope.password2){
				  //user creation using Auth object
			      Auth.$createUser({
					  email: $scope.email,
					  password: $scope.password1
					}).then(function(userData) {
					  console.log("User " + userData.uid + " created successfully!");

					  return Auth.$authWithPassword({email: $scope.email, password: $scope.password1});
					}).then(function(authData) {
					  console.log("Logged in as:", authData.uid);
					  //Store the data into Firebase using Profile custom object
					  Profile.setUser({
					  		uname: $scope.username, 
					  		phone: $scope.phone, 
					  		firstName: $scope.firstName, 
					  		lastName: $scope.lastName,
					  		personalNum: $scope.personalNum});
					}).catch(function(error) {
					  //On failure, we display the error message
					  console.error("Error: ", error);
					  $scope.regError = true;
					  $scope.regErrorMessage = error.message;
					});
		      }
		      else{
		      	console.log("Invalid application");
		      }
		  }

	}]);