(function categoriesComponentClosure(app, undefined) {
  'use strict';

  app.component('categories', {
    bindings: {
      items: '<'
    },
    templateUrl: 'src/components/categories.component.html',
    controller: CatetoriesComponentController
  });

  CatetoriesComponentController.$inject = [];

  function CatetoriesComponentController() {
    var $ctrl = this;

    $ctrl.$onInit = onInit;

    function onInit() {

    }
  }
}(angular.module('menuapp')));
