System.register([], function(exports_1) {
    function SiteGenNavbarDirective() {
        "use strict";
        return {
            templateUrl: "/scripts/app/common/nav/navbar.html",
            restrict: "E",
            //controller: "siteGenNavbarController",
            //controllerAs: "mnuCtrl",
            link: function (scope, elem, attrs) {
            }
        };
    }
    exports_1("SiteGenNavbarDirective", SiteGenNavbarDirective);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//export class SiteGenNavbarController {
//    constructor(private $rootScope: ng.IRootScopeService) {
//    }
//    click(command: string): void {
//        let name = "sitegen:" + command;
//        this.$rootScope.$broadcast(name, {});
//    }
//} 
//# sourceMappingURL=navbar.component.js.map