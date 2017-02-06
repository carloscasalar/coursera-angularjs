(function (app, undefined) {
    app.service('NewsletterService', NewsletterService);

    NewsletterService.$inject = [];

    function NewsletterService() {
        var service = this;
        var store = {

        }

        service.registerUser = registerUser;
        service.getRegisteredUser = getRegisteredUser;

        function registerUser(registerForm) {
            store.userData = registerForm;
        }

        function getRegisteredUser() {
            return store.userData;
        }

    }
})(angular.module('common'));