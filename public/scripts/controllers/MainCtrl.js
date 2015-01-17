// create the controller and inject Angular's $scope
seedApp.controller('mainController', function($scope, $log) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how FREAKING AWESOME I look!';
	
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];


});
