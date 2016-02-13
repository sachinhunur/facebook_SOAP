/**
 * New node file
 */
var app = angular.module('myApp', []);
angular.module('myApp', []).controller('orderCtrl', function($scope,$http,$interval){
$scope.interests=[];
$scope.interes=[];
$scope.news1=[];
load_about();
	load_news();
	$interval(function(){
	load_news();
	load_about();
	
	},30000);
	
		
	load_interest();
/*	$interval(function(){
		load_interest();
		},8000);
	
	*/

	
	function load_about(){
		console.log("in angular");
	$http.get('http://localhost:3001/about').success(function(data){
		console.log("and");	
		console.log(data);
			$scope.abouts=data;
			
			
	});
	};
	function load_interest(){
		console.log("in angular");
	$http.get('http://localhost:3001/interest').success(function(data){
		console.log("and");	
		console.log(data);

			$scope.interests=data;
			
			
	});
	};
	function load_news(){
		console.log("in angular");
	$http.get('http://localhost:3001/news').success(function(data){
		console.log("anddddddddddddddddddddddddd");	
		console.log(data);
		for( var i=0; i<data.length; i++){
			$scope.news1.push({name:data[i],event:data[i+1]});
		
	i++;
		}
		$scope.news=$scope.news1;
			
			
	});
	};
	});