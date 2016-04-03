import {ArticleListController} from "./article-list.controller";
import {ArticleAddController} from "./article-add.controller";
//import {SiteGenNavbarDirective} from "../common/nav/navbar.component";

const moduleName = "app.article";

let aritclenModule = angular.module(moduleName, [])
    .controller("articleListController", ArticleListController)
    .controller("articleAddController", ArticleAddController);
    //.directive("sgNavbar", SiteGenNavbarDirective);

export {moduleName, aritclenModule };