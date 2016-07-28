var app = angular.module('teaApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/order.html',
      controller: 'teaController'
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
      controller: 'checkoutController'
    });
});
