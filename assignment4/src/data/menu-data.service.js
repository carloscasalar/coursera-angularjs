(function menuDataClosure(app, undefined) {
  'use strict';

  app.service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$interpolate', 'endPoints'];

  function MenuDataService($http, $interpolate, endPoints) {
    var service = this;
    service.getAllCategories = getAllCategories;
    service.getItemsForCategory = getItemsForCategory;

    function getAllCategories() {
      return $http.get(endPoints.categories)
        .then(function(response) {
          return response.data;
        });
    }

    function getItemsForCategory(categoryShortName) {
      var templateUrlFn = $interpolate(endPoints.itemsForCategory);
      var urlItems = templateUrlFn({
        category: categoryShortName
      });

      return $http.get(urlItems)
        .then(function(response) {
          return response.data;
        });
    }
  }

}(angular.module('data')));
