(function categoriesComponentClosure(app, undefined) {
  'use strict';

  app.component('categories', {
    bindings:{
      categories: '<'
    },
    templateUrl: 'categories.component.html',
    controller: CatetoriesComponentController
  });

  CatetoriesComponentController.$inject = [];
  function CatetoriesComponentController(){
    var $ctrl = this;

    $ctrl.$onInit = onInit;

    function onInit(){

    }
  }
}(angular.module('menuapp')));
