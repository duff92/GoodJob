

goodJobApp.controller("LoginCtrl", function($scope, $firebaseAuth) {
	  var ref = new Firebase("https://goodjob.firebaseio.com/");

	  $scope.createUser = function(){
	  	
	  }
	  // download the data into a local object
	 /*ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});*/
});