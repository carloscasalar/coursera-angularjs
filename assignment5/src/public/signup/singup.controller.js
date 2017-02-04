(function (app, undefined){
    'use strict';

    app.controller('SingUpController', SingUpController);

    SingUpController.$inject = [];

    function SingUpController(){
        var singUpCtrl = this;

        singUpCtrl.form = {

        };
    }
})(angular.module('public'));