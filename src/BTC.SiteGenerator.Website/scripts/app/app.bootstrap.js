System.register(['angular', './app'], function(exports_1) {
    var app;
    return {
        setters:[
            function (_1) {},
            function (app_1) {
                app = app_1;
            }],
        execute: function() {
            angular.element(document).ready(function () {
                angular.bootstrap(document, [app.moduleName]);
            });
        }
    }
});
//# sourceMappingURL=app.bootstrap.js.map