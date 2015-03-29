	

"use strict";
angular.module('goodJob.listOfAdds', ['firebase.auth', 'firebase.utils', 'ngRoute', 'goodJob.applications'])

	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/list-of-adds', {
      		controller: 'ApplicationCtrl',
      		templateUrl: 'list-of-adds/list-of-adds.html'
    	});
  	}])

	.controller("ApplicationCtrl", ["$scope", "$routeParams", "ApplicationAPI",
		function($scope, $routeParams, ApplicationAPI) {
		 	
	  console.log("Annonsid:",$routeParams.applicationId);
	  
	 ApplicationAPI.getApplication.get({annonsId:$routeParams.applicationId},function(data){
	 	console.log("Response from ApplicationAPI.getAppliction:", data);
	     $scope.platsannons = data.platsannons;
	   },function(data){
	     console.log("There was an error");
	     $scope.platsannons	= "There was an error";
	   });
	}]);
