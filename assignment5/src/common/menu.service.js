(function () {
  'use strict';

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$log', '$interpolate', '$q', '$http', 'ApiPath'];
  function MenuService($log, $interpolate, $q, $http, ApiPath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };


    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = { 'category': category };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getMenuItemByShortName = function (shortName) {
      var getUrlFn = $interpolate('{{apiPath}}/menu_items/{{shortName}}.json');
      var url = getUrlFn({
        apiPath: ApiPath,
        shortName: shortName
      });

      return $http.get(url).then(function (response) {
        return response.data;
      })
        .catch(function (response) {
          if (response instanceof Error) {
            $log.error('unexpected error while requesting menu item %s', shortName, response);
            return $q.reject('Unexpected Error. Please try again later');
          }
          if (response.status === 404) {
            return $q.reject('Menu item does not exists: ' + shortName);
          }

          return $q.reject(response.status + ' - ' + response.statusText);
        });
    };

  }
})();
