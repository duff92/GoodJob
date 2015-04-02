"use strict";
angular.module('goodJob.profile', ['firebase.auth', 'firebase.utils', 'ngRoute', 'chart.js'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.whenAuthenticated('/profile', {
      		controller: 'ProfileCtrl',
      		templateUrl: 'profile/profile.html'
    	});
  	}])

	.controller("ProfileCtrl", ["$scope", "Auth", "$location",
		function($scope, Auth, $location) {
					 
			  $scope.userInfo =[{       info_header: "Firstname",
			                            info_value: "Lilo"},
			                          { info_header: "Surname",
			                            info_value: "Pelekai"},
			                          { info_header: "Email",
			                            info_value: "lilopelekai@email.com"},
			                          { info_header: "Phone",
			                            info_value: "012-345 67 89"},
			                          { info_header: "City",
			                            info_value: "Hawaii"}]

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

        $scope.logout = function(){
          console.log("Log out user!");
          Auth.$unauth();
        }
	}]);