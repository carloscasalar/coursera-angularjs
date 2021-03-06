(function () {
  'use strict';

  angular.module('public')
    .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        absract: true,
        templateUrl: 'src/public/public.html'
      })
      .state('public.home', {
        url: '/',
        templateUrl: 'src/public/home/home.html'
      })
      .state('public.menu', {
        url: '/menu',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuCategories: ['MenuService', function (MenuService) {
            return MenuService.getCategories();
          }]
        }
      })
      .state('public.menuitems', {
        url: '/menu/{category}',
        templateUrl: 'src/public/menu-items/menu-items.html',
        controller: 'MenuItemsController',
        controllerAs: 'menuItemsCtrl',
        resolve: {
          menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
            return MenuService.getMenuItems($stateParams.category);
          }]
        }
      })
      .state('public.signup', {
        url: '/singup',
        templateUrl: 'src/public/signup/singup.html',
        controller: 'SingUpController',
        controllerAs: 'singUpCtrl'
      })
      .state('public.myinfo', {
        url: '/my-info',
        templateUrl: 'src/public/my-info/my-info.html',
        controller: 'MyInfoController',
        controllerAs: 'myInfoCtrl',
        resolve: {
          registerInfo: ['$log', '$q', 'MenuService', 'NewsletterService', function ($log, $q, MenuService, NewsletterService) {
            var user = NewsletterService.getRegisteredUser();
            if (!user) {
              return {};
            }
            return MenuService.getMenuItemByShortName(user.favorite)
              .then(function (menuItem) {
                return {
                  user: user,
                  menuItem: menuItem
                };
              })
              .catch(function (err) {
                $log.error('Unexpected error while asking for menu item %s', user.favorite, err);
                return {};
              });
          }]
        }
      });
  }
})();
