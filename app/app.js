
var goodJob = angular.module('goodJob', [
  'goodJob.home',
  'goodJob.config',
  'goodJob.security',
  'goodJob.login',
  'goodJob.register',
  'goodJob.listOfAdds',
  'goodJob.applications',
  'goodJob.profile',
  'profile',
  'goodJob.values',
  'goodJob.apply',
  'mobile-angular-ui'])

  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication
    Auth.$onAuth(function(user) {
      console.log("A user logged in: ", user);
      $rootScope.loggedIn = !!user;
      $rootScope.isUserLoggedIn = true; //or false
    });
    $rootScope.logout = function(){
      console.log("Unauth");
      $rootScope.isUserLoggedIn = false; //or false
      Auth.$unauth();

    }



  }]);


    goodJob.controller("MainNavCtrl", ["$scope", "Auth", "$location",
    function($scope, Auth, $location) {   


    $scope.menuItems = [
        {
            name: 'Login',
            url:  '/login',
            title: 'Login'
        },
        {
            name: 'Register',
            url:  '/register',
            title: 'Register'
        },
        {
            name:   'Profile',
            url:    '/profile',
            title:  'Profile'
        }
    ];

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);


