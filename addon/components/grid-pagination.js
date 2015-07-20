import Ember from 'ember';

export default Ember.Component.extend({
    model: null,
    maxButtons: 4,
    currentPage: 0,
    total: 0,
    from: 0,
    to: 0,
    pages: Ember.computed('model', {
        get: function() {
            var pagination = this;

            var total = pagination.get('model.total');
            var perPage = pagination.get('model.per_page');
            var currentPage = pagination.get('model.current_page');
            var lastPage = Math.ceil(total / perPage);
            var maxButtons = pagination.get('maxButtons');

            var pages = [];
            pages[pages.length] = {
                number: currentPage > 1 ? currentPage - 1 : 1,
                label: 'Previous',
                className: 'previous' + (currentPage === 1 ? ' disabled' : '')
            };
            var showFrom = currentPage > Math.ceil(maxButtons / 2) ? currentPage - Math.ceil(maxButtons / 2) : 1;
            var showTo = currentPage < lastPage - Math.floor(maxButtons / 2) ? currentPage + Math.floor(maxButtons / 2) : lastPage;
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