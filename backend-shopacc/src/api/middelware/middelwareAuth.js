var jwt = require('jsonwebtoken');
const AuthService = require('../services/AuthService');

const _service = new AuthService();
module.exports = {
    AuthorizationUser: function(req,res,next) {
        if (!req.headers.authorization) return res.status(401).json({ success: false, message: 'Missing Authorization Header' })
        let token = req.headers.authorization.split(' ')[1];
        
        jwt.verify(token, process.env.PRIVATE_KEY_PASS, (err, data) => {
            if (err) return res.json({ success: false,data : null, message: "Token Error" })
            req.user = data ;
            next();
        })
    },

    AuthorizationAdmin: function(req,res,next) {
        if (!req.headers.authorization) return res.status(401).json({ success: false, message: 'Missing Authorization Header' })
        let token = req.headers.authorization.split(' ')[1];
        
        jwt.verify(token, process.env.PRIVATE_KEY_PASS, (err, data) => {
            if (err) return res.json({ success: false,data : null, message: "Token Error" })
            _service.checkRole(data.id)
            .then(rs =>{
                if(rs==='admin') 
                {
                    req.user = data;
                    next();
                    
                }else {
                    return res.json({ success: false,data : null, message: "Permission Limit !" })
                }
                
            })
            .catch(errs =>{return res.json({ success: false,data : null, message: errs}) } )
        })
    },
};