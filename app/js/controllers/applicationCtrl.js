

goodJobApp.controller("ApplicationCtrl", function ($scope, $routeParams, GoodJob) {
	 
	  console.log("Annonsid:",$routeParams.applicationId);
	  
	 GoodJob.getApplication.get({annonsId:$routeParams.applicationId},function(data){
	 	console.log("Response from GoodJob.getAppliction:", data);
	     $scope.platsannons = data.platsannons;
	   },function(data){
	     console.log("There was an error");
	     $scope.platsannons	= "There was an error";
	   });
});