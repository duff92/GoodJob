

goodJobApp.controller("ApplicationCtrl", function ($scope, $routeParams, GoodJob) {
	 
	  console.log("Annonsid:",$routeParams.applicationId);
	  
	 GoodJob.getApplication.get({annonsId:$routeParams.applicationId},function(data){
	 	console.log("Response from GoodJob.getAppliction:", data);
	     $scope.platsannons = data.platsannons;
	   },function(data){
	     console.log("There was an error");
	     $scope.platsannons	= "There was an error";
	   });

	 //Haven't tested fully yet
	 /*GoodJob.getApplicationLogo.get({annonsId:$routeParams.applicationId},function(logo){
	 	console.log("Response from GoodJob.getApplictionLogo:", "data:image/gif;base64," + btoa(logo));
	    $scope.platsannonsLogo = "data:image/gif;base64," + btoa(logo);
	   },function(data){
	     console.log("There was an error");
	     $scope.platsannonsLogo	= "There was an error";
	   });*/
	   	
	 GoodJob.analyzeApplicationText.get({text:textToAnalyze},function(data){
	 	console.log("Response from GoodJob.analyzeApplicationText:", data);
	    // $scope.platsannonsLogo = "data:image/gif;base64," + btoa(logo);
	   },function(data){
	     console.log("There was an error");
	     $scope.platsannonsLogo	= "There was an error";
	   });
});