import "angular";
import "angular-ui-router";
import "ui-bootstrap";
import "angular-modal-service";
import * as config from "./config/app.config";
import * as home from "./home/home.module";

const moduleName: string = "app";


let app: ng.IModule = angular.module(moduleName, [
    home.moduleName,
    "ui.router",
    "ui.bootstrap"
])
    .config(config.routeConfig);

export {app, moduleName};
