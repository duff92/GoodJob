/* Module linked to register view.
* In this controller we implement the registration process where data is retrieved
* from the view and stored into firebase. Input validation is done in the .html file
*/
"use strict";
angular.module('goodJob.register', ['firebase.auth', 'firebase.utils', 'ngRoute'])
	//ng-route setup
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/register', {
      		controller: 'RegisterCtrl',
      		templateUrl: 'register/registerView.html'
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
		      if(!$scope.registerForm.$invalid && $scope.password1 == $scope.password2){
				  //user creation using Auth object
			      //Create method from firebase
				  Auth.$createUser({
					  //Get data from the view
					  email: $scope.email,
					  password: $scope.password1
					}).then(function(userData) { //Callback on user creation
					  console.log("User created successfully!");
					  //On registration return an Auth object for the new user
					  //@See Profile
					  return Auth.$authWithPassword({email: $scope.email, password: $scope.password1});
					}).then(function(authData) { //Callback
					  console.log("Logged in");
					  //Store the data into Firebase using Profile factory
					  Profile.setUser({
					  		uname: $scope.username, 
					  		phone: $scope.phone, 
					  		firstName: $scope.firstName, 
					  		lastName: $scope.lastName,
					  		personalNum: $scope.personalNum});
					  //Redirect to profile.
					  $location.path("/profile");
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