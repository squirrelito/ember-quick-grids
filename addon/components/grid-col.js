import Ember from 'ember';

export default Ember.Component.extend({
  model: null,
  column: null,
  t: Ember.computed('column', 'model', function () {
    var valObj = this.column.value(this.model);
    if (valObj && valObj.template) {
      return valObj.template;
    } else {
      return '';
    }
  }),
  value: Ember.computed('column', 'model', function () {
    return this.column.value(this.model);
  }),
  actions: {
    action: function (action, param1, param2, param3) {
      this.get('value')[action](param1, param2, param3);
    }
  }
});
