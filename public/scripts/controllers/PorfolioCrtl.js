// create the controller and inject Angular's $scope
seedApp.controller('portfolioController', function($scope) {
        // create a message to display in our view
        $scope.message = 'portfolio controller message';
});

bloomberg(function(data) {
        console.log(data.data[0].securityData)

        data.data[0].securityData.fieldData.forEach(function(elem) {
            // make random num [0,1], shift so half are negative, scale by opening amount
            var shift = (Math.random() - 0.5) * elem.OPEN;
            elem.BUY = elem.PX_LAST + shift;
            elem.SELL = elem.PX_LAST - shift;
        })
    })

console.log(data);