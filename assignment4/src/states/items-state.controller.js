(function categoriesComponentClosure(app, undefined) {
  'use strict';

  app.controller('ItemsStateController',  ItemsStateController);

  ItemsStateController.$inject = ['categoryDetails'];
  function ItemsStateController(categoryDetails){
    var stateCtrl = this;

    stateCtrl.items = categoryDetails['menu_items'];
    stateCtrl.category = categoryDetails['category'];
  }
}(angular.module('menuapp')));
