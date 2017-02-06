(function (app, undefined) {
    'use strict';

    app.controller('SingUpController', SingUpController);

    SingUpController.$inject = ['NewsletterService'];

    function SingUpController(NewsletterService) {
        var singUpCtrl = this;

        singUpCtrl.form = {

        };

        singUpCtrl.singUp = function singUp() {
            NewsletterService.registerUser(singUpCtrl.form);
            singUpCtrl.registered = true;
        }
    }
})(angular.module('public'));