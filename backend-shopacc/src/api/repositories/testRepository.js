const BaseRepository = require('./baseRepository');
const table = 'users';
const db = require('../../adapter/mysqlClient');

class testRepository extends BaseRepository {
    constructor()
    {
        super(table);
    }

    

}
module.exports = testRepository;