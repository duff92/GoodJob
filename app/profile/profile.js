/* Module linked to the profile view
*  It display user based information retrieved from firebase
*  @TODO remove the static information and replace with firebase data
*/
"use strict";
angular.module('goodJob.profile', ['firebase.auth', 'firebase.utils', 'ngRoute', 'chart.js'])
	//Routing
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.whenAuthenticated('/profile', {
      		controller: 'ProfileCtrl',
      		templateUrl: 'profile/profile.html'
    	});
  	}])
	//definition of the controller
	.controller("ProfileCtrl", ["$scope", "Auth", "$location", "Profile",
		function($scope, Auth, $location, Profile) {
		//Use of Profile factory
		// @See Profile for more information
        Profile.getUser(Auth.$getAuth().uid).$bindTo($scope, "userObject").then(function(){

          var userdata = $scope.currentUser = Auth.$getAuth(); 

            //populate view from firebase retrieved data
			$scope.userInfo =[ {      info_header: "Username",
                                    info_value: $scope.userObject.uname},   
                                  { info_header: "Firstname",
                                    info_value: $scope.userObject.firstName},
                                  { info_header: "Surname",
                                    info_value: $scope.userObject.lastName},
                                  { info_header: "Email",
                                    info_value: userdata.password.email},
                                  { info_header: "Phone",
                                    info_value: $scope.userObject.phone}];
    
          });
		//Static data for competences and values	  
	    $scope.values_series = [ 'Basic Behaviour', 'Adapted Behaviour'];

        $scope.values_lables = [ 'Dominant',    'Influential',  'Steady',     'Conscientious'];
        $scope.values_data =   [[ 36,            76,             62,           37            ],
                                [ 33,            74,             62,           63           ]];
        $scope.values_colors = [ 'Red',         'Yellow',       'Green',      'Blue'         ];

        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.competence_lables =[  "Surfing", 
                                      "Hawaiian",
                                      "Mail-Order Sales",
                                      "Tele Sales",
                                      "Corporate Sales"];

        $scope.competence_data = [  3,
                                      5, 
                                      1, 
                                      4, 
                                      2];

        $scope.competence_chart = 'PolarArea';
		//Function attached to button redirecting to values.
        $scope.updateValues = function(){
          $location.path("/values");
        }
		//Logout functionality.
        $scope.logout = function(){
          console.log("Log out user!");
          Auth.$unauth();
        }
	}]);