(function (app) {
  'use strict';

  app.directive('menuItemValue', MenuItemValueDirective);


  MenuItemValueDirective.$inject = ['$q', 'MenuService'];
  function MenuItemValueDirective($q, MenuService) {
    var ddo = {
      restrict: 'A',
      require: 'ngModel',
      link: menuItemValueDirectiveLink
    };

    return ddo;

    function menuItemValueDirectiveLink(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.doesNotExists = function (modelValue, viewValue) {
        if (viewValue && viewValue.trim().length > 0) {
          return MenuService.getMenuItemByShortName(viewValue);
        } else {
          return $q.resolve();
        }
      };
    }

  }

})(angular.module('public'));
