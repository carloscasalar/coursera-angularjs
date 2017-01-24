(function categoriesComponentClosure(app, undefined) {
  'use strict';

  app.controller('CategoriesStateController',  CategoriesStateController);

  CategoriesStateController.$inject = ['items'];
  function CategoriesStateController(items){
    var stateCtrl = this;

    stateCtrl.items = items;
  }
}(angular.module('menuapp')));
