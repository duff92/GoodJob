angular.module('profile', ['firebase.utils', 'firebase'])
  .factory('Profile', ['fbutil', '$firebaseObject', function(fbutil, $firebaseObject) {

  	var _ref = fbutil.ref();

  	return{
  		setUser: function(info){
			fbutil.ref().onAuth(function(authData) {
			  if (authData) {
			    // save the user's profile into Firebase so we can list users,
			    // use them in Security and Firebase Rules, and show profiles
			    _ref.child("users").child(authData.uid).set({
			      uname: info.uname,
			      phone: info.phone,
			      firstName: info.firstName,
			      lastName: info.lastName,
			      personalNum: info.personalNum
			    });
			  }
			});
		},
		getUser: function(userid){
				var userRef = _ref.child("users").child(userid);
				console.log("getUser.userRef", $firebaseObject(userRef));
				return $firebaseObject(userRef);
		}
  	};
 }]);