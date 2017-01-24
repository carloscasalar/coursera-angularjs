(function routesClosure(app, undefined) {
  'use strict';

  app.config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/states/home-state.template.html'
      })

      .state('categories', {
        url: '/categories',
        template: '<categories items="stateCtrl.items"></categories>',
        controller: 'CategoriesStateController as stateCtrl',
        resolve: {
          items: ['$window', 'MenuDataService', function CategoriesStateCtrl($window, MenuDataService) {
            return MenuDataService.getAllCategories()
              .then(function(categories) {
                return categories;
              })
              .catch(function(response) {
                $window.alert('something was wrong with all catetories service!! :__(');
                return [];
              });
          }]
        }
      })

      // Categories items
      .state('categoryMenuItems', {
        url: '/categories/{categoryShortName}/items',
        template: '<items items="stateCtrl.items" category="stateCtrl.category"></items>',
        controller: 'ItemsStateController as stateCtrl',
        params: {
          categoryShortName: null
        },
        resolve: {
          categoryDetails: ['$q', '$window', '$stateParams', 'MenuDataService',
            function resolveCategoryMenuItems($q, $window, $stateParams, MenuDataService) {
              if (!$stateParams.categoryShortName) {
                return $q.resolve([]);
              }
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function(categoryDetails) {
                  return categoryDetails;
                })
                .catch(function(response) {
                  $window.alert('something was wrong with all catetories service!! :__(');
                  return [];
                });
            }
          ]
        }
      });
  }
}(angular.module('menuapp')));
