/* Module taking care of pending applications for a logged in user.
*  The data is retrieved from firebase via the user's list of applications.
*  @See firebase.auth
*  @See firebase.utils
*/
"use strict";
angular.module('goodJob.applications', ['firebase.auth', 'firebase.utils', 'ngRoute', 'chart.js'])
   //Routing
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider.whenAuthenticated('/applications', {
          controller: 'ApplicationsCtrl',
          templateUrl: 'applications/applications.html'
      });
    }])
  //Definition of the controller
  .controller("ApplicationsCtrl", ["$scope", "Auth", "$location",
    function($scope, Auth, $location) {  
		//Populate the scope with a static list of data
		//@TODO fetch the list from firebase
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
                          job_status:     "Pending" 
                      }]
		//Function attached to the button continue on the add
		//for the moment the behavior is harcoded
		//@TODO Company must process the applications and modify the value
		//@Param value the value of the pending application, determined by the company.
        $scope.continueWithApplication = function(value) {
          console.log(value);
          if (value === 'Accepted') {
			//@TODO E-mail generation
            alert("Congratulations! Please meet us in Mars 2080 for your interview!");
          }
          else {
            alert("You need to get your application accepted first! Please be patient...");
          }
        }
		//Logout functionality
        $scope.logout = function(){
          console.log("Log out user!");
          Auth.$unauth();
        }

  }]);