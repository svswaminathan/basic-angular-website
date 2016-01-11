'use strict';

/* Directives */


angular.module('bdotnet-meetup.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
