(function (app, undefined) {
    'use strict';

    app.controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['ApiPath', 'registerInfo'];

    function MyInfoController(ApiPath, registerInfo) {
        var myInfoCtrl = this;

        myInfoCtrl.basePath = ApiPath;
        myInfoCtrl.user = registerInfo.user;
        myInfoCtrl.menuItem = registerInfo.menuItem;

    }
})(angular.module('public'));