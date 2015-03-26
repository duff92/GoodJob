
var goodJobApp = angular.module('GoodJob', ['firebase','ngRoute','ngResource']);

goodJobApp.run(["$rootScope", "$location", function($rootScope, $location) {
$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
  // We can catch the error thrown when the $requireAuth promise is rejected
  // and redirect the user back to the home page
  if (error === "AUTH_REQUIRED") {
    $location.path("/home");
  }
});
}]);

goodJobApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/home', {
        // the rest is the same for ui-router and ngRoute...
        controller: "MainCtrl",
        templateUrl: "partials/home.html",
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.$waitForAuth();
          }]
        }
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).

      otherwise({
        redirectTo: '/login'
      });
  }]);