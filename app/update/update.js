/* Module linked to update view.
* In this controller we implement the update process where data is retrieved
* from the view and stored into firebase. Input validation is done in the .html file.
*/
"use strict";
angular.module('goodJob.update', ['firebase.auth', 'firebase.utils', 'ngRoute'])
	//ng-route setup
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.whenAuthenticated('/update', {
      		controller: 'UpdateCtrl',
      		templateUrl: 'update/updateView.html'
    	});
  	}])
	//Definition of the controller
	.controller("UpdateCtrl", ["$scope", "Auth", "$location", "Profile",
		function($scope, Auth, $location, Profile) {
		var userdata = $scope.currentUser = Auth.$getAuth(); 
		//Get user current information from firebase.
		Profile.getUser(Auth.$getAuth().uid).$bindTo($scope, "userObject").then(function(){
			//Variable used to access auth object containing e-mail and password
			
		
			//pre fill fields 
			$scope.email = userdata.password.email;
			$scope.phone = $scope.userObject.phone;
			
		});	
			//Define the updateUser method user when update button is clicked
			$scope.updateUser = function(){
		  	  $scope.message = null;
		      $scope.error = null;
			  //Check if the form is valid.
		      if(!$scope.updateForm.$invalid){
			    //Store the data into Firebase using Profile factory
				//Set phone number
				Profile.setPhone($scope.phone);
				console.log("phone successfully changed to : " , $scope.phone);
				
				//Change email only if a new email address has been put in the field
				if(userdata.password.email !== $scope.email){
				//Change email
				Auth.$changeEmail({
					oldEmail: userdata.password.email,
					newEmail: $scope.email,
					password: $scope.password
				}).then(function(){
					console.log("Email changed to : " , $scope.email);	
				}).catch(function(error){
					console.error("Error: ", error);
				});
				}
				//Change password only if new password field has been changed
				if(!$scope.updateForm.newPassword.$pristine){
				//Chnage password
				Auth.$changePassword({
					email: userdata.password.email,
					oldPassword: $scope.password,
					newPassword: $scope.newPassword
				}).then(function(){
					console.log("Password changed successfully!");
				}).catch(function(error) {
					console.error("Error: ", error);
				});
				}
				//Redirect to profile.
				$location.path("/profile");
			  }	
		      else{
		      	console.log("Invalid changes");
		      }
		  }

	}]);