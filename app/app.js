
var goodJob = angular.module('goodJob', [
  'goodJob.home',
  'goodJob.config',
  'goodJob.security',
  'goodJob.login',
  'goodJob.listOfAdds',
  'goodJob.applications',
  'goodJob.profile']);

/*goodJobApp.run(["$rootScope", "$location", function($rootScope, $location) {
$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
  // We can catch the error thrown when the $requireAuth promise is rejected
  // and redirect the user back to the home page
  if (error === "AUTH_REQUIRED") {
    $location.path("/home");
  }
});
}]);
*/
goodJob.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      otherwise({
        redirectTo: '/home'
      });
  }]);