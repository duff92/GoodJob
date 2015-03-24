

goodJobApp.controller("LoginCtrl", ["$scope", "Auth", 
	function($scope, Auth) {
	 //$scope.help_message = "";
	 $scope.login = function() {
	  console.log("Trying to login...");
      Auth.$authWithPassword({
		  email    : "bobtony@firebase.com",
		  password : "correcthorsebatterystaple"
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
    }

	  $scope.createUser = function(){
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
	  // download the data into a local object
	 /*ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});*/
	}
]);