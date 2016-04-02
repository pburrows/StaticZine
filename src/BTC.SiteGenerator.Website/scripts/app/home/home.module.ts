import {HomeController} from "./home.controller";
import {SiteGenNavbarDirective, SiteGenNavbarController} from "../common/nav/navbar.component";

const moduleName = "app.home";

let homeModule = angular.module(moduleName, [])
    .controller("homeController", HomeController)
    .directive("sgNavbar", SiteGenNavbarDirective);

export {moduleName, homeModule};