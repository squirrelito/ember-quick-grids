/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-quick-grids',
  included: function (app, parentAddon) {
    this._super.included(app);

    var target = (parentAddon || app);

    target.import(target.bowerDirectory + '/ember/ember-template-compiler.js');

    target.import(target.bowerDirectory + '/jquery-ui/jquery-ui.min.js');
    target.import(target.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');
    //target.import(target.bowerDirectory + '/jquery.sorttable/index.js');
    target.import('vendor/sorttable/index.js');
    target.import(target.bowerDirectory + '/jquery-resizable-columns/dist/jquery.resizableColumns.min.js');

    target.import(target.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
    target.import(target.bowerDirectory + '/jquery-resizable-columns/dist/jquery.resizableColumns.css');

    target.import(target.bowerDirectory + '/fontawesome/css/font-awesome.min.css');
    target.import(target.bowerDirectory + "/fontawesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
    target.import(target.bowerDirectory + "/fontawesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
    target.import(target.bowerDirectory + "/fontawesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
    target.import(target.bowerDirectory + "/fontawesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
    target.import(target.bowerDirectory + "/fontawesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
    target.import(target.bowerDirectory + "/fontawesome/fonts/FontAwesome.otf", { destDir: "fonts" });
  }
};
