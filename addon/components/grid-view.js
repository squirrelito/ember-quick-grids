import Ember from 'ember';

export default Ember.Component.extend({
  id: false,
  localStorage: false,
  tableId: Ember.computed('id', function() {
    return 'grid-view-' + this.get('id');
  }),

  columns: false,
  columnsStatic: Ember.computed('contents', {
    get: function() {
      return this.get('columns');
    }
  }),

  columnsVisibility: [],
  allVisible: false,
  columnVisibilityChanged: function() {
    var component = this.get('parentView');
    var allVisible = true;
    component.get('columnsVisibility').forEach((item) => {
      if (!item.visible) {
        allVisible = false;
      }
    });
    component.set('allVisible', allVisible);
    return true;
  },
  allVisibilityChanged: function(c) {
    var component = this.get('parentView');
    component.get('columnsVisibility').forEach((item) => {
      Ember.set(item, 'visible', c.target.checked);
    });
    return true;
  },

  contents: false,
  pagination: Ember.computed('contents.total', 'contents.per_page', 'contents.current_page', {
    get: function() {
      return this.get('contents.meta');
    }
  }),

  willInsertElement: function() {
    this.setupSessionState();
    Ember.run.later(this, () => {
      this.setupColumnProperties();
    }, 500);
    this._super();
  },
  didInsertElement: function() {
    Ember.run.later(this, () => {
      this.setupResizables();
      this.setupSorttables();
      this.setupDropdowns();
    }, 500);
    this._super();
  },

  getWidthInPercent: function (el) {
    return Math.round(
        100 *
        parseFloat(this.$(el).css('width')) /
        parseFloat(this.$(el).parent().css('width'))
      );
  },
  setupDropdowns: function() {
    this.$('#' + this.get('tableId') + ' th .dropdown-toggle').dropdown();
    this.$('#' + this.get('tableId') + ' th .dropdown-menu.form');
  },
  setupResizables: function() {
    if (this.$('#' + this.get('tableId')).data('resizableColumns')) {
      this.$('#' + this.get('tableId')).resizableColumns('destroy');
    }

    this.$('#' + this.get('tableId')).resizableColumns({
      store: {
        set: (/*columnId, width*/) => {
          return true;
        },
        get: (columnId) => {
          columnId = 'grid-view-' + columnId;
          columnId = columnId.replace(this.get('tableId') + '-', '');
          var width = 10;
          var columns = this.get('columns');
          columns.forEach((item) => {
            if (columnId === item.id) {
              width = item.width;
            }
          });
          return width;
        }
      },
      stop: (/* event, config */) => {
        var columns = this.get('columns');
        columns.forEach((item) => {
          Ember.set(item, 'width', this.getWidthInPercent(this.$('#' + this.get('tableId') + ' th[data-resizable-column-id="' + item.id + '"]')));
        });
        this.persistColumns(columns);
      }
    });
  },
  setupSorttables: function() {
    if (this.$('#' + this.get('tableId')).data('extend-sorttable')) {
      this.$('#' + this.get('tableId')).sorttable('destroy');
    }
    this.$('#' + this.get('tableId')).sorttable({
      placeholder: 'placeholder',
      items: '>.orderable',
      start: function (e, ui) { ui.item.parents('table:first').children().find('>tr:not(.ui-sortable)').fadeTo('slow', 0.25); },
      stop: (e, ui) => {
        ui.item.parents('table:first').children().find('>tr:not(.ui-sortable)').fadeTo('fast', 1);

        var columns = [];
        var columnsFinal = [];
        this.$('#' + this.get('tableId') + ' th').each((ind, el) => {
          columns[columns.length] = this.$(el).data('resizable-column-id');
        });
        var origColumns = this.get('columns');
        columns.forEach(function(item) {
          origColumns.forEach(function(itemColumn) {
            if (itemColumn.id === item) {
              columnsFinal[columnsFinal.length] = itemColumn;
            }
          });
        });
        origColumns.forEach(function(itemColumn) {
          var toBeAdded = true;
          columns.forEach(function(item) {
            if (itemColumn.id === item) {
              toBeAdded = false;
            }
          });
          if (toBeAdded) {
            columnsFinal[columnsFinal.length] = itemColumn;
          }
        });

        Ember.run.later(this, () => {
          this.set('columns', columnsFinal);
          this.setupColumnProperties();
          this.persistColumns(columnsFinal);
          this.setupResizables();
        });
      }
    });
  },
  setupColumnProperties: function() {
    var columnsVisibility = [];
    var allVisible = true;

    var firstName = this.$('#' + this.get('tableId') + ' th:first').data('resizable-column-id');
    this.get('columns').forEach((itemColumn) => {
      Ember.set(itemColumn, 'first', itemColumn.id === firstName);

      if (!itemColumn.visible) {
        allVisible = false;
      }
      columnsVisibility[columnsVisibility.length] = {
        'id': itemColumn.id,
        'name': itemColumn.name,
        'visible': itemColumn.visible
      };
    });
    this.set('columnsVisibility', columnsVisibility);
    this.set('allVisible', allVisible);
  },
  persistColumns: function(columns) {
    this.setupColumnProperties();
    if (this.get('localStorage')) {
      this.get('localStorage').set('grid-' + this.get('id'), columns);
    }
  },
  setupSessionState: function() {
    var storedColumns = false;
    if (this.get('localStorage')) {
      //this.get('localStorage').set('grid-' + this.get('id'), false);
      storedColumns = this.get('localStorage').get('grid-' + this.get('id'));
    }

    if (storedColumns) {
      storedColumns.forEach((item, index) => {
        this.get('columns').forEach(function(itemOriginal) {
          if (itemOriginal.id === item.id) {
            storedColumns[index].value = itemOriginal.value;
          }
        });
      });
      this.set('columns', storedColumns);
    }
  },

  actions: {
    applyTableOptions: function() {
      var noColumnVisible = true;
      this.get('columnsVisibility').forEach((item) => {
        if (item.visible) {
          noColumnVisible = false;
        }
      });

      if (noColumnVisible) {
        this.setupColumnProperties();
      } else {
        var origColumns = this.get('columns');
        this.get('columnsVisibility').forEach((item) => {
          origColumns.forEach((itemColumn) => {
            if (itemColumn.id === item.id) {
              Ember.set(itemColumn, 'visible', item.visible);
            }
          });
        });
        this.set('columns', origColumns);
        this.persistColumns(origColumns);

        Ember.run.later(this, () => {
          this.setupResizables();
          this.setupColumnProperties();
        });
      }

      this.$('#' + this.get('tableId') + ' th .dropdown-toggle').parent().removeClass('open');
    },
    cancelTableOptions: function() {
      this.setupColumnProperties();
      this.$('#' + this.get('tableId') + ' th .dropdown-toggle').parent().removeClass('open');
    },
    paginate: function(page) {
      this.sendAction('paginate', page);
    },
    sort: function(col) {
      var direction;
      var columns = this.get('columns');
      columns.forEach(function(item) {
        if (item.id === col.id) {
          if (item.sortDesc) {
            direction = 'asc';
            Ember.set(item, 'sortAsc', true);
            Ember.set(item, 'sortDesc', false);
          } else {
            direction = 'desc';
            Ember.set(item, 'sortAsc', false);
            Ember.set(item, 'sortDesc', true);
          }
        } else {
          Ember.set(item, 'sortAsc', false);
          Ember.set(item, 'sortDesc', false);
        }
      });
      this.persistColumns(columns);

      this.sendAction('sort', col.sort, direction);
    }
  }
});
