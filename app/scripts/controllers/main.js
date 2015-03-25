'use strict';

/**
 * @ngdoc function
 * @name happyGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happyGameApp
 */
angular.module('happyGameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
