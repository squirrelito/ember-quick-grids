import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        this._super.apply(this, arguments);
    },
    columns: [
        {
            id: 'username',
            name: 'Username',
            sortable: true,
            sort: 'username',
            sorted: true,
            visible: true,
            width: 'width: 14%',
            value: function(o) { return o.get('username'); }
        },
        {
            id: 'email',
            name: 'Email',
            sortable: true,
            sort: 'email',
            sorted: false,
            visible: true,
            width: 'width: 20%',
            value: function(o) { return o.get('email'); }
        },
        {
            id: 'name',
            name: 'Full name',
            sortable: true,
            sort: 'name',
            sorted: false,
            visible: true,
            width: 'width: 33%',
            value: function(o) { return o.get('name'); }
        },
        {
            id: 'status',
            name: 'Status',
            sortable: true,
            sort: 'status',
            sorted: false,
            visible: true,
            width: 'width: 18%',
            value: function(o) { return controller.get('userStatusEnum').getLabel(o.get('status')); }
        },
        {
            id: 'actions',
            name: 'Actions',
            sortable: false,
            sort: '',
            sorted: false,
            visible: true,
            width: 'width: 15%',
            value: function(o) {
                return {
                    template: 'users/actions-row',
                    value: o,
                    edit: function() {
                        controller.transitionToRoute('users.edit', {id: o.get('id')});
                    },
                    activate: function() {
                        var message = 'Are you sure you want to activate ' + o.get('name') + '!';
                        var options = {
                            title: 'Attention',
                            acceptLabel : 'Yes',
                            declineLabel : 'No'
                        };
                        var promise = controller.get('dialogManager').confirm(message, controller, options);
                        promise.then(function() {
                            controller.activate(o);
                        }, function() {
                            console.log('Declined!');
                        });
                    },
                    deactivate: function() {
                        var message = 'Are you sure you want to deactivate ' + o.get('name') + '!';
                        var options = {
                            title: 'Attention',
                            acceptLabel : 'Yes',
                            declineLabel : 'No'
                        };
                        var promise = controller.get('dialogManager').confirm(message, controller, options);
                        promise.then(function() {
                            controller.deactivate(o);
                        }, function() {
                            console.log('Declined!');
                        });
                    }
                };
            }
        }
    ]
});