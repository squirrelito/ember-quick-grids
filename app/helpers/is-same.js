import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper( function(value1, value2) {
    return value1 === value2;
});