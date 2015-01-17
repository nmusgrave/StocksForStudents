// create the controller and inject Angular's $scope
stocksApp.controller('appCtrl', function($scope, $log) {

   var tabs = [
      { title: 'Search', content: "Tabs will become paginated if there isn't enough room for them."},
      { title: 'Portfolio', content: "You can swipe left and right on a mobile device to change tabs."},
      { title: 'Profile', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      if ( old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
      if ( current )                $log.debug('Hello ' + tabs[current].title + '!');
    });

});