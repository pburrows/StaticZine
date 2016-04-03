System.register(["./author-list.controller", "./author-add.controller"], function(exports_1) {
    var author_list_controller_1, author_add_controller_1;
    var moduleName, authornModule;
    return {
        setters:[
            function (author_list_controller_1_1) {
                author_list_controller_1 = author_list_controller_1_1;
            },
            function (author_add_controller_1_1) {
                author_add_controller_1 = author_add_controller_1_1;
            }],
        execute: function() {
            //import {SiteGenNavbarDirective} from "../common/nav/navbar.component";
            moduleName = "app.author";
            authornModule = angular.module(moduleName, [])
                .controller("authorListController", author_list_controller_1.AuthorListController)
                .controller("authorAddController", author_add_controller_1.AuthorAddController);
            exports_1("moduleName", moduleName);
            exports_1("authornModule", authornModule);
        }
    }
});
//# sourceMappingURL=authors.module.js.map