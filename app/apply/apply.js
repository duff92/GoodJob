/* Module linked to apply view.
* It displays specific information about a selected job.
* @See firebase.auth
* @See firebase.utils
*/
"use strict";
angular.module('goodJob.apply', ['firebase.auth', 'firebase.utils', 'ngRoute'])
	//Routing
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/apply/:jobID', {
			controller: 'ApplyCtrl',
			templateUrl: 'apply/applyView.html'
    	});
  	}])
	//Definition of the controller
	.controller("ApplyCtrl", ["$scope", "Auth", "$routeParams", "$location", "ApplicationAPI", "Profile",
		function($scope, Auth, $routeParams, $location, ApplicationAPI, Profile) {
		$scope.radioModel = 'Middle';
		// console.log("Apply for jobID: " + $routeParams.jobID);
		//Get information from arbets API using job id
		//@See ApplicationAPI
	    ApplicationAPI.getApplication.get({'Id': $routeParams.jobID}, function (data) {
	        // console.log("Response from ApplicationAPI.getAppliction:", data);
	        //Job object
			var platsannons = data.platsannons;

	        // Modify the data to a more user friendly format
	        platsannons.annons.publiceraddatum = platsannons.annons.publiceraddatum.substring(0,10)
	        if (platsannons.ansokan.sista_ansokningsdag != null) {
	        	platsannons.ansokan.sista_ansokningsdag = platsannons.ansokan.sista_ansokningsdag.substring(0,10);
	        };
	        if (platsannons.annons.annonstext.length > 300) {
	        	platsannons.annons.annonstext = platsannons.annons.annonstext.substring(0,300) + "...";
	        };
	        platsannons.arbetsplats.postadress = platsannons.arbetsplats.postadress + " " + platsannons.arbetsplats.postnummer + " " + platsannons.arbetsplats.postort;


			//Populate the view with retrieved information
	        $scope.ad = {
	            company_name: platsannons.arbetsplats.arbetsplatsnamn,
				company_logo: platsannons.arbetsplats.logotypurl,
				job_header: platsannons.annons.annonsrubrik,
				job_id: platsannons.annons.annonsid,
				job_title: platsannons.annons.yrkesbenamning,
				job_city: platsannons.annons.kommunnamn,
				job_address: platsannons.arbetsplats.postadress,
				job_conditions: platsannons.villkor.varaktighet,
				job_hours: platsannons.villkor.arbetstid,
				job_link: platsannons.annons.platsannonsUrl,
				job_posted: platsannons.annons.publiceraddatum,
				job_deadline: platsannons.ansokan.sista_ansokningsdag,
				job_description: platsannons.annons.annonstext,
				job_competences: [
							{'title':"Excel",'level':'Very Bad'},
							{'title':"Word",'level':'Bad'},
							{'title':"Paragliding",'level':'Very Bad'}]
	        }
	    }, function (data) {
	        console.log("There was an error");
	    });
		//Function attached to button.
		//Add specific job to user's active applications
		//@TODO add to the user's data in firebase.
		$scope.addToActiveApplications = function (id) {
      // console.log("Add to active applications",id);

			//Redirect to applications
      $location.path("/activeJobApplications");
	  //Test if logged in.
      if(Auth.$getAuth() !== null){
      Profile.addApplication(id);
	  }
    }
	}]


);


