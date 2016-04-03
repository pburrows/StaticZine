System.register(["./article-list.controller", "./article-add.controller"], function(exports_1) {
    var article_list_controller_1, article_add_controller_1;
    var moduleName, aritclenModule;
    return {
        setters:[
            function (article_list_controller_1_1) {
                article_list_controller_1 = article_list_controller_1_1;
            },
            function (article_add_controller_1_1) {
                article_add_controller_1 = article_add_controller_1_1;
            }],
        execute: function() {
            //import {SiteGenNavbarDirective} from "../common/nav/navbar.component";
            moduleName = "app.article";
            aritclenModule = angular.module(moduleName, [])
                .controller("articleListController", article_list_controller_1.ArticleListController)
                .controller("articleAddController", article_add_controller_1.ArticleAddController);
            exports_1("moduleName", moduleName);
            exports_1("aritclenModule", aritclenModule);
        }
    }
});
//# sourceMappingURL=articles.module.js.map