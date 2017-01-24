(function itemsComponentClosure(app, undefined) {
  'use strict';

  app.component('items', {
    bindings:{
      items: '<',
      category: '<'
    },
    templateUrl: 'src/components/items.component.html',
    controller: ItemsComponentController
  });

  ItemsComponentController.$inject = [];
  function ItemsComponentController(){
    var $ctrl = this;

    $ctrl.$onInit = onInit;

    function onInit(){

    }
  }
}(angular.module('menuapp')));
