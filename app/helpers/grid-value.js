import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper( function(col, con) {
    return col.value(con);
});