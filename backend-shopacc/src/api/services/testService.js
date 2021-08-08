 const testRepository = require('../repositories/testRepository');

class testService {
    constructor(){
        this.repo = new testRepository();
    }

    async gettest(){
        let k = await this.repo.list('select * from users');
        console.log(k[0].name);
        return k[0];
    }


}
module.exports =  testService;