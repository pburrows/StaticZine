import "angular";
import "angular-ui-router";
import "ui-bootstrap";
import "angular-modal-service";
import * as config from "./config/app.config";
import * as home from "./home/home.module";
import * as publication from "./publications/publications.module";
import * as articles from "./articles/articles.module";
import * as authors from "./authors/authors.module";
import {SiteGenNavbarDirective} from "./common/nav/navbar.component";

const moduleName: string = "app";


let app: ng.IModule = angular.module(moduleName, [
    home.moduleName,
    publication.moduleName,
    articles.moduleName,
    authors.moduleName,
    "ui.router",
    "ui.bootstrap"
])
    .directive("sgNavbar", SiteGenNavbarDirective)
    .config(config.routeConfig);

export {app, moduleName};
