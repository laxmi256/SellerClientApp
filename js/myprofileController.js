ecobasketApp.controller("myprofileController", ['$scope', '$http', '$httpParamSerializerJQLike', 'myGlobalService', function($scope, $http, $httpParamSerializerJQLike, myGlobalService) {
    $scope.user=
        {
        name: "User Name",
        mobile: "+911234567890",
        email: "email@email.com",
        address:
        {
            building_name: "TC-1234/567, KRUPA",
            street_number: "Janashakthi Lane",
            address1: "Pongumoodu, Medical College PO",
            landmark: "Near St. Thomas Cathedral, Pngumoodu, Trivandrum, Kerala",
            vicinity: "7 kms"
        },
        additional_contact_details:
        {
            alternate_mobile: "+910123456789",
            alternate_email: "alternate-email@email.com"                   
        },
        my_sale_location:
        {
            building_name: "TC-1234/567, KRUPA",
            street_number: "Janashakthi Lane",
            address1: "Pongumoodu, Medical College PO",
            landmark: "Near St. Thomas Cathedral, Pongumoodu, Trivandrum, Kerala",
            vicinity: "7 kms"
        }
    };
    $scope.GetMyProfile = function() {
    };    
}]);