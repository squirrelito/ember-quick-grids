export default function() {

  this.get('/api/users', function(param, request) {
    var page = parseInt(request.queryParams.page);
    if (page === 1) {
      return {
        data: [
          {type: 'user', id: 1, attributes: {username: 'zelda1', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active'}},
          {type: 'user', id: 2, attributes: {username: 'link2', email: 'link@yahoo.com', name: 'Link', status: 'Active'}},
          {type: 'user', id: 3, attributes: {username: 'epona3', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive'}}
        ],
        meta: {total: 9, per_page: 3, current_page: 1}
      };
    } else if (page === 2) {
      return {
        data: [
          {type: 'user', id: 4, attributes: {username: 'zelda4', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active'}},
          {type: 'user', id: 5, attributes: {username: 'link5', email: 'link@yahoo.com', name: 'Link', status: 'Active'}},
          {type: 'user', id: 6, attributes: {username: 'epona6', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive'}}
        ],
        meta: {total: 9, per_page: 3, current_page: 2}
      };
    } else if (page === 3) {
      return {
        data: [
          {type: 'user', id: 7, attributes: {username: 'zelda7', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active'}},
          {type: 'user', id: 8, attributes: {username: 'link8', email: 'link@yahoo.com', name: 'Link', status: 'Active'}},
          {type: 'user', id: 9, attributes: {username: 'epona9', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive'}}
        ],
        meta: {total: 9, per_page: 3, current_page: 3}
      };
    }

  });

}
