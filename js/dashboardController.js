ecobasketApp.controller("dashboardController", ['$scope', '$http', '$httpParamSerializerJQLike', 'myGlobalService', function($scope, $http, $httpParamSerializerJQLike, myGlobalService) {
    $scope.dashboard=
        {
        no_of_new_orders: 3,
        no_of_change_requests: 1,
        no_of_new_cancellations: 2,
        new_orders:[
        {
            name: "Buyer Name",
            table_name: "Strawberry - fresh from organic farm",
            no_of_items: 4,
            order_value: 864
        },       
        {
            name: "Buyer Name",
            table_name: "Strawberry - fresh from organic farm",
            no_of_items: 4,
            order_value: 864
        },       
        {
            name: "Buyer Name",
            table_name: "Strawberry - fresh from organic farm",
            no_of_items: 4,
            order_value: 864
        }],
        change_requests:[
        {
            name: "Buyer Name",
            table_name: "Strawberry - fresh from organic farm",
            no_of_items: 2,
            order_value: 540
        }],
        new_cancellations:[
        {
            name: "Buyer Name",
            table_name: "Strawberry - fresh from organic farm",
            order_value: 864,
            comment: "Please cancel this item"
        },
        {
            name: "Buyer Name",
            table_name: "Strawberry - fresh from organic farm",
            order_value: 864,
            comment: "Please cancel this item"
        }]
    };
}]);