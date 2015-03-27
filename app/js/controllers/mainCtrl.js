

goodJobApp.controller("MainCtrl", ["$scope", "currentAuth", function($scope, currentAuth) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
  console.log(currentAuth);
  if(currentAuth){
    $scope.name = currentAuth.password.email;
  }
}]);