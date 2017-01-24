(function endPointsClosure(app, undefined) {
  'use strict';

  app.constant('endPoints', {
    categories: 'https://davids-restaurant.herokuapp.com/categories.json',
    itemsForCategory
: ' https://davids-restaurant.herokuapp.com/menu_items.json?category={{category}}'
  });

}(angular.module('data')));
