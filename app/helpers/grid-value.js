import Ember from 'ember';

export default Ember.Helper.helper(function (col, con) {
  return col.value(con);
});
