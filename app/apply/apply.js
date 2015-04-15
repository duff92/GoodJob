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

	    ApplicationAPI.getApplication.get({'Id': $routeParams.jobID}, function (data) {
	        console.log("Response from ApplicationAPI.getAppliction:", data);
	        var platsannons = data.platsannons;
	        $scope.ad = {
	            company_name: "",
				company_logo: "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
				job_header: platsannons.annons.annonsrubrik,
				job_id: platsannons.annons.annonsid,
				job_title: platsannons.annons.yrkesbenamning,
				job_city: platsannons.annons.kommunnamn,
				job_address: platsannons.arbetsplats.postadress + ", " + platsannons.arbetsplats.postnummer + " " + platsannons.arbetsplats.postort,
				job_positions: platsannons.antal_platser,
				job_conditions: platsannons.villkor.varaktighet,
				job_hours: platsannons.villkor.arbetstid,
				job_link: platsannons.platsannonsUrl,
				job_posted: platsannons.annons.publiceraddatum.substring(0,10),
				job_deadline: platsannons.ansokan.sista_ansokningsdag.substring(0,10),
				job_description: platsannons.annons.annonstext.substring(0,50) + " ...",
				job_competences: ["Excel","Word","Paragliding"]
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


