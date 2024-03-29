/* The App file mainly keeping track of authentication state, logout functionality
*  and value test status.
*  @TODO Put the value test elsewhere (in values maybe)
*/
var goodJob = angular.module('goodJob', [
  'goodJob.home',
  'goodJob.config',
  'goodJob.security',
  'goodJob.login',
  'goodJob.register',
  'goodJob.availableJobs',
  'goodJob.activeJobApplications',
  'goodJob.profile',
  'user',
  'applicationAPI',
  'goodJob.valuesTest',
  'goodJob.apply',
  'goodJob.update',
  'mobile-angular-ui'])
	//App
  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication status
	//Each time status changes this fucntion is called as a callback
    Auth.$onAuth(function(user) {
      console.log("A user onAuth state changed to: ", !!user);
	  //On authentication status change : update the boolean value
      $rootScope.isUserLoggedIn = !!user; //or false
    });
	//Logout functionality
    $rootScope.logout = function(){
      console.log("Unauth");
      Auth.$unauth();

    }
	//Value test completion status
    $rootScope.valueTestStatus = function(status){
      console.log("valueTestStatus: ", !!status);
        $rootScope.valueTestDone = !!status;
    }
	//Getter for the value test status
    $rootScope.getValueTestStatus = function(){
      console.log("getValueTestStatus: ", !!$rootScope.valueTestDone);
      return !!$rootScope.valueTestDone;
    }



  }]);


    goodJob.controller("MainNavCtrl", ["$scope", "Auth", "$location",
    function($scope, Auth, $location) {   

	//Navbar
    $('.nav a').on('click', function(){
         if (window.innerWidth < 768) {
        $('.navbar-toggle').click()
    }
});

    $scope.getClass = function(path) {
    if ($location.path().substr(0, path.length) == path) {
      return "active"
    } else {
      return ""
    }
}




}]);



