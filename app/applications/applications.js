"use strict";
angular.module('goodJob.applications', ['firebase.auth', 'firebase.utils', 'ngRoute', 'chart.js'])

<<<<<<< HEAD
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider.whenAuthenticated('/applications', {
          controller: 'ApplicationsCtrl',
          templateUrl: 'applications/applications.html'
      });
    }])

  .controller("ApplicationsCtrl", ["$scope", "Auth", "$location",
    function($scope, Auth, $location) {       
=======
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/applications', {
      		controller: 'ApplicationsCtrl',
      		templateUrl: 'applications/applications.html'
    	});
  	}])

	.controller("ApplicationsCtrl", ["$scope", "Auth", "$location",
		function($scope, Auth, $location) {				
>>>>>>> anna_branch

        $scope.ads =[{  company_name:     "Bison",
                        company_match:    "76%",
                        company_logo:     "https://cdn.tutsplus.com/vector/uploads/legacy/articles/linkb_20weirdlogos/weirdlogos_prev.jpg",
                          job_title:      "Meat taster",
                          job_hours:      "Part time, 25%",
                          job_city:       "Madrid",
                          job_starts:     "May 2015",
                          job_ends:       "May 2016",
                          job_deadline:   "2015-04-01",
                          job_status:     "Accepted" 
                      },{ company_name:   "Ballet Acadamy",
                        company_match:    "85%",
                        company_logo:     "http://www.virginiabeachballetacademy.com/rw_common/images/VBBA%20Logo%20120H.png",
                          job_title:      "Shoe maker",
                          job_hours:      "Full time, 100%",
                          job_city:       "Malmö",
                          job_starts:     "May 2015",
                          job_ends:       "Dec 2016",
                          job_deadline:   "2015-03-31",
                          job_status:     "Accepted" 
                      }]

        $scope.continue = function(value) {
          console.log(value);
          if (value === 'Accepted') {
            alert("Congratulations! Please meet us in Mars 2080 for your interview!");
          }
          else {
            alert("You need to get your application accepted first! Please be patient...");
          }
        }
<<<<<<< HEAD
        $scope.logout = function(){
          console.log("Log out user!");
          Auth.$unauth();
        }

  }]);
=======

	}]);
>>>>>>> anna_branch
