"use strict";
angular.module('goodJob.listOfAdds', ['firebase.auth', 'firebase.utils', 'ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider.
    	when('/list', {
    	    controller: 'ApplicationCtrl',
    	    templateUrl: 'list-of-adds/list-of-adds.html'
    	});

	}])
	.config(['$httpProvider',function ($httpProvider) {
    	$httpProvider.defaults.useXDomain = true;
    	delete $httpProvider.defaults.headers.common['X-Requested-With'];
  	}])

	.controller("ApplicationCtrl", ["$scope", "$routeParams", "ApplicationAPI",
		function ($scope, $routeParams, ApplicationAPI) {


		    ApplicationAPI.latestApplications.get(function (data) {
		        console.log("Response from ApplicationAPI.latestApplictions:", data);
		        $scope.matchedJobs = data.matchningslista.matchningdata;
		        console.log("Mathcningdata", $scope.matchedJobs);
		        
		        $scope.ads = [{
		            company_name: matchedJobs[0].arbetsplatsnamn,
		            company_logo: "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
		            job_id: matchedJobs[0].annonsid,
		            job_title: matchedJobs[0].annonsrubrik,
		            job_hours: "Part time, 50%",
		            job_city: "Stockholm",
		            job_starts: "May 2015",
		            job_ends: "May 2016",
		            job_deadline: "2015-04-15"
		        }, {
		            company_name: "Sunshine Caramel co",
		            company_logo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/p160x160/1176357_376072752522448_1055231562_n.jpg?oh=a37afcd1f8a8d417ee2acdd479f95ee5&oe=55BC8F21&__gda__=1433796570_24e35ba39dace0da18cf7a186181f43a",
		            job_id: "2",
		            job_title: "Cola maker",
		            job_hours: "Full time, 100%",
		            job_city: "Uppsala",
		            job_starts: "May 2015",
		            job_ends: "Dec 2016",
		            job_deadline: "2015-03-31"
		        }, {
		            company_name: "Dinosaur train",
		            company_logo: "http://anagramballoons.com/CMSPages/Getfile.aspx?guid=be25fda0-1556-4c0d-b466-7c58c9b60a5e",
		            job_id: "3",
		            job_title: "Train driver",
		            job_hours: "Part time, 75%",
		            job_city: "Stockholm",
		            job_starts: "Jun 2015",
		            job_ends: "Dec 2016",
		            job_deadline: "2015-04-30"
		        }]
		    }, function (data) {
		        console.log("There was an error");
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
