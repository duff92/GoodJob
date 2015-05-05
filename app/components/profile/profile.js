/* Utilitary module for user information using factory design pattern
*  Provides getter and setter for user information.
*  This is our interface between app and firebase for user information
*  @See firebase.utils
*/
angular.module('profile', ['firebase.utils', 'firebase'])
  .factory('Profile', ['fbutil', '$firebaseObject', '$firebaseArray', function(fbutil, $firebaseObject, $firebaseArray) {
	//Firebase reference
  	var _ref = fbutil.ref();
	
  	return{
		//Set user method that creates or update user information in firebase.
		//@Param info an object containing the user information that is required
  		setUser: function(info){
  			// console.log("setUser:",_ref.getAuth());
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
				// console.log("getUser.userRef", $firebaseObject(userRef));
				return $firebaseObject(userRef);
		},

		getApplications: function(postId){
			console.log("Call for getApplications");

			var activeApplicationsID = [];
			var appRef = _ref.child("users").child(_ref.getAuth().uid).child("applications");
			var applicationArray = $firebaseArray(appRef);
			
			console.log("applicationArray",applicationArray);
		 	console.log("applicationArray length",applicationArray.size);
			// for (var i = 0; i < applicationArray.length; i++) {
			//  	console.log("applicationArray[i]",applicationArray[i]);
			// 	activeApplicationsID.push(applicationArray[i].application.id);
			// };
			return applicationArray;
			//return $firebaseArray(appRef);
		},

		addApplication: function(applicationid){
			this.getApplications().$add({id:applicationid}).then(function(ref) {
			  var id = ref.key();
			  console.log("AddApplication added record with id " + id);
			});
		},

		removeApplication: function(applicationid){

			console.log(applicationid);

		this.getApplications().$remove(applicationid).then(function(ref) {
			  var id = ref.key();
			  console.log("removeApplication record with id " + id);
			});


		/* Working example */

		/* console.log(applicationid);

		var ref = _ref.child("users").child(_ref.getAuth().uid).child("applications");

		ref.child('-JoAoIKn3SwApouMYczH').remove(function(error){ 
			if (error) { console.log("Error:", error); } 
			else { console.log("Removed successfully!"); } 
		});*/


		}
  	};
 }]);