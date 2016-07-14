//ROUTES
ecobasketApp.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/firstpage.htm',
        controller: 'firstpageController'
    })
    
    .when('/verify', {
        templateUrl: 'pages/secondpage.htm',
        controller: 'secondpageController'
    })
    
     .when('/welcome', {
        templateUrl: 'pages/welcomepage.htm',
        controller: 'welcomepageController'
    })
    
    .when('/myprofile', {
        templateUrl: 'pages/myprofile.htm',
        controller: 'myprofileController'
    })
});