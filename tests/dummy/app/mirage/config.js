export default function() {

  this.get('/api/users', function(param, request) {
    var result = {
      data: [
        {type: 'user', id: 1, attributes: {username: 'zelda1', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active'}},
        {type: 'user', id: 2, attributes: {username: 'link2', email: 'link@yahoo.com', name: 'Link', status: 'Active'}},
        {type: 'user', id: 3, attributes: {username: 'epona3', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive'}},
        {type: 'user', id: 4, attributes: {username: 'zelda4', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active'}},
        {type: 'user', id: 5, attributes: {username: 'link5', email: 'link@yahoo.com', name: 'Link', status: 'Active'}},
        {type: 'user', id: 6, attributes: {username: 'epona6', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive'}},
        {type: 'user', id: 7, attributes: {username: 'zelda7', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active'}},
        {type: 'user', id: 8, attributes: {username: 'link8', email: 'link@yahoo.com', name: 'Link', status: 'Active'}},
        {type: 'user', id: 9, attributes: {username: 'epona9', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive'}}
      ],
      meta: {total: 0, per_page: 3, current_page: 1}
    };
    result.data.sort(function(a, b) {
      if (request.queryParams.sort_direction === 'desc') {
        return b.attributes[request.queryParams.sort_by].localeCompare(a.attributes[request.queryParams.sort_by]);
      } else {
        return a.attributes[request.queryParams.sort_by].localeCompare(b.attributes[request.queryParams.sort_by]);
      }
    });
    var page = parseInt(request.queryParams.page);
    if (page === 1) {
      result.data = result.data.slice(0, 3);
      result.meta = {total: 9, per_page: 3, current_page: 1};
    } else if (page === 2) {
      result.data = result.data.slice(3, 6);
      result.meta = {total: 9, per_page: 3, current_page: 2};
    } else if (page === 3) {
      result.data = result.data.slice(6, 9);
      result.meta = {total: 9, per_page: 3, current_page: 3};
    }

    return result;
  });

}
