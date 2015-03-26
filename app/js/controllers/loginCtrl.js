

goodJobApp.controller("LoginCtrl", ["$scope", "Auth", "$location",
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

	 /* $scope.createUser = function(){
	  	  $scope.message = null;
	      $scope.error = null;
	      console.log("creating user...");
	      Auth.$createUser({
	        email: $scope.email,
	        password: $scope.password
	      }).then(function(userData) {
	        $scope.help_message = "User created with uid: " + userData.uid;
	      }).catch(function(error) {
	      	console.log("Error when creating user", error);
	        $scope.error = error;
	      });
	  }
	}*/
}]);