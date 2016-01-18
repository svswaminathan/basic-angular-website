'use strict';


// Declare app level module which depends on filters, and services
angular.module('bdotnet-meetup', [
  'ngRoute',
  'bdotnet-meetup.filters',
  'bdotnet-meetup.services',
  'bdotnet-meetup.directives',
  'bdotnet-meetup.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/agenda', {templateUrl: 'partials/agenda.html'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
