const AuthRepository = require('../repositories/AuthRepository')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

const saltRounds = 10;

class AuthService {
    constructor(){
        this.repo = new AuthRepository();
    }

   

    async create(params){
    const [data, err] = await this.handle(this.repo.create(params));
        return data
      ? { success: true, data, message: 'successfully' }
      : { success: false, data: null, message: err };
    }

    async checkExistEmail (email){
        const [data,err] = await this.handle(this.repo.CheckEmailExist(email));
        if(err) return { success: false, data: null, message: err };
        if(data.length == 0) return false
        return true
    }

    async register(params){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(params.password, salt);

        let data2send = {
            email: params.email,
            password: hash,
            name: params.name,
        }
        let checkEmail = await this.checkExistEmail(params.email);
        if(checkEmail === true) return { success: false, data: null, message: "Email đã tồn tại !" };
        let [data,err] = await this.handle(this.create(data2send));
        return data 
        ? data
        : { success: false, data: null, message: { msg: err.message } }
        
    }
    
    async login (params){
        let {email,password} = params;
        let [data,err] = await this.handle(this.repo.checkUserLogin(email));
        
        if(data.length == 1)
        {
            let hash = data[0].password;
         
            if( bcrypt.compareSync(password, hash)=== true )
            {

                let dataTemp = {
                    id : data[0].id,
                    name : data[0].name,
                    email : data[0].email,
                    balance : data[0].balance,
                }
                
                var token = jwt.sign(dataTemp, process.env.PRIVATE_KEY_PASS, { expiresIn: '1h' })
                dataTemp.token = token;
                return { success: true, data: dataTemp, message: 'successfully' }
            }
            return { success: false, data: null, message: 'Sai mật khẩu !' }
        }
        return { success: false, data: null, message: 'Tài khoản không tồn tại !' }

    }



    async checkRole (id)
    {
        let [data,err] = await this.handle(this.repo.show(id));
   
        return data
        ? data.role 
        : false

    }

    async changePass(request)
    {
        
        let oldPass = request.body.password;
        let newPass = request.body.newpassword;
  
        let [data,err] = await this.handle(this.repo.show(request.user.id));

        if (bcrypt.compareSync(oldPass,data.password)===true)
        { 
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(newPass, salt);
            let dataUpdate = {
                password :hash
            }
            let [datars,err2] = await this.handle(this.repo.update(request.user.id,dataUpdate) )
            return datars 
            ?  { success: true, data: datars, message: 'successfully' }
            : { success: false, data: null, message: err2 }
        }else {
            return { success: false, data: null, message: 'Mật khẩu cũ không đúng !' }
        }

    }




    handle(promise) {
        return promise
          .then(data => ([data, undefined]))
          .catch(error => Promise.resolve([undefined, error]));
      }
}

module.exports = AuthService;