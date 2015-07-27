import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this._super.apply(this, arguments);
    this.findUsers(1);
  },
  actions: {
    paginate: function(page) {
      this.findUsers(page);
    }
  },

  findUsers: function(page) {
    this.store.query('user', {page: page}).then((users) => {
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
      sorted: true,
      visible: true,
      width: Ember.String.htmlSafe('width: 14%'),
      value: function(o) { return o.get('username'); }
    },
    {
      id: 'email',
      name: 'Email',
      sortable: true,
      sort: 'email',
      sorted: false,
      visible: true,
      width: Ember.String.htmlSafe('width: 20%'),
      value: function(o) { return o.get('email'); }
    },
    {
      id: 'name',
      name: 'Full name',
      sortable: true,
      sort: 'name',
      sorted: false,
      visible: true,
      width: Ember.String.htmlSafe('width: 33%'),
      value: function(o) { return o.get('name'); }
    },
    {
      id: 'status',
      name: 'Status',
      sortable: true,
      sort: 'status',
      sorted: false,
      visible: true,
      width: Ember.String.htmlSafe('width: 18%'),
      value: function(o) { return o.get('status'); }
    },
    {
      id: 'actions',
      name: 'Actions',
      sortable: false,
      sort: '',
      sorted: false,
      visible: true,
      width: Ember.String.htmlSafe    ('width: 15%'),
      value: function(o) {
        return {
          template: 'actions-row',
          value: o
        };
      }
    }
  ]
});
