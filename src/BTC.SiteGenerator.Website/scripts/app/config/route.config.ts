import * as ui from 'angular-ui-router';

export function routeConfig(
    $stateProvider: ui.IStateProvider,
    $urlRouterProvider: ui.IUrlRouterProvider): void {
    'use strict';

    $urlRouterProvider.otherwise('/home');

    let pathBase = "/scripts/app/";

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

