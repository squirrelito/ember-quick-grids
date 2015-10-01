/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-quick-grids',
  included: function (app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ember/ember-template-compiler.js');

    app.import(app.bowerDirectory + '/jquery-ui/jquery-ui.min.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');
    //app.import(app.bowerDirectory + '/jquery.sorttable/index.js');
    app.import('vendor/sorttable/index.js');
    app.import(app.bowerDirectory + '/jquery-resizable-columns/dist/jquery.resizableColumns.min.js');

    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
    app.import(app.bowerDirectory + '/fontawesome/css/font-awesome.min.css');
    app.import(app.bowerDirectory + '/jquery-resizable-columns/dist/jquery.resizableColumns.css');
  }
};
