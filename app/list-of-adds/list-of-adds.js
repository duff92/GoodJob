"use strict";
angular.module('goodJob.listOfAdds', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider.
    	when('/list', {
    	    controller: 'ApplicationCtrl',
    	    templateUrl: 'list-of-adds/list-of-adds.html'
    	});

	}])

	.controller("ApplicationCtrl", ["$scope", "$routeParams", "$location", "ApplicationAPI",
		function ($scope, $routeParams, $location, ApplicationAPI) {


		    ApplicationAPI.latestApplications.get(function (data) {
		        console.log("Response from ApplicationAPI.latestApplictions:", data);
		        var matchedJobs = data.matchningslista.matchningdata;
		        console.log("Mathcningdata", matchedJobs);

		        $scope.ads = [];

		        for (var i = 0; i < matchedJobs.length; i++) {
		        	$scope.ads.push({
						company_name: matchedJobs[i].arbetsplatsnamn,
						company_logo: "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
						job_header: matchedJobs[i].annonsrubrik,
						job_id: matchedJobs[i].annonsid,
						job_title: matchedJobs[i].yrkesbenamning,
						job_city: matchedJobs[i].kommunnamn,
						job_posted: matchedJobs[i].publiceraddatum.substring(0,10),
		        	})
		        };

		    }, function (data) {
		        console.log("There was an error");
		        //alert("There was an error loading the data");
		    });

			$scope.applyForJob = function (id) {
	        	console.log("Apply for job: " + id);
	        	$location.path("/apply/" + id);
	    	}

		    $scope.logout = function () {
		        console.log("Log out user!");
		        Auth.$unauth();
		    }
		}]);
