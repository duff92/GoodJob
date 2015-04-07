"use strict";
angular.module('goodJob.listOfAdds', ['firebase.auth', 'firebase.utils', 'ngRoute', 'goodJob.applications'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/list', {
      		controller: 'ApplicationCtrl',
      		templateUrl: 'list-of-adds/list-of-adds.html'
    	});
  	}])

	.controller("ApplicationCtrl", ["$scope", "$routeParams",
		function($scope, $routeParams) {
		 	
	/*  console.log("Annonsid:",$routeParams.applicationId);
	  
	 ApplicationAPI.getApplication.get({annonsId:$routeParams.applicationId},function(data){
	 	console.log("Response from ApplicationAPI.getAppliction:", data);
	     $scope.platsannons = data.platsannons;
	   },function(data){
	     console.log("There was an error");
	     $scope.platsannons	= "There was an error";
	   });*/

		//Code from anna-views	 	
	  console.log("Writing ads");

	  $scope.ads =[{  company_name:   "Monsters inc",
	          company_match:  "87%",
	          company_logo:   "http://vignette3.wikia.nocookie.net/disney-infinity/images/7/75/Monsters_Inc.jpg/revision/latest?cb=20130118180017",
	            job_title:  "Administrator",
	            job_hours:  "Part time, 50%",
	            job_city:   "Stockholm",
	            job_starts: "May 2015",
	            job_ends:   "May 2016",
	            job_deadline:"2015-04-15"
	        },{ company_name:   "Sunshine Caramel co",
	          company_match:  "97%",
	          company_logo:   "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/p160x160/1176357_376072752522448_1055231562_n.jpg?oh=a37afcd1f8a8d417ee2acdd479f95ee5&oe=55BC8F21&__gda__=1433796570_24e35ba39dace0da18cf7a186181f43a",
	            job_title:  "Cola maker",
	            job_hours:  "Full time, 100%",
	            job_city:   "Uppsala",
	            job_starts: "May 2015",
	            job_ends:   "Dec 2016",
	            job_deadline:"2015-03-31"
	        },{ company_name:   "Dinosaur train",
	          company_match:  "93%",
	          company_logo:   "http://anagramballoons.com/CMSPages/Getfile.aspx?guid=be25fda0-1556-4c0d-b466-7c58c9b60a5e",
	            job_title:  "Train driver",
	            job_hours:  "Part time, 75%",
	            job_city:   "Stockholm",
	            job_starts: "Jun 2015",
	            job_ends:   "Dec 2016",
	            job_deadline:"2015-04-30"
	        }]
	}]);
