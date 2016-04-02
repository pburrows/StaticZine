import 'angular';
import * as app from './app';

angular.element(document).ready(() => {
    angular.bootstrap(document, [app.moduleName]);
});