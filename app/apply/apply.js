"use strict";
angular.module('goodJob.apply', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.whenAuthenticated('/apply/:jobID', {
			controller: 'ApplyCtrl',
			templateUrl: 'apply/apply.html'
    	});
  	}])

	.controller("ApplyCtrl", ["$scope", "Auth", "$routeParams",
		function($scope, Auth, $routeParams) {

			console.log("Apply");
			console.log("jobID" + $routeParams.jobID);

		 //$scope.help_message = "";

		// $scope.ad = {  company_name:   "Monsters inc",
		// 	company_match: "87%",
		// 	company_logo: "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
		// 	job_title: "Administrator",
		// 	job_description: "Adminitrate monsters schedules as well as door transportation within the facility.",
		// 	job_hours: "Part time, 50%",
		// 	job_city: "Stockholm",
		// 	job_address: "Monsters inc, Icecream street 43, 100 28 Stockholm", 
		// 	job_starts: "May 2015",
		// 	job_ends: "May 2016",
		// 	job_deadline: "2015-04-15",
		// 	job_competences: ["Word","Screaming","Children"]
	 //    }

	    ApplicationAPI.getApplication.get($routeParams.jobID, function (data) {
	        console.log("Response from ApplicationAPI.getAppliction:", data);
	        $scope.ad = {
	            company_name: data.arbetsplatsnamn,
	            company_logo: "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
	            job_id: "1",
	            job_title: data.annonsrubrik,
	            job_hours: "Part time, 50%",
	            job_city: "Stockholm",
	            job_starts: "May 2015",
	            job_ends: "May 2016",
	            job_deadline: "2015-04-15"
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


