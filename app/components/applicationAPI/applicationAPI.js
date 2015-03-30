angular.module('goodJob.applications', [])
  .factory('ApplicationAPI', ['$resource', '$routeParams', function($resource, $routeParams) {

  	//Method for getting single application from Arbetsformedlingen API
	this.getApplication = $resource("http://api.arbetsformedlingen.se/platsannons/:annonsId",{},{
		get:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json', 'Accept-Language':'sv-SE,sv'} 
        }
	});

    return this;
  }]);