System.register(["angular", "angular-ui-router", "ui-bootstrap", "angular-modal-service", "./config/app.config", "./home/home.module"], function(exports_1) {
    var config, home;
    var moduleName, app;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (config_1) {
                config = config_1;
            },
            function (home_1) {
                home = home_1;
            }],
        execute: function() {
            moduleName = "app";
            app = angular.module(moduleName, [
                home.moduleName,
                "ui.router",
                "ui.bootstrap"
            ])
                .config(config.routeConfig);
            exports_1("app", app);
            exports_1("moduleName", moduleName);
        }
    }
});
//# sourceMappingURL=app.js.map