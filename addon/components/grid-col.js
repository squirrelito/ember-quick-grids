import Ember from 'ember';

export default Ember.Component.extend({
    model: null,
    column: null,
    t: false,
    value: '',
    willInsertElement: function() {
        var col = this;

        var valObj = col.column.value(col.model);
        if (valObj.template) {
            col.set('value', valObj);
            col.set('t', valObj.template);
        } else {
            col.set('value', valObj);
        }

        col._super();
    },
    actions: {
        action: function (action, param1, param2, param3) {
            this.get('value')[action](param1, param2, param3);
        }
    }
});