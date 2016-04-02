System.register([], function(exports_1) {
    function routeConfig($stateProvider, $urlRouterProvider) {
        'use strict';
        $urlRouterProvider.otherwise('/home');
        var pathBase = "/scripts/app/";
        $stateProvider.state('empty', {
            url: "/empty",
            template: ""
        }).state('home', {
            url: '/home',
            controller: 'homeController',
            controllerAs: 'ctrl',
            templateUrl: pathBase + 'home/home.html'
        });
    }
    exports_1("routeConfig", routeConfig);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=route.config.js.map