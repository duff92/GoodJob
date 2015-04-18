//Utilitary module using factory to get firebase auth object used for user authentication.
angular.module('firebase.auth', ['firebase', 'firebase.utils'])
  .factory('Auth', ['$firebaseAuth', 'fbutil', function($firebaseAuth, fbutil) {
    //Auth object from firebase reference.
	return $firebaseAuth(fbutil.ref());
  }]);