//module bnaaya
var myApp=angular.module("myApp",[]);

//module nu controller set kita
myApp.controller("myController",function($scope){

	console.log("in my controller");


	//new user dalana
	$scope.newUser={};

	$scope.clickedUser={};

	$scope.message="";


	//ehde vich asi users dale
	$scope.users=[

		{username:"sarthik",fullName:"Sarthik Babuta",email:"babuta.1997sarthik@gmail.com"},
		{username:"sarthik",fullName:"Sarthik Babuta",email:"babuta.1997sarthik@gmail.com"},
		{username:"sarthik",fullName:"Sarthik Babuta",email:"babuta.1997sarthik@gmail.com"}
	];

	//user save krn lai function
	$scope.saveUser=function(){

		//console.log($scope.newUser);

		//apne newuser vich dalduga
		$scope.users.push($scope.newUser);
		$scope.newUser={};
		$scope.message="New User Added Successfully";
	};

	$scope.selectUser=function(user){

		console.log(user);

		$scope.clickedUser=user;
	};

	$scope.updateUser=function(){

		$scope.message="Updated Successfully";
	};

	$scope.deleteUser=function(){

		//jehra user te click hoya  oh delete kita
		$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
		$scope.message="Deleted Successfully";

	};


	$scope.clearMessage=function(){

		$scope.message="";
	}
});