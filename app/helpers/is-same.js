import Ember from 'ember';

export default Ember.Helper.helper(function (value1, value2) {
  return value1 === value2;
});
