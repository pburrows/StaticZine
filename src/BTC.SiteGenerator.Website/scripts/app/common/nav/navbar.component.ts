export function SiteGenNavbarDirective(): ng.IDirective {
    "use strict";

    return {
        templateUrl: "/scripts/app/common/navbar/navbar.html",
        restrict: "E",
        controller: "siteGenNavbarController",
        controllerAs: "mnuCtrl",
        link(scope: any, elem: any, attrs: any): any {

        }
    };
}

export class SiteGenNavbarController {
    constructor(private $rootScope: ng.IRootScopeService) {

    }

    click(command: string): void {
        let name = "sitegen:" + command;
        this.$rootScope.$broadcast(name, {});
    }
}