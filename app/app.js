
var goodJob = angular.module('goodJob', [
  'goodJob.home',
  'goodJob.config',
  'goodJob.security',
  'goodJob.login',
  'goodJob.register',
  'goodJob.listOfAdds',
  'goodJob.applications',
  'goodJob.profile',
  'goodJob.values',
  'goodJob.apply',
  'mobile-angular-ui','mobile-angular-ui.gestures'])

  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication
    Auth.$onAuth(function(user) {
      console.log("A user logged in: ", user);
      $rootScope.loggedIn = !!user;
    });
    $rootScope.logout = function(){
      console.log("Unauth");
      Auth.$unauth();
    }
  }]);