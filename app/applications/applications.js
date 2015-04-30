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
  .controller("ApplicationsCtrl", ["$scope", "Auth", "$routeParams", "$location", "ApplicationAPI", "Profile",
    function($scope, Auth, $routeParams, $location, ApplicationAPI, Profile) {
		//Populate the scope with a static list of data
		//@TODO fetch the list from firebase


   Profile.getUser(Auth.$getAuth().uid).$bindTo($scope, "userObject").then(function(){

      var itemList = $scope.userObject.applications;

      console.log(itemList);


      

   //Communicating with rest API @See ApplicationAPI
        ApplicationAPI.myApplications.get(function (data) {
            console.log("Response from ApplicationAPI.latestApplictions:", data);
        //Object containing the jobs from arbets database (Array)
            var matchedJobs = data.matchningslista.matchningdata;
            console.log("Matchningdata", matchedJobs);
        //Empty the add list
            $scope.ads = [];
        //Populate the Add list with retrieved data
            for (var i = 0; i < matchedJobs.length; i++) {
              $scope.ads.push({
                company_name: matchedJobs[i].arbetsplatsnamn,
                company_logo: "/img/logo_black.png",
                job_header: matchedJobs[i].annonsrubrik,
                job_id: matchedJobs[i].annonsid,
                job_title: matchedJobs[i].yrkesbenamning,
                job_city: matchedJobs[i].kommunnamn,
                job_posted: matchedJobs[i].publiceraddatum.substring(0,10)
              })
            };

        }, function (data) {
          console.log("There was an error");
      });


      });

     
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
          $scope.removeFromActiveApplications = function (id) {
          console.log("Remove from active applications");

          Profile.removeApplication(id);

      //Redirect to applications
          $location.path("/applications");
      }

  }]);