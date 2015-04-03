angular.module('profile', ['firebase.utils'])
  .factory('Profile', ['fbutil', function(fbutil) {

  	this.setUser = function(info){
		fbutil.ref().onAuth(function(authData) {
		  if (authData) {
		    // save the user's profile into Firebase so we can list users,
		    // use them in Security and Firebase Rules, and show profiles
		    fbutil.ref().child("users").child(authData.uid).set({
		      uname: info.uname,
		      phone: info.phone,
		      firstName: info.firstName,
		      lastName: info.lastName,
		      personalNum: info.personalNum
		    });
		  }
		});
	}
	this.getUser = function(){
		var user = null;
		fbutil.ref().onAuth(function(authData){
			if(authData){
				var userData = fbutil.ref().child("users").child(authData.uid);
				userData.once("value", function(snapshot) {
				  user = snapshot.val();
				}, function (errorObject) {
				  console.log("The read failed: " + errorObject.code);
				});
			}
		});
		return user;
	}

    return this;
  }]);