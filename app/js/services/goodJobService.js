

'use strict';
/* GoodJob factory, methods for handeling the applications */
goodJobApp.factory('GoodJob', function ($resource, $routeParams){

	//Method for getting single application from Arbetsformedlingen API
	this.getApplication = $resource("http://api.arbetsformedlingen.se/platsannons/:annonsId",{},{
		get:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json'} 
        }
	});
	return this;
});

//Maybe used later for login authentication
/*goodJobApp.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://goodjob.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);*/