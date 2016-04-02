System.config({
   baseURL: "scripts",
   defaultJSExtensions: true,
   transpiler: false,
   paths: {
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*"
   },
   meta: {
      "lib/ui-bootstrap-tpls-1.2.5.min": {
         "format": "global",
         "deps": [
           "angular"
         ]
      }
   },
   map: {
      "angular": "github:angular/bower-angular@1.5.3",
      "ui-bootstrap": "lib/ui-bootstrap-tpls-1.2.5.min",
      "angular-modal-service": "npm:angular-modal-service@0.6.10",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.18",
      "github:angular-ui/ui-router@0.2.18": {
         "angular": "github:angular/bower-angular@1.5.3"
      },
      "github:jspm/nodelibs-assert@0.1.0": {
         "assert": "npm:assert@1.3.0"
      },
      "github:jspm/nodelibs-path@0.1.0": {
         "path-browserify": "npm:path-browserify@0.0.0"
      },
      "github:jspm/nodelibs-process@0.1.2": {
         "process": "npm:process@0.11.2"
      },
      "github:jspm/nodelibs-util@0.1.0": {
         "util": "npm:util@0.10.3"
      },
      "npm:angular-modal-service@0.6.10": {
         "path": "github:jspm/nodelibs-path@0.1.0",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      },
      "npm:assert@1.3.0": {
         "util": "npm:util@0.10.3"
      },
      "npm:inherits@2.0.1": {
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:path-browserify@0.0.0": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:process@0.11.2": {
         "assert": "github:jspm/nodelibs-assert@0.1.0"
      },
      "npm:util@0.10.3": {
         "inherits": "npm:inherits@2.0.1",
         "process": "github:jspm/nodelibs-process@0.1.2"
      }
   }
});
