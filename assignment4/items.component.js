(function itemsComponentClosure(app, undefined) {
  'use strict';

  app.component('items', {
    bindings:{
      menuItems: '<'
    },
    templateUrl: 'items.component.html',
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
