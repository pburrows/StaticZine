System.register(["./home.controller", "../common/nav/navbar.component"], function(exports_1) {
    var home_controller_1, navbar_component_1;
    var moduleName, homeModule;
    return {
        setters:[
            function (home_controller_1_1) {
                home_controller_1 = home_controller_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            moduleName = "app.home";
            homeModule = angular.module(moduleName, [])
                .controller("homeController", home_controller_1.HomeController)
                .directive("sgNavbar", navbar_component_1.SiteGenNavbarDirective);
            exports_1("moduleName", moduleName);
            exports_1("homeModule", homeModule);
        }
    }
});
//# sourceMappingURL=home.module.js.map