/* Module taking care of pending applications for a logged in user.
*  The data is retrieved from firebase via the user's list of applications.
*  @See firebase.auth
*  @See firebase.utils
*/
"use strict";
angular.module('goodJob.activeJobApplications', ['firebase.auth', 'firebase.utils', 'ngRoute', 'chart.js'])
	 //Routing
	.config(['$routeProvider', function($routeProvider) {
			$routeProvider.whenAuthenticated('/activeJobApplications', {
					controller: 'ActiveJobApplicationsCtrl',
					templateUrl: 'activeJobApplications/activeJobApplicationsView.html'
			});
		}])
	//Definition of the controller
	.controller("ActiveJobApplicationsCtrl", ["$scope", "Auth", "$route", "$routeParams", "$location", "ApplicationAPI", "Profile",
		function($scope, Auth, $route, $routeParams, $location, ApplicationAPI, Profile) {
		//Populate the scope with a static list of data
		//@TODO fetch the list from firebase

		Profile.getUser(Auth.$getAuth().uid).$bindTo($scope, "userObject").then(function(){

			$scope.itemList = $scope.userObject.applications;
			$scope.ads = [];
			$scope.jobID = null;

			// console.log("$scope.Itemlist: active applications at userObject",$scope.itemList);

			for (var item in $scope.itemList) {
				$scope.jobID = $scope.itemList[item].id;
				
				//Get information from arbets API using job id
				//@See ApplicationAPI
				ApplicationAPI.getApplication.get({'Id': $scope.jobID}, function (data) {
					// console.log("Response from ApplicationAPI.getAppliction:", data);
					//Job object
					var platsannons = data.platsannons;
					var status = ["Pending","Accepted","Rejected"];

					// Modify the data to a more user friendly format
					platsannons.annons.publiceraddatum = platsannons.annons.publiceraddatum.substring(0,10)
					if (platsannons.ansokan.sista_ansokningsdag != null) {
						platsannons.ansokan.sista_ansokningsdag = platsannons.ansokan.sista_ansokningsdag.substring(0,10);
					};
					if (platsannons.annons.annonstext.length > 300) {
						platsannons.annons.annonstext = platsannons.annons.annonstext.substring(0,300) + "...";
					};
					platsannons.arbetsplats.postadress = platsannons.arbetsplats.postadress + " " + platsannons.arbetsplats.postnummer + " " + platsannons.arbetsplats.postort;

					//Populate the view with retrieved information
					$scope.ad = {
						company_name: platsannons.arbetsplats.arbetsplatsnamn,
						company_logo: platsannons.arbetsplats.logotypurl,
						job_header: platsannons.annons.annonsrubrik,
						job_id: platsannons.annons.annonsid,
						job_title: platsannons.annons.yrkesbenamning,
						job_city: platsannons.annons.kommunnamn,
						job_address: platsannons.arbetsplats.postadress,
						job_conditions: platsannons.villkor.varaktighet,
						job_hours: platsannons.villkor.arbetstid,
						job_link: platsannons.annons.platsannonsUrl,
						job_posted: platsannons.annons.publiceraddatum,
						job_deadline: platsannons.ansokan.sista_ansokningsdag,
						job_description: platsannons.annons.annonstext,
						job_status: status[Math.floor((Math.random() * 3))]
					}
					$scope.ads.push($scope.ad);
				}, function (data) {
					console.log("There was an error");
				});
			}
		});

		 
//Function attached to the button continue on the add
		//for the moment the behavior is harcoded
		//@TODO Company must process the applications and modify the value
		//@Param value the value of the pending application, determined by the company.
				$scope.continueWithApplication = function(value) {
					console.log(value);
					if (value === 'Accepted') {
						//@TODO E-mail generation
						alert("Congratulations! Please meet us in Mars 2080 for your interview!");
					}
					else {
						alert("You need to get your application accepted first! Please be patient...");
					}
				}
				$scope.removeFromActiveApplications = function (applicationid) {
					var itemID;
					for (var item in $scope.itemList) {
						if($scope.itemList[item].id == applicationid) {
							itemID = $scope.itemList[item];
							Profile.removeApplication(item);
						}
					}
					//Redirect to applications
					$route.reload();
			}

	}]);