

'use strict';

goodJobApp.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://goodjob.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

/* GoodJob factory, methods for handeling the applications */
goodJobApp.factory('GoodJob', function ($resource, $routeParams){

	//Method for getting single application from Arbetsformedlingen API
	this.getApplication = $resource("http://api.arbetsformedlingen.se/platsannons/:annonsId",{},{
		get:{
            method:"GET",
            headers:{'Content-Type':'application/json;charset=UTF-8', 'Accept':'application/json', 'Accept-Language':'sv-SE,sv'} 
        }
	});
			
	this.getApplicationLogo = $resource("http://api.arbetsformedlingen.se/platsannons/:annonsId/logotyp", {},{
		get:{
			method:"GET",
			headers:{'Content-Type':'images/gif', 'Accept-Language':'sv-SE,sv'}
		}
	});

	//Method for getting keywords from application text, maybe useful?
	this.analyzeApplicationText = $resource("http://access.alchemyapi.com/calls/text/TextGetRankedKeywords", {apikey:'cafd0c37b7a9d2c79519455c289e3658276efc81', outputMode:'json', maxRetrieve:3});

	return this;


});

/* Contains of all personal information of the users, should use firebase integration for security of storing myProfile, newJobs and myApplications */
goodJobApp.factory('PersonalProfile', function(){
		
		var ref = new Firebase("https://goodjob.firebaseio.com");
		//var newJobs = [];
		//var myApplications = [];

		//-------------- PROFILE INFO ------------------------
		this.createProfile = function(name, adress){
			ref.onAuth(function(authData) {
			  if (authData) {
			    // save the user's profile into Firebase so we can list users,
			    // use them in Security and Firebase Rules, and show profiles
			    ref.child("users").child(authData.uid).set({
			      provider: authData.provider,
			      name: name,
			      adress: adress
			    });
			  }
			});
		}
		/*//getting profile info
		this.getAllProfileInfo = function(){
			return myProfile;
		}

		//Updates single post in profile
		this.updateInfoInProfile = function(indexToUpdate){

		}

		//Maybe not necessary?
		this.removeInfoFromProfile = function(indexToRemove){

		}

		//------------- NEW JOBS -----------------------------

		//Getting available jobs
		this.getNewJobs = function(){
			return newjobs;
		}

		this.addNewJobToProfile = function(){

		}

		this.removeNewJobFromProfile = function(){

		}

		// ------------My applications ----------------------
		
		/*Add application to my applications
			IN: applicationToAdd - application to add to myApplications
		
		this.addNewApplication = function(applicationToAdd){

		}
		/*Remove application from my applications
			IN: id - applicationid of application to remove from myApplications
		
		this.removeApplication = function(id){

		}

		//Returns all searched applications 
		this.getAllApplications = function(){
			return myApplications;
		}*/

		return this;
});