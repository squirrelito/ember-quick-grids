import Ember from 'ember';

export default Ember.Component.extend({
    model: null,
    maxButtons: 4,
    currentPage: 0,
    total: 0,
    from: 0,
    to: 0,
    pages: [],
    watcher: function() {
        var pagination = this;

        var total = pagination.get('model.total');
        var perPage = pagination.get('model.per_page');
        var currentPage = pagination.get('model.current_page');
        var lastPage = Math.ceil(total / perPage);
        var maxButtons = pagination.get('maxButtons');

        pagination.set('total', total);
        pagination.set('currentPage', currentPage);
        pagination.set('from', total > 0 ? perPage * (currentPage - 1) + 1 : 0);
        pagination.set('to', perPage * currentPage > total ? total : perPage * currentPage);

        var pages = [];
        pages[pages.length] = {
            disabled: currentPage === 1,
            active: false,
            number: currentPage > 1 ? currentPage - 1 : 1,
            label: 'Previous',
            className: 'previous'
        };
        var showFrom = currentPage > Math.ceil(maxButtons / 2) ? currentPage - Math.ceil(maxButtons / 2) : 1;
        var showTo = currentPage < lastPage - Math.floor(maxButtons / 2) ? currentPage + Math.floor(maxButtons / 2) : lastPage;
        for (var i = showFrom; i <= showTo; i++) {
            pages[pages.length] = {
                disabled: false,
                active: i === currentPage,
                number: i,
                label: i,
                className: ''
            };
        }
        pages[pages.length] = {
            disabled: currentPage === lastPage,
            active: false,
            number: currentPage < lastPage ? currentPage + 1 : lastPage,
            label: 'Next',
            className: 'next'
        };
        pagination.set('pages', pages);
    }.observes('model'),

    actions: {
        paginate: function (page) {
            this.sendAction('paginate', page);
        }
    }
});