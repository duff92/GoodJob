
// a simple wrapper on Firebase and AngularFire to simplify deps and keep things DRY
angular.module('firebase.utils', ['firebase', 'goodJob.config'])
   .factory('fbutil', ['$window', 'FirebaseURL', function($window, FBURL) {
      "use strict";

      var utils = {
        //Reference to Firebase
        ref: firebaseRef
      };

      return utils;

     /**
       * Example:
       * <code>
       *    ref = ref.child(pathRef(['messages']));
       * <code>
       * Validation of arguments of firebase reference
       * @function
       * @name pathRef
       * @param arguments of relative paths to the root folder
       * @return relative path joined with '/'
       */
      function pathRef(args) {
        for (var i = 0; i < args.length; i++) {
          if (angular.isArray(args[i])) {
            args[i] = pathRef(args[i]);
          }
          else if( typeof args[i] !== 'string' ) {
            throw new Error('Argument '+i+' to firebaseRef is not a string: '+args[i]);
          }
        }
        return args.join('/');
      }

      /**
       * Example:
       * <code>
       *    function(firebaseRef) {
         *       var ref = firebaseRef('path/to/data');
         *    }
       * </code>
       *
       * @function
       * @name firebaseRef
       * @param {String|Array...} path relative path to the root folder in Firebase instance
       * @return a Firebase instance
       */
      function firebaseRef(path) {
        var ref = new $window.Firebase(FBURL);
        var args = Array.prototype.slice.call(arguments);
        if( args.length ) {
          ref = ref.child(pathRef(args));
        }
        return ref;
      }
   }]);