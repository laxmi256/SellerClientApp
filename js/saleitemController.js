ecobasketApp.controller("saleitemController", ['$scope', '$http', '$httpParamSerializerJQLike', 'myGlobalService', function($scope, $http, $httpParamSerializerJQLike, myGlobalService) {
    $scope.sellertable = myGlobalService.mytable;
    $scope.user = myGlobalService.mydetails;
    $scope.tableitems=[
        {            
            name: "Organic strawberry fresh from farm",
            total_quantity: 90,
            quantity_sold: 0,
            remaining_quantity: 90,
            total_amount: 10800,
            amount_sold: 0,
            remaining_amount: 10800
        },       
        {            
            name: "Organic strawberry fresh from farm",
            total_quantity: 90,
            quantity_sold: 0,
            remaining_quantity: 90,
            total_amount: 10800,
            amount_sold: 0,
            remaining_amount: 10800
        },    
        {            
            name: "Organic strawberry fresh from farm",
            total_quantity: 90,
            quantity_sold: 0,
            remaining_quantity: 90,
            total_amount: 10800,
            amount_sold: 0,
            remaining_amount: 10800
        }];
}]);