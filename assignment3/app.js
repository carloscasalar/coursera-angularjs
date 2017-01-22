(function appClosure(angular, undefined) {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .service('MenuSearchService', MenuSearchService)
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', FoundItemsDirective);


  MenuSearchService.$inject = ['$http', '$q', '$window'];

  function MenuSearchService($http, $q, $window) {
    var service = this;
    var MENU_ENDPOINT = 'https://davids-restaurant.herokuapp.com/menu_items.json';

    service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
      if (!searchTerm) {
        // Prevents empty seachs reach the server
        return $q.resolve([]);
      }

      return $http.get(MENU_ENDPOINT)
        .then(function(response) {
          return searchItems(response.data['menu_items'], searchTerm);
        })
        .catch(function(response) {
          $window.alert('Unexpected error reaching menu endpoint, status', response.status);
          return [];
        });
    };

    function searchItems(list, searchTerm) {
      var found = [];
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var upperItemName = item.name.toUpperCase();
        var upperSearchTerm = searchTerm.toUpperCase();
        if (upperItemName.search(upperSearchTerm) >= 0) {
          found.push(item);
        }
      }
      return found;
    }
  }


  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    // Controller API
    narrow.doSearch = doSearch;
    narrow.removeUnwanted = removeUnwanted;

    // Controller exposed model
    narrow.found = undefined;
    narrow.searchTerm = '';
    narrow.noItemsFound = false;

    function doSearch() {
      MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
        .then(function(items) {
          narrow.found = items;
          narrow.noItemsFound = (items.length === 0);
        });
    }

    function removeUnwanted(index) {
      narrow.found.splice(index, 1);
    }
  }

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'found-items.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;

  }
}(angular));
