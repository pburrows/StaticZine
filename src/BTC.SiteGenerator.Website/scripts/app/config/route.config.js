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
        }).state('publications', {
            url: '/publications',
            controller: 'publicationListController',
            controllerAs: 'ctrl',
            templateUrl: pathBase + 'publications/publication-list.html'
        }).state('publication-add', {
            url: '/publications/add',
            controller: 'publicationAddController',
            controllerAs: 'ctrl',
            templateUrl: pathBase + 'publications/publication-add.html'
        }).state('articles', {
            url: '/articles',
            controller: 'articleListController',
            controllerAs: 'ctrl',
            templateUrl: pathBase + 'articles/article-list.html'
        }).state('articles-add', {
            url: '/articles/add',
            controller: 'articleAddController',
            controllerAs: 'ctrl',
            templateUrl: pathBase + 'articles/article-add.html'
        }).state('authors', {
            url: '/authors',
            controller: 'authorListController',
            controllerAs: 'ctrl',
            templateUrl: pathBase + 'authors/author-list.html'
        }).state('authors-add', {
            url: '/authors/add',
            controller: 'authorAddController',
            controllerAs: 'ctrl',
            templateUrl: pathBase + 'authors/author-add.html'
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