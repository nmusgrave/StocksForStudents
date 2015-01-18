// create the controller and inject Angular's $scope
seedApp.controller('mainController', function($scope, $log, $q, algorithm) {
	// create a message to display in our view
	$scope.message = 'Trading stocks in as little as three clicks.';

	
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];


  // testing algs
  $q.all([algorithm.newOrder("abc", 100, 1),
    algorithm.newOrder("abc", 105, 1),
    algorithm.newOrder("abc", 110, 1),
    algorithm.newOrder("abc", 107, 1),
    algorithm.newOrder("abc", 108, 1),
    algorithm.newOrder("abc", 105, 1), 
    algorithm.newMarket("abc")]).then(function(result) {
      console.log(result);
      console.log('CALLBACK')
      $q.all([
        algorithm.addOrder(result[6], 
          [result[0], result[1], result[2], result[3],
          result[4], result[5] ]) ])
      .then(function(result2) {
        console.log(result2)
        console.log('inner callback')
        $q.all([algorithm.computePercentageChange(result2[0], 2), 
          algorithm.computeAveragePrice(result2[0], 1),
          algorithm.computeAveragePrice(result2[0], -1)])
        .then(function(result3) {
          console.log(result3)
        })
      })
    })

});
