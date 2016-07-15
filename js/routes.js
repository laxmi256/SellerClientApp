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
    
    .when('/dashboard', {
        templateUrl: 'pages/dashboard.htm',
        controller: 'dashboardController'
    })
    
    .when('/neworders', {
        templateUrl: 'pages/neworders.htm',
        controller: 'dashboardController'
    })
    
    .when('/changerequests', {
        templateUrl: 'pages/changerequests.htm',
        controller: 'dashboardController'
    })
    
    .when('/newcancellations', {
        templateUrl: 'pages/newcancellations.htm',
        controller: 'dashboardController'
    })
    
    .when('/saleitems', {
        templateUrl: 'pages/saleitems.htm',
        controller: 'saleitemsController'
    })
});        