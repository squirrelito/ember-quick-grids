var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

//app.import('bower_components/ember/ember-template-compiler.js');
app.import('bower_components/jquery-ui/jquery-ui.min.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
app.import('bower_components/jquery.sorttable/index.js');
app.import('bower_components/jquery-resizable-columns/dist/jquery.resizableColumns.min.js');
app.import('bower_components/jquery-resizable-columns/dist/jquery.resizableColumns.css');

module.exports = app.toTree();
