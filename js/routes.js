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
    
    .when('/completeregistration', {
        templateUrl: 'pages/default.htm',
        controller: 'welcomepageController'
    })
    
    .when('/explorecommunity', {
        templateUrl: 'pages/default.htm',
        controller: 'welcomepageController'
    })
    
     .when('/welcome', {
        templateUrl: 'pages/welcomepage.htm',
        controller: 'welcomepageController'
    })
    
    .when('/settings', {
        templateUrl: 'pages/default.htm',
        controller: 'welcomepageController'
    })
    
    .when('/aboutus', {
        templateUrl: 'pages/aboutus.htm',
        controller: 'welcomepageController'
    })
    
    .when('/sharestory', {
        templateUrl: 'pages/default.htm',
        controller: 'welcomepageController'
    })
    
    .when('/rateapp', {
        templateUrl: 'pages/default.htm',
        controller: 'welcomepageController'
    })
    
    .when('/myprofile', {
        templateUrl: 'pages/myprofile.htm',
        controller: 'myprofileController'
    })
    
    .when('/editprofile', {
        templateUrl: 'pages/default.htm',
        controller: 'myprofileController'
    })
    
    .when('/locationmap', {
        templateUrl: 'pages/default.htm',
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
    
    .when('/saleitem', {
        templateUrl: 'pages/saleitem.htm',
        controller: 'saleitemController'
    })
    
    .when('/editsale', {
        templateUrl: 'pages/editsale.htm',
        controller: 'saleitemController'
    })
    
    .when('/edititem', {
        templateUrl: 'pages/edititem.htm',
        controller: 'saleitemController'
    })
});        