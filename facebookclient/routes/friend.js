
/**
 * New node file
 */
var app = angular.module('myApp2', []);
angular.module('myApp2', []).controller('orderCtrl2', function($scope,$http,$interval){
		
	load_groups();
	load_group();
	
/*	$interval(function(){
		load_group();
		},8000);*/
	
		$scope.cal=function(email,value){
			console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"+email)
			window.location.reload(false); 
			$http.post('/friend', {email: email,val:value});
			
		}
		
		function load_group(){
			console.log("in angular");
		$http.get('http://localhost:3001/friendreq').success(function(data){
			console.log("and");	
			console.log(data);

				$scope.wfriends=data;
				
				
		});
		};

		
		function load_groups(){
			console.log("in angular");
		$http.get('http://localhost:3001/friends').success(function(data){
			console.log(data);	
			$scope.friends=data;
			//	$scope.wfriends=data.b;
		});
		};
});

