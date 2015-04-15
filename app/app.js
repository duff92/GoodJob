
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
    // track status of authentication and notifications

    Auth.$onAuth(function(user) {
      console.log("A user onAuth state changed to: ", !!user);
      $rootScope.isUserLoggedIn = !!user; //or false
    });
    $rootScope.logout = function(){
      console.log("Unauth");
      Auth.$unauth();

    }
    $rootScope.valueTestStatus = function(status){
      console.log("valueTestStatus: ", !!status);
        $rootScope.valueTestDone = !!status;
    }
    $rootScope.getValueTestStatus = function(){
      console.log("getValueTestStatus: ", !!$rootScope.valueTestDone);
      return !!$rootScope.valueTestDone;
    }



  }]);


    goodJob.controller("MainNavCtrl", ["$scope", "Auth", "$location",
    function($scope, Auth, $location) {   


    $('.nav a').on('click', function(){
        $(".btn-navbar").click(); //bootstrap 2.x
        $(".navbar-toggle").click() //bootstrap 3.x by Richard
    });



    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);



