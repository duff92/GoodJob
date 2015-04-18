/* Module linked to values view.
*  The controller displays a values test and stores the data into user's information
*  @TODO replace by a standardized test and store results in firebase
*/
"use strict";
angular.module('goodJob.values', ['firebase.auth', 'firebase.utils', 'ngRoute'])
	//Routing
	.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/values', {
      		controller: 'ValuesCtrl',
      		templateUrl: 'values/values.html'
		});
	}])
	//Definition of the controller
	.controller("ValuesCtrl", ["$scope", "$routeParams",
		function($scope, $location) {

			console.log("Writing ads");

		 	
		//Static data for the value test.
		 $scope.values =[{value_name: "Dependable",
		 									value_description: "The definition of dependable is someone or something who is reliable and trustworthy or who can be counted on."},
		 									{value_name: "Reliable",
		 									value_description: "The definition of reliable is dependable or capable of being trusted."},
		 									{value_name: "Loyal",
		 									value_description: "The definition of loyal is faithful or showing faithfulness to a government, person or cause."},
		 									{value_name: "Committed",
		 									value_description: "The definition of committed is being dedicated or loyal to something, to give for safekeeping or to be confined."},
		 									{value_name: "Open-minded",
		 									value_description: "The definition of open minded is a willingness to try new things or to hear and consider new ideas."},
		 									{value_name: "Honest",
		 									value_description: "The definition of honest is someone or something that is truthful, trustworthy or genuine."},
		 									{value_name: "Efficient",
		 									value_description: "The definition of efficient is being productive with minimal effort."},
		 									{value_name: "Innovative",
		 									value_description: "The definition of innovative is someone that comes up with new ideas, concepts or methods"}];



		$scope.values_series = [ 'Basic Behaviour', 'Adapted Behaviour'];
		 
		$scope.values_lables = [ 'Dominant',    'Influential',  'Steady',     'Conscientious'];
  		
		$scope.values_data =   [[ 36,            76,             62,           37            ],
                                [ 33,            74,             62,           63           ]];
  		
		$scope.values_colors = [ 'Red',         'Yellow',       'Green',      'Blue'         ];


  		$scope.instructions = "Please choose the value that fits you the best out of the four boxes that you are shown. Don't think too long about your answer and go with your gut feeling. There are no right or wrong answers."
  		$scope.result_info = "Thank you for completing the test. Below you can see a summary of your results. The results are shown accordingly to DISC personality types and shows how your basic behaviour is mapped and also how your adapted behaviour is mapped."

  		$scope.personality_types = [{	personality_type: "D personality",
																		personality_description: "The D Personality Style tends to be direct and decisive, sometimes described as dominant. They would prefer to lead than follow, and tend towards leadership and management positions. They tend to have high self-confidence and are risk takers and problem solvers, which enables others to look to them for decisions and direction. They tend to be self-starters."},
																	{	personality_type: "I personality",
																		personality_description: "The I Personality Style is not afraid to be the center of attention. They are enthusiastic, optimistic, talkative, persuasive, impulsive and emotional. This Personality Type will trust others naturally, truly enjoys being around others, and functions best when around people and working in teams."},
																	{	personality_type: "S personality",
																		personality_description: "The S Personality Type is known for being steady, stable, and predictable. They are even-tempered, friendly, sympathetic with others, and very generous with loved ones. The S is understanding and listens well. Preferring close, personal relationships, the S is very opened with loved ones, but can also be possessive at times and hold them close."},
																	{	personality_type: "C personality",
																		personality_description: "The C DISC Styles are accurate, precise, detail-oriented, and conscientious. They think very analytically and systematically and make decisions carefully with plenty of research and information to back it up. The C has very high standards for both themselves and others. Because they focus on the details and see what many other styles do not, they tend to be good problem solvers and very creative people."}];

	  }
	]
);
