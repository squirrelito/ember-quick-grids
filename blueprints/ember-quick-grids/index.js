module.exports = {
  description: '',
  afterInstall: function () {
    return this.addBowerPackagesToProject([
      {'name':'ember', 'target': '2.x'},
      {'name':'jquery', 'target': '2.x'},
      {'name':'jquery-ui', 'target': '1.11.x'},
      {'name':'jquery-resizable-columns', 'target': '0.x'},
      {'name':'jquery.sorttable', 'target': 'https://raw.githubusercontent.com/dbrink/sorttable/master/jquery.sorttable.js'},
      {'name':'bootstrap', 'target': '3.x'},
      {'name':'fontawesome', 'target': '4.x'}
    ]);
  }
};
