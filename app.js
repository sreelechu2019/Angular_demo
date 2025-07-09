var app = angular.module('menuApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductsController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});