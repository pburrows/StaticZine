import {HomeController} from "./home.controller";
import {SiteGenNavbarDirective} from "../common/nav/navbar.component";

const moduleName = "app.home";

let homeModule = angular.module(moduleName, [])
    .controller("homeController", HomeController)
    .directive("sgNavbar", SiteGenNavbarDirective);

export {moduleName, homeModule};