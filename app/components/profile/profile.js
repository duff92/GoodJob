/* Utilitary module for user information using factory design pattern
*  Provides getter and setter for user information.
*  This is our interface between app and firebase for user information
*  @See firebase.utils
*/
angular.module('profile', ['firebase.utils', 'firebase'])
  .factory('Profile', ['fbutil', '$firebaseObject', function(fbutil, $firebaseObject) {
	//Firebase reference
  	var _ref = fbutil.ref();
	
  	return{
		//Set user method that creates or update user information in firebase.
		//@Param info an object containing the user information that is required
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
		//Getter method for the user information.
		//Return a JSON object containing all user information stored into firebase.
		getUser: function(userid){
				var userRef = _ref.child("users").child(userid);
				console.log("getUser.userRef", $firebaseObject(userRef));
				return $firebaseObject(userRef);
		}
  	};
 }]);