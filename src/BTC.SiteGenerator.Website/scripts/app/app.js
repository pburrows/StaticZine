System.register(["angular", "angular-ui-router", "ui-bootstrap", "angular-modal-service", "./config/app.config", "./home/home.module", "./publications/publications.module", "./articles/articles.module", "./authors/authors.module", "./common/nav/navbar.component"], function(exports_1) {
    var config, home, publication, articles, authors, navbar_component_1;
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
            },
            function (publication_1) {
                publication = publication_1;
            },
            function (articles_1) {
                articles = articles_1;
            },
            function (authors_1) {
                authors = authors_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            moduleName = "app";
            app = angular.module(moduleName, [
                home.moduleName,
                publication.moduleName,
                articles.moduleName,
                authors.moduleName,
                "ui.router",
                "ui.bootstrap"
            ])
                .directive("sgNavbar", navbar_component_1.SiteGenNavbarDirective)
                .config(config.routeConfig);
            exports_1("app", app);
            exports_1("moduleName", moduleName);
        }
    }
});
//# sourceMappingURL=app.js.map