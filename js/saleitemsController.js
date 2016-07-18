ecobasketApp.controller("saleitemsController", ['$scope', '$http', '$httpParamSerializerJQLike', 'myGlobalService', function($scope, $http, $httpParamSerializerJQLike, myGlobalService) {
    $scope.sellertables=[
        {            
            name: "Organic fruits fresh and direct from farm1",
            image: "img/table.jpg",
            sale_date: "15 Jun 2016 Monday",
            sale_start_time: "10:00AM",
            sale_end_time: "02:00PM",
            orderby_date: "13 Jun 2016 Saturday",
            orderby_time: "9:00PM",
            sale_location: "Sreekaryam",
            total_sale_value: 4500,
            order_value: 3300
            
        },       
        {            
            name: "Organic fruits fresh and direct from farm2",
            image: "img/table.jpg",
            sale_start_time: "10:00AM",
            sale_end_time: "02:00PM",
            orderby_date: "13 Jun 2016 Saturday",
            orderby_time: "9:00PM",
            sale_location: "Sreekaryam",
            total_sale_value: 4500,
            order_value: 3300
            
        },    
        {
            name: "Organic fruits fresh and direct from farm3",
            image: "img/table.jpg",
            sale_start_time: "10:00AM",
            sale_end_time: "02:00PM",
            orderby_date: "13 Jun 2016 Saturday",
            orderby_time: "9:00PM",
            sale_location: "Sreekaryam",
            total_sale_value: 4500,
            order_value: 3300            
        }];
    
    $scope.SaleItemSelected = function(sellertable) {
        console.log(sellertable.name);
        myGlobalService.mytable = sellertable;
    };
}]);