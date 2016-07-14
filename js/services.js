//SERVICES
ecobasketApp.service('myGlobalService', function() {
    var self = this;
    this.usertoken = '';
    this.hostUrl = 'http://localhost:52258/';
    this.userInfo = '';
    this.myBasketID = '';
    this.myTableID = '1';
    this.ids={};
    this.userInfo = false;
});

//'http://ecoorgin.azurewebsites.net/';