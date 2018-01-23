'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $stateProvider
      .state('root', {
        views: {
          header: {
            templateUrl: 'views/header.html',
            controller: 'MainCtrl'
          },
          content: {
            template: '<div ui-view></div>'
          }
        }
      })
    .state('root.home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('root.about', {
        url: '/',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });

    $urlRouterProvider.otherwise(function ($injector, $location) {
      var state = $injector.get('$state');
      state.go('root.home');
    });
    $locationProvider.hashPrefix('');
    // $httpProvider.interceptors.push('httpInterceptor');
  });
