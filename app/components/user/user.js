/* Utilitary module for user information using factory design pattern
*  Provides getter and setter for user information.
*  This is our interface between app and firebase for user information
*  @See firebase.utils
*/
angular.module('user', ['firebase.utils', 'firebase'])
  .factory('User', ['fbutil', '$firebaseObject', '$firebaseArray', function(fbutil, $firebaseObject, $firebaseArray) {
	//Firebase reference
  	var _ref = fbutil.ref();
	
  	return{
		//Set user method that creates or update user information in firebase.
		//@Param info an object containing the user information that is required
  		setUser: function(info){
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
		getUser: function(){
				var userRef = _ref.child("users").child(_ref.getAuth().uid);
				
				return $firebaseObject(userRef);
		},

		getApplications: function(postId){
			var activeApplicationsID = [];
			var appRef = _ref.child("users").child(_ref.getAuth().uid).child("applications");
			var applicationArray = $firebaseArray(appRef);
			
			return applicationArray;
		},
		
		setPhone : function(newPhone){
			var obj = _ref.child("users").child(_ref.getAuth().uid);
			obj.update({phone : newPhone});			
		},
		addApplication: function(applicationid){
			this.getApplications().$add({id:applicationid}).then(function(ref) {
			  var id = ref.key();
			  
			});
		},

		removeApplication: function(item){
			var ref = _ref.child("users").child(_ref.getAuth().uid).child("applications");
			ref.child(item).remove(function(error){ 
				if (error) { console.log("Error:", error); } 
				else { console.log("Removed successfully!"); } 
			});
		}
  };
}]);