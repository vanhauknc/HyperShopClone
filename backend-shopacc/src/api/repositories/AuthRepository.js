const BaseRepository = require('./baseRepository');
const table = 'users';

class AuthRepository extends BaseRepository{
    constructor(){
        super(table);
    }

    async CheckEmailExist(email){
        let sql = `select * from ${table} where email='${email}' limit 1`;
        return new Promise((resolve,reject)=>{
            this.db.query(sql,(err,rows)=>{
                if (err) reject(err)
                resolve(rows);
            })
        })
    }

    checkUserLogin(email)
    {
        let sql = `select * from ${table} where email ='${email}' and status = 'ACTIVE' limit 1 `;
        return new Promise((resolve,reject)=>{
            this.list(sql)
            .then(data=>resolve(data) )
            .catch(err=>reject(err))
        })
    }

   

}
module.exports = AuthRepository;