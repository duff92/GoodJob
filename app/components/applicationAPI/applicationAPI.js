/* Utilitary module containing factory method used to interact with arbets REST API
*  Contains getter for latest applications and single application by ID.
*/
angular.module('applicationAPI', ['ngResource'])
  //factory design pattern
  .factory('ApplicationAPI', ['$resource', '$routeParams', function($resource, $routeParams) {
	//factory method getting the 10 last job offers from arbets database
  this.latestApplications = $resource("http://api.arbetsformedlingen.se/platsannons/matchning?kommunid=180&sida=1&antalrader=10", {},{
    //GET request crafting
	get:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json', 'Accept-Language':'sv-SE,sv'} 
        }
  });
  	//Method for getting single application from Arbetsformedlingen API
	this.getApplication = $resource("http://api.arbetsformedlingen.se/platsannons/:Id",{Id:"@Id"},{
		//GET request crafting
		get:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json', 'Accept-Language':'sv-SE,sv'} 
        }
  });

      //Method for getting single application from Arbetsformedlingen API
  this.myApplications = $resource("http://api.arbetsformedlingen.se/platsannons/matchning?kommunid=180&sida=1&antalrader=3",{},{
    //GET request crafting
    get:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json', 'Accept-Language':'sv-SE,sv'} 
        }
  });


    return this;
  }]);