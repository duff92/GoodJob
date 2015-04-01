"use strict";
angular.module('goodJob.register', ['firebase.auth', 'firebase.utils', 'ngRoute', 'firebase'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/register', {
      		controller: 'RegisterCtrl',
      		templateUrl: 'register/register.html'
    	});
  	}])

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

 


	}]);