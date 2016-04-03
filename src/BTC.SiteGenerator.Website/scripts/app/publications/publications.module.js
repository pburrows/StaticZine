System.register(["./publication-list.controller", "./publication-add.controller"], function(exports_1) {
    var publication_list_controller_1, publication_add_controller_1;
    var moduleName, publicationModule;
    return {
        setters:[
            function (publication_list_controller_1_1) {
                publication_list_controller_1 = publication_list_controller_1_1;
            },
            function (publication_add_controller_1_1) {
                publication_add_controller_1 = publication_add_controller_1_1;
            }],
        execute: function() {
            //import {SiteGenNavbarDirective} from "../common/nav/navbar.component";
            moduleName = "app.publication";
            publicationModule = angular.module(moduleName, [])
                .controller("publicationListController", publication_list_controller_1.PublicationListController)
                .controller("publicationAddController", publication_add_controller_1.PublicationAddController);
            exports_1("moduleName", moduleName);
            exports_1("publicationModule", publicationModule);
        }
    }
});
//# sourceMappingURL=publications.module.js.map