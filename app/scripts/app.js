'use strict';

angular.module('newAngularKendoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/competitors', {
        templateUrl: 'views/competitors.html',
        controller: 'CompetitorsCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/prefectures', {
        templateUrl: 'views/prefectures.html',
        controller: 'PrefecturesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
