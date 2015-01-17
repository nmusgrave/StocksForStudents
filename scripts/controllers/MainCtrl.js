// create the controller and inject Angular's $scope
stocksApp.controller('mainController', function($scope, $log) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how FREAKING AWESOME I look!';

	
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

   var tabs = [
      { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
      { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
      { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      if ( old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
      if ( current )                $log.debug('Hello ' + tabs[current].title + '!');
    });
   


});