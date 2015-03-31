angular.module('goodJob.profile', ['firebase.utils'])
  .factory('Profile', ['fbutil', function(fbutil) {

  	this.createProfile = function(name, adress){
			fbutil.ref().onAuth(function(authData) {
			  if (authData) {
			    // save the user's profile into Firebase so we can list users,
			    // use them in Security and Firebase Rules, and show profiles
			    fbutil.ref().child("users").child(authData.uid).set({
			      provider: authData.provider,
			      name: name,
			      adress: adress
			    });
			  }
			});
		}

    return this;
  }]);