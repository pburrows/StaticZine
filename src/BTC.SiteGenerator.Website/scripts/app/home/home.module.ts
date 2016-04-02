import {HomeController} from "./home.controller";

const moduleName = "app.home";

let homeModule = angular.module(moduleName, [])
    .controller("homeController", HomeController);

export {moduleName, homeModule};