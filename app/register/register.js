"use strict";
angular.module('goodJob.register', ['firebase.auth', 'firebase.utils', 'ngRoute', 'firebase'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/register', {
      		controller: 'RegisterCtrl',
      		templateUrl: 'register/register.html'
    	});
  	}])

<<<<<<< HEAD
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

=======
	.controller("RegisterCtrl", ["$scope", "CommonProp", "$firebase", "$firebaseAuth", "$location",
		function($scope, $firebaseAuth, $location) {
			var ref = new Firebase("https://goodjob.firebaseio.com");
			var auth = $firebaseAuth(ref);
			var db = $firebase(ref);
			$scope.createUser = function(){
				//TODO : Input validation
				var newUserEmail = $scope.email;
				var newUserPassword = $scope.password1;
				if(newUserEmail && newUserPassword){
					auth.$createUser(newUserEmail, newUserPassword)
						.then(function() {
							console.log("User created !");
							//Sets the user for the other modules
							CommonProp.setUser(newUserEmail);
							//Goes back to home
							$location.path('/home');
							//TODO Input validation
							var username = $scope.username;
							var email = $scope.email;
							var fName = $scope.fName;
							var lName = $scope.lName;
							var phone = $scope.phone;
							var persNumber = $scope.personal.value;
							
							//Pushes informations about the new user into the database
							db.$push({
								username: username,
								email: email,
								fName: fName,
								lName: lName,
								phone: phone,
								persNumber: persNumber
							}).then(function(ref){
								console.log(ref);
							}, function(error) {
								console.log(error);
							});
							
						}, function(error) {
							console.log(error);
							//TODO output errors in scope.
						});
				}
		  }

 


>>>>>>> origin/josselin-branch
	}]);