(function mainControllerClosure(app, undefined) {
  'use strict';

  LunchCheckController.$inject = ['$scope'];
  app.controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope) {
    var HEALTH_LIMIT = 3;

    $scope.checkIfTooMuch = function checkIfTooMuch() {
      if ($scope.itemList) {
        var list = $scope.itemList.split(',');
        if (list.length > HEALTH_LIMIT) {
          $scope.message = 'Too much!';
        } else {
          $scope.message = 'Enjoy!'
        }
        $scope.messageClass = 'text-success'
      } else {
        $scope.message = 'Please enter data first';
        $scope.messageClass = 'text-danger'
      }
    };
  }

}(angular.module('LunchCheck')));
