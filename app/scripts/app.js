'use strict';

/**
 * @ngdoc overview
 * @name ccApp
 * @description
 * # ccApp
 *
 * Main module of the application.
 */
var app = angular
  .module('ccApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (Restangular) {
    Restangular.setBaseUrl('http://localhost:9000/scripts/data/');
  })
