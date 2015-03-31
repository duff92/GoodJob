'use strict';

// Declare app level module which depends on filters, and services
angular.module('goodJob.config', [])

  // where to redirect users if they need to authenticate (see security.js)
  .constant('loginRedirectPath', '/login')

  // your Firebase data URL goes here, no trailing slash
  .constant('FirebaseURL', 'https://goodjob.firebaseio.com');