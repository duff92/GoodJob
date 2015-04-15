"use strict";
angular.module('goodJob.apply', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.whenAuthenticated('/apply/:jobID', {
			controller: 'ApplyCtrl',
			templateUrl: 'apply/apply.html'
    	});
  	}])

	.controller("ApplyCtrl", ["$scope", "Auth", "$routeParams", "$location", "ApplicationAPI",
		function($scope, Auth, $routeParams, $location, ApplicationAPI) {

			console.log("Apply for jobID: " + $routeParams.jobID);

	    ApplicationAPI.getApplication.get({annonsID: $routeParams.jobID}, function (data) {
	        console.log("Response from ApplicationAPI.getAppliction:", data);
	        $scope.ad = {
	            company_name: matchedJobs[i].arbetsplatsnamn,
							company_logo: "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
							job_header: matchedJobs[i].annonsrubrik,
							job_id: matchedJobs[i].annonsid,
							job_title: matchedJobs[i].yrkesbenamning,
							job_city: matchedJobs[i].kommunnamn,
							job_address: matchedJobs[i].arbetsplats.postadress + ", " + matchedJobs[i].arbetsplats.postnummer + " " + matchedJobs[i].arbetsplats.postort,
							job_positions: matchedJobs[i].antal_platser,
							job_conditions: matchedJobs[i].villkor.varaktighet,
							job_hours: matchedJobs[i].villkor.arbetstid,
							job_link: matchedJobs[i].platsannonsUrl,
							job_posted: matchedJobs[i].publiceraddatum.substring(0,10),
							job_deadline: matchedJobs[i].ansokan.sista_ansokningsdag.substring(0,10),
							job_description: matchedJobs[i].annonstext.substring(0,50) + " ..."
	        }
	    }, function (data) {
	        console.log("There was an error");
	    });
		
		$scope.addToActiveApplications = function (id) {
	        console.log("Add to active applications");
	        $location.path("/applications");
	    }
	}]
);


