"use strict";
angular.module('goodJob.profile', ['firebase.auth', 'firebase.utils', 'ngRoute', 'chart.js'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.whenAuthenticated('/profile', {
      		controller: 'ProfileCtrl',
      		templateUrl: 'profile/profile.html'
    	});
  	}])

	.controller("ProfileCtrl", ["$scope", "Auth", "$location", "Profile",
		function($scope, Auth, $location, Profile) {
				// $scope.userInfo = $firebaseObject(Profile.getUser());
        //console.log("ProfileCtrl", Profile.getUser(Auth.$getAuth().uid));
        Profile.getUser(Auth.$getAuth().uid).$bindTo($scope, "userObject").then(function(){
            $scope.userInfo =[ {      info_header: "Username",
                                    info_value: $scope.userObject.uname},   
                                  { info_header: "Firstname",
                                    info_value: $scope.userObject.firstName},
                                  { info_header: "Surname",
                                    info_value: $scope.userObject.lastName},
                                  { info_header: "Email",
                                    info_value: "NOT IMPLEMENTED YET! :)"},
                                  { info_header: "Phone",
                                    info_value: $scope.userObject.phone}];
    
          });
			  
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
        $scope.updateValues = function(){
          $location.path("/values");
        }
        $scope.logout = function(){
          console.log("Log out user!");
          Auth.$unauth();
        }
	}]);