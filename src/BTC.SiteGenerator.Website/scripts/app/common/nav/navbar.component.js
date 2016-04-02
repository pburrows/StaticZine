System.register([], function(exports_1) {
    var WsNavbarController;
    function SiteGenNavbarDirective() {
        "use strict";
        return {
            templateUrl: "/scripts/app/common/navbar/navbar.html",
            restrict: "E",
            controller: "siteGenNavbarController",
            controllerAs: "mnuCtrl",
            link: function (scope, elem, attrs) {
            }
        };
    }
    exports_1("SiteGenNavbarDirective", SiteGenNavbarDirective);
    return {
        setters:[],
        execute: function() {
            WsNavbarController = (function () {
                function WsNavbarController($rootScope) {
                    this.$rootScope = $rootScope;
                }
                WsNavbarController.prototype.click = function (command) {
                    var name = "sitegen:" + command;
                    this.$rootScope.$broadcast(name, {});
                };
                return WsNavbarController;
            })();
            exports_1("WsNavbarController", WsNavbarController);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map