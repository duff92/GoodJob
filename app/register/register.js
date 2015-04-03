"use strict";
angular.module('goodJob.register', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/register', {
      		controller: 'RegisterCtrl',
      		templateUrl: 'register/register.html'
    	});
  	}])

	.controller("RegisterCtrl", ["$scope", "Auth", "$location", "Profile",
		function($scope, Auth, $location, Profile) {
		 //$scope.help_message = "";
		 

		  $scope.createUser = function(){
		  	  $scope.message = null;
		      $scope.error = null;
		      console.log("creating user...");

		      if($scope.password1 == $scope.password2){
			      Auth.$createUser({
					  email: $scope.email,
					  password: $scope.password1
					}).then(function(userData) {
					  console.log("User " + userData.uid + " created successfully!");

					  return Auth.$authWithPassword({email: $scope.email, password: $scope.password1});
					}).then(function(authData) {
					  console.log("Logged in as:", authData.uid);
					  Profile.setUser({
					  		uname: $scope.username, 
					  		phone: $scope.phone, 
					  		firstName: $scope.firstName, 
					  		lastName: $scope.lastName,
					  		personalNum: $scope.personalNum});
					}).catch(function(error) {
					  console.error("Error: ", error);
					});
		      }
		      else{
		      	console.log("Missmatch of password!");
		      }
		  }

	}]);