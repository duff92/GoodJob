angular.module('profile', ['firebase.utils', 'firebase'])
  .factory('Profile', ['fbutil', '$firebaseObject', function(fbutil, $firebaseObject) {

  	var _ref = fbutil.ref();

  	return{
  		setUser: function(info){
  			console.log("setUser:",_ref.getAuth());
			    _ref.child("users").child(_ref.getAuth().uid).set({
			      uname: info.uname,
			      phone: info.phone,
			      firstName: info.firstName,
			      lastName: info.lastName,
			      personalNum: info.personalNum
			    });
		},
		getUser: function(userid){
				var userRef = _ref.child("users").child(userid);
				console.log("getUser.userRef", $firebaseObject(userRef));
				return $firebaseObject(userRef);
		}
  	};
 }]);