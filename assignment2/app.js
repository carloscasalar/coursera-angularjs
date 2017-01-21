(function appClosure(angular, undefined) {
  'use strict';

  angular.module('app', [])
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController);


  function ShoppingListCheckOffService() {
    var service = this;

    service.buyItem = buyItem;
    service.getToBuyItems = getToBuyItems;
    service.getBoughtItems = getBoughtItems;

    var bought = [];
    var toBuy = [{
        name: 'bags of cookies',
        quantity: 10
      },
      {
        name: 'bottles of milk',
        quantity: 3
      },
      {
        name: 'bottles of Coca Cola Zero',
        quantity: 24
      },
      {
        name: 'gloves',
        quantity: 2
      },
      {
        name: 'boxes of corn flakes',
        quantity: 4
      }
    ];

    function buyItem(index) {
      var item = toBuy[index];
      bought.push(item);
      toBuy.splice(index, 1);
    }

    function getToBuyItems() {
      return toBuy;
    }

    function getBoughtItems() {
      return bought;
    }
  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.buyItem = buyItem;
    toBuy.list = ShoppingListCheckOffService.getToBuyItems();

    function buyItem(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.list = ShoppingListCheckOffService.getBoughtItems();
  }
}(angular));
