var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope)
{
	$scope.todoList = [{todoText:'Frank Jones', todoText2: 'Billy Jones', todoText3: 'Millie Smith', done:false}];

	$scope.todoAdd = function()
	{
		//var fam = $scope.todoInput + " " $scope.todoInput2 + " " $scope.todoInput3;
		$scope.todoList.push({todoText:$scope.todoInput, todoText2: $scope.todoInput2, todoText3: $scope.todoInput3, done:false});
		//$scope.todoList.push({todoText:$scope.todoInput2, done:false});
		// $scope.todoList.push({todoText:$scope.todoInput3, done:false});
		$scope.todoInput = "";
		$scope.todoInput2 = "";
		$scope.todoInput3 = "";    
	};

	$scope.remove = function()
	{
		var oldList = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(oldList, function(x)
		{
			if (!x.done) $scope.todoList.push(x);
		});
	};
});
