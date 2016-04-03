import {PublicationListController} from "./publication-list.controller";
import {PublicationAddController} from "./publication-add.controller";
//import {SiteGenNavbarDirective} from "../common/nav/navbar.component";

const moduleName = "app.publication";

let publicationModule = angular.module(moduleName, [])
    .controller("publicationListController", PublicationListController)
    .controller("publicationAddController", PublicationAddController);
    //.directive("sgNavbar", SiteGenNavbarDirective);

export {moduleName, publicationModule };