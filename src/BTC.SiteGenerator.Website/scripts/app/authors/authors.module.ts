import {AuthorListController} from "./author-list.controller";
import {AuthorAddController} from "./author-add.controller";
//import {SiteGenNavbarDirective} from "../common/nav/navbar.component";

const moduleName = "app.author";

let authornModule = angular.module(moduleName, [])
    .controller("authorListController", AuthorListController)
    .controller("authorAddController", AuthorAddController);
    //.directive("sgNavbar", SiteGenNavbarDirective);

export {moduleName, authornModule };