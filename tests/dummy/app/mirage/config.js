export default function() {

    this.get('/api/users', function() {
        return {
            data: [
                {type: 'user', id: 1, attributes: {username: 'zelda', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active'}},
                {type: 'user', id: 2, attributes: {username: 'link', email: 'link@yahoo.com', name: 'Link', status: 'Active'}},
                {type: 'user', id: 3, attributes: {username: 'epona', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive'}}
            ]
        };
    });

}