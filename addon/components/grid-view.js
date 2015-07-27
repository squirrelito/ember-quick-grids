import Ember from 'ember';

export default Ember.Component.extend({
  id: false,
  localStorage: false,
  tableId: Ember.computed('id', function() {
    return 'grid-view-' + this.get('id');
  }),
  columns: false,
  columnsVisibility: [],
  contents: false,
  pagination: Ember.computed('contents.total', 'contents.per_page', 'contents.current_page', {
    get: function() {
      //var grid = this;
      //Ember.run.later(grid, function() {
      //    grid.setupTooltips();
      //});
      //
      return this.get('contents.meta');
    }
  }),
  allVisible: false,
  willInsertElement: function() {
    var grid = this;

    //grid.setupSessionState();
    //grid.setupColumnProperties();

    grid._super();
  },
  didInsertElement: function() {
    var grid = this;

    //Ember.run.scheduleOnce('afterRender', grid, function() {
    //    grid.setupResizables();
    //    grid.setupSorttables();
    //    grid.setupDropdowns();
    //});

    grid._super();
  },
  setupSessionState: function() {
    var grid = this;

    var storedColumns = false;
    if (grid.get('localStorage')) {
      grid.get('localStorage').set('grid-' + grid.get('id'), false);
      storedColumns = grid.get('localStorage').get('grid-' + grid.get('id'));
    }

    if (storedColumns) {
      storedColumns.forEach(function(item, index) {
        grid.get('columns').forEach(function(itemOriginal) {
          if (itemOriginal.id === item.id) {
            storedColumns[index].value = itemOriginal.value;
          }
        });
      });

      grid.set('columns', storedColumns);
    } else {
      grid.get('columns').forEach(function(itemOriginal) {
        if (itemOriginal.sorted) {
          Ember.set(itemOriginal, 'sortAsc', itemOriginal.sort.substr(0, 1) !== '-');
          Ember.set(itemOriginal, 'sortDesc', itemOriginal.sort.substr(0, 1) === '-');
        } else {
          Ember.set(itemOriginal, 'sortAsc', false);
          Ember.set(itemOriginal, 'sortDesc', false);
        }
      });
    }
  },
  setupTooltips: function() {
    //var grid = this;
    //
    //grid.$('[data-toggle="tooltip"]').tooltip({ container: 'body' });
  },
  setupDropdowns: function() {
    //var grid = this;
    //
    //grid.$('#' + grid.get('tableId') + ' th .dropdown-toggle').dropdown();
    //grid.$('#' + grid.get('tableId') + ' th .dropdown-menu.form');
  },
  setupResizables: function() {
    //var grid = this;
    //
    //if (grid.$('#' + grid.get('tableId')).data('resizableColumns')) {
    //    grid.$('#' + grid.get('tableId')).resizableColumns('destroy');
    //}
    //grid.$('#' + grid.get('tableId')).resizableColumns({
    //    stop: function(/* event, config */) {
    //        var columns = grid.get('columns');
    //        columns.forEach(function(item) {
    //            Ember.set(item, 'width', 'width: ' + grid.getWidthInPercent(grid.$('#' + grid.get('tableId') + ' th[data-resizable-column-id="' + item.id + '"]')));
    //        });
    //        grid.persistColumns(columns);
    //    }
    //});
  },
  setupSorttables: function() {
    //var grid = this;
    //
    //if (grid.$('#' + grid.get('tableId')).data('extend-sorttable')) {
    //    grid.$('#' + grid.get('tableId')).sorttable('destroy');
    //}
    //grid.$('#' + grid.get('tableId')).sorttable({
    //    placeholder: 'placeholder',
    //    items: '>.orderable',
    //    start: function (e, ui) { ui.item.parents('table:first').children().find('>tr:not(.ui-sortable)').fadeTo('slow', 0.25); },
    //    stop: function (e, ui) {
    //        ui.item.parents('table:first').children().find('>tr:not(.ui-sortable)').fadeTo('fast', 1);
    //
    //        var columns = [];
    //        var columnsFinal = [];
    //        grid.$('#' + grid.get('tableId') + ' th').each(function(ind, el) {
    //            columns[columns.length] = grid.$(el).data('resizable-column-id');
    //        });
    //
    //        var origColumns = grid.get('columns');
    //        columns.forEach(function(item) {
    //            origColumns.forEach(function(itemColumn) {
    //                if (itemColumn.id === item) {
    //                    columnsFinal[columnsFinal.length] = itemColumn;
    //                }
    //            });
    //        });
    //        origColumns.forEach(function(itemColumn) {
    //            var toBeAdded = true;
    //            columns.forEach(function(item) {
    //                if (itemColumn.id === item) {
    //                    toBeAdded = false;
    //                }
    //            });
    //            if (toBeAdded) {
    //                columnsFinal[columnsFinal.length] = itemColumn;
    //            }
    //        });
    //
    //        Ember.run.later(grid, function() { // otherwise resizableColumns are buggy
    //            grid.set('columns', columnsFinal);
    //            grid.persistColumns(columnsFinal);
    //            grid.setupColumnProperties();
    //        }, 200);
    //        Ember.run.later(grid, function() { // otherwise resizableColumns are buggy
    //            grid.setupResizables();
    //        }, 500);
    //    }
    //});
  },
  setupColumnProperties: function() {
    //var grid = this;
    //
    //var columnsVisibility = [];
    //var allVisible = true;
    //var first = false;
    //
    //grid.get('columns').forEach(function(itemColumn) {
    //    var firstVal = !first && itemColumn.visible;
    //    if (firstVal) {
    //        first = true;
    //    }
    //    Ember.set(itemColumn, 'first', firstVal);
    //
    //    if (!itemColumn.visible) {
    //        allVisible = false;
    //    }
    //    columnsVisibility[columnsVisibility.length] = {
    //        'id': itemColumn.id,
    //        'name': itemColumn.name,
    //        'visible': itemColumn.visible
    //    };
    //});
    //grid.set('columnsVisibility', columnsVisibility);
    //grid.set('allVisible', allVisible);
  },
  persistColumns: function(/* columns */) {
    //this.get('localStorage').set('grid-' + this.get('id'), columns);
  },

  watchAllVisible: function() {
    //var grid = this;
    //if (!grid.get('manuallyChaning')) {
    //    grid.set('manuallyChaning', true);
    //    grid.get('columnsVisibility').forEach(function(item) {
    //        Ember.set(item, 'visible', grid.allVisible);
    //    });
    //    grid.set('manuallyChaning', false);
    //}
  },//.observes('allVisible'),
  watchColumnsVisiblity: function() {
    //var grid = this;
    //
    //if (!grid.get('manuallyChaning')) {
    //    var allVisible = true;
    //    grid.get('columnsVisibility').forEach(function (item) {
    //        if (!item.visible) {
    //            allVisible = false;
    //        }
    //    });
    //
    //    grid.set('manuallyChaning', true);
    //    grid.set('allVisible', allVisible);
    //    grid.set('manuallyChaning', false);
    //}
  },//.observes('columnsVisibility.@each.visible'),

  actions: {
    applyTableOptions: function() {
      var grid = this;

      var noColumnVisible = true;
      grid.get('columnsVisibility').forEach(function(item) {
        if (item.visible) {
          noColumnVisible = false;
        }
      });

      if (noColumnVisible) {
        grid.setupColumnProperties();
      } else {
        var origColumns = grid.get('columns');
        grid.get('columnsVisibility').forEach(function(item) {
          origColumns.forEach(function(itemColumn) {
            if (itemColumn.id === item.id) {
              Ember.set(itemColumn, 'visible', item.visible);
            }
          });
        });
        grid.persistColumns(origColumns);

        grid.setupColumnProperties();

        Ember.run.later(grid, function() { // otherwise resizableColumns are buggy
          grid.setupResizables();
        }, 500);
      }

      grid.$('#' + grid.get('tableId') + ' th .dropdown-toggle').parent().removeClass('open');
    },
    cancelTableOptions: function() {
      var grid = this;

      grid.setupColumnProperties();

      this.$('#' + this.get('tableId') + ' th .dropdown-toggle').parent().removeClass('open');
    },
    paginate: function(page) {
      this.sendAction('paginate', page);
    },
    sort: function(col) {
      var columns = this.get('columns');
      columns.forEach(function(item) {
        if (item.id === col.id) {
          Ember.set(item, 'sorted', true);
          if (item.sort.substr(0, 1) === '-') {
            Ember.set(item, 'sortAsc', true);
            Ember.set(item, 'sortDesc', false);
            Ember.set(item, 'sort', item.sort.replace('-', ''));
          } else {
            Ember.set(item, 'sortAsc', false);
            Ember.set(item, 'sortDesc', true);
            Ember.set(item, 'sort', '-' + item.sort);
          }
        } else {
          Ember.set(item, 'sorted', false);
          Ember.set(item, 'sortAsc', false);
          Ember.set(item, 'sortDesc', false);
        }
      });
      this.persistColumns(columns);

      this.sendAction('sort');
    }
  },

  // Inline calculation helpers
  getWidthInPercent: function (/* el */) {
    //var width = parseFloat(this.$(el).css('width'))/parseFloat(this.$(el).parent().css('width'));
    //return Math.round(100*width)+'%';
  }
});
