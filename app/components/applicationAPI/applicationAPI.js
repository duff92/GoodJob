angular.module('applicationAPI', ['ngResource'])
  .factory('ApplicationAPI', ['$resource', '$routeParams', function($resource, $routeParams) {

  this.latestApplications = $resource("http://api.arbetsformedlingen.se/platsannons/matchning?kommunid=180&sida=1&antalrader=10", {},{
    get:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json', 'Accept-Language':'sv-SE,sv'} 
        }
  });
  	//Method for getting single application from Arbetsformedlingen API
	this.getApplication = $resource("http://api.arbetsformedlingen.se/platsannons/:annonsId/",{},{
		query:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json', 'Accept-Language':'sv-SE,sv'} 
        }
  });

    return this;
  }]);