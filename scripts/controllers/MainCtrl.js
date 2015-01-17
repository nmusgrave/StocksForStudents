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

   var tabs = [
      { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
      { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
      { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
      { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
      { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
      { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
      { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
      { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
      { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
      { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      if ( old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
      if ( current )                $log.debug('Hello ' + tabs[current].title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      for (var j = 0; j < tabs.length; j++) {
        if (tab.title == tabs[j].title) {
          $scope.tabs.splice(j, 1);
          break;
        }
      }
    };


});