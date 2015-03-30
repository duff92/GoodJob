
goodJobApp.controller("ProfileCtrl", function ($scope, $routeParams, GoodJob) {

  $scope.userInfo =[{       info_header: "Firstname",
                            info_value: "Lilo"},
                          { info_header: "Surname",
                            info_value: "Pelekai"},
                          { info_header: "Email",
                            info_value: "lilopelekai@email.com"},
                          { info_header: "Phone",
                            info_value: "012-345 67 89"},
                          { info_header: "City",
                            info_value: "Hawaii"}]

  $scope.userCompetence =[{ competence_header: "Word",
                            competence_value: "1"},
                          { competence_header: "Excel",
                            competence_value: "1"},
                          { competence_header: "Hawaiian",
                            competence_value: "5"},
                          { competence_header: "Dancing",
                            competence_value: "4"},
                          { competence_header: "Surfing",
                            competence_value: "3"}]                    


});