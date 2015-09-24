import Ember from 'ember';

export default Ember.Component.extend({
  model: null,
  maxButtons: 4,
  currentPage: 1,
  from: Ember.computed('model.per_page', 'model.current_page', {
    get: function () {
      if (this.get('model.current_page') > 0) {
        return (this.get('model.current_page') - 1) * this.get('model.per_page') + 1;
      }
      return 0;
    }
  }),
  to: Ember.computed('model.total', 'model.per_page', 'model.current_page', {
    get: function () {
      if (this.get('model.current_page') < this.get('model.total') - this.get('model.per_page')) {
        return this.get('model.current_page') * this.get('model.per_page');
      }
      return this.get('model.total');
    }
  }),
  pages: Ember.computed('model.total', 'model.per_page', 'model.current_page', {
    get: function () {

      var total = this.get('model.total');
      var perPage = this.get('model.per_page');
      var currentPage = this.get('model.current_page');
      var maxButtons = this.get('maxButtons');

      var lastPage = Math.ceil(total / perPage);
      var showFrom = currentPage > Math.ceil(maxButtons / 2) ? currentPage - Math.ceil(maxButtons / 2) : 1;
      var showTo = currentPage < lastPage - Math.floor(maxButtons / 2) ? currentPage + Math.floor(maxButtons / 2) : lastPage;

      var pages = [];
      pages[pages.length] = {
        number: currentPage > 1 ? currentPage - 1 : 1,
        label: 'Previous',
        className: 'previous' + (currentPage === 1 ? ' disabled' : '')
      };
      for (var i = showFrom; i <= showTo; i++) {
        pages[pages.length] = {
          number: i,
          label: i,
          className: '' + (i === currentPage ? ' active' : '')
        };
      }
      pages[pages.length] = {
        number: currentPage < lastPage ? currentPage + 1 : lastPage,
        label: 'Next',
        className: 'next' + (currentPage === lastPage ? ' disabled' : '')
      };
      return pages;
    }
  }),

  actions: {
    paginate: function (page) {
      this.sendAction('paginate', page);
    }
  }
});
