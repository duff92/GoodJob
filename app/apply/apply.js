"use strict";
angular.module('goodJob.apply', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/apply', {
			controller: 'ApplyCtrl',
			templateUrl: 'apply/apply.html'
    	});
  	}])

	.controller("ApplyCtrl", ["$scope", "$routeParams",
		function($scope, $location) {

			console.log("Apply");

		 //$scope.help_message = "";


		$scope.ads =[{  company_name:   "Monsters inc",
			company_match: "87%",
			company_logo: "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
			job_title: "Administrator",
			job_description: "Adminitrate monsters schedules as well as door transportation within the facility.",
			job_hours: "Part time, 50%",
			job_city: "Stockholm",
			job_address: "Monsters inc, Icecream street 43, 100 28 Stockholm", 
			job_starts: "May 2015",
			job_ends: "May 2016",
			job_deadline: "2015-04-15",
			job_competences: ["Word","Screaming","Children"]
	    }]
	}]
);


