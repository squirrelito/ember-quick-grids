import Ember from 'ember';

export default Ember.Controller.extend({
  sortBy: 'username',
  sortDirection: 'asc',
  localStorageService: {
    set: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove: function(key) {
      localStorage.removeItem(key);
    },
    get: function(key) {
      var value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return false;
    },
    flush: function() {
      localStorage.clear();
    }
  },

  init: function() {
    this._super.apply(this, arguments);
    this.findUsers(1);
  },
  actions: {
    paginate: function(page) {
      this.findUsers(page);
    },
    sort: function(field, direction) {
      this.sortBy = field;
      this.sortDirection = direction;
      this.findUsers(1);
    }
  },

  findUsers: function(page) {
    this.store.query('user', {page: page, sort_by: this.sortBy, sort_direction: this.sortDirection}).then((users) => {
        this.set('users', users);
      }, (reason) => {
        console.info(reason, 'Mirage could not fetch the users data!');
      }
    );
  },

  columns: [
    {
      id: 'username',
      name: 'Username',
      sortable: true,
      sort: 'username',
      sortAsc: true,
      visible: true,
      width: 14,
      value: function(o) { return o.get('username'); }
    },
    {
      id: 'email',
      name: 'Email',
      sortable: true,
      sort: 'email',
      visible: true,
      width: 20,
      value: function(o) { return o.get('email'); }
    },
    {
      id: 'name',
      name: 'Full name',
      sortable: true,
      sort: 'name',
      visible: true,
      width: 33,
      value: function(o) { return o.get('name'); }
    },
    {
      id: 'status',
      name: 'Status',
      sortable: true,
      sort: 'status',
      visible: true,
      width: 18,
      value: function(o) { return o.get('status'); }
    },
    {
      id: 'actions',
      name: 'Actions',
      sortable: false,
      sort: '',
      visible: true,
      width: 15,
      value: function(o) {
        return {
          template: 'actions-row',
          value: o
        };
      }
    }
  ]
});
