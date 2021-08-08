const express = require('express');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const {AuthorizationUser,AuthorizationAdmin} = require('../middelware/middelwareAuth')


const AuthService = require('../services/AuthService');

const _service = new AuthService();



const validaterRegister = [
    body('email').exists()
        .isEmail().withMessage('Định dạng email không hợp lệ')
    ,
    body('password')
        .exists()
        .custom((value) => {
            if (value.includes('<') || value.includes('=') || value.includes('!')) {
                throw new Error('Đừng làm như thế Man !');
            }
            return true;
        })
        .isLength({ min: 5, max: 30 }).withMessage("Mật khẩu phải từ 5-30 kí tự"),

    body('name')
        .exists()
        .isString()
        .custom((value) => {
            if (value.includes('<') || value.includes('=') || value.includes('!')) {
                throw new Error('Đừng làm như thế Man !');
            }
            return true;
        })
        .isLength({ min: 5, max: 50 }).withMessage("Tên phải từ 5-30 kí tự")
    ,
]
const validateLogin = [
    body('email').exists()
        .isEmail().withMessage('Định dạng email không hợp lệ')
    ,
    body('password')
        .exists()
        .custom((value) => {
            if (value.includes('<') || value.includes('=') || value.includes('!')) {
                throw new Error('Đừng làm như thế Man !');
            }
            return true;
        })
        .isLength({ min: 5, max: 30 }).withMessage("Mật khẩu phải từ 5-30 kí tự"),
]

middelwareForm = (req,res,next) =>{
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        res.send({ erros: erros.array() })
        return;
    }
    next();
}

validataChangePass = [
    body('password')
    .exists()
    .custom((value) => {
        if (value.includes('<') || value.includes('=') || value.includes('!')) {
            throw new Error('Đừng làm như thế Man !');
        }
        return true;
    })
    .isLength({ min: 5, max: 30 }).withMessage("Mật khẩu phải từ 5-30 kí tự"),
    
    body('newpassword')
    .exists()
    .custom((value) => {
        if (value.includes('<') || value.includes('=') || value.includes('!')) {
            throw new Error('Đừng làm như thế Man !');
        }
        return true;
    })
    .isLength({ min: 5, max: 30 }).withMessage("Mật khẩu phải từ 5-30 kí tự"),
]


router.post('/login',validateLogin,middelwareForm, (req, res) => {
  
    _service.login(req.body)
    .then(data=>{
        res.json(data);
    })
    .catch(err => res.json({success: false, data: null, message: err}))
})

router.post('/register', validaterRegister,middelwareForm, (req, res) => {
        _service.register(req.body).then(data=>{
            res.json(data)
        }).catch(err=> res.json({success: false, data: null, message: err}))
    


})

router.post('/change-pass',validataChangePass,middelwareForm,AuthorizationUser,(req,res)=>{

    _service.changePass(req).then(data=>{
        res.json(data)
    })
    .catch(err => res.json({success: false, data: null, message: err}))

  

    
})

router.get('/me',AuthorizationUser ,(req, res) => {
    let user = req.user;
    _service.repo.show(user.id).then(data=>{
        let dataRs = {
            id : data.id,
            name : data.name,
            role : data.admin,
            email : data.email,
            balance : data.balance,
            status : data.status,
            created_date : data.created_date
        }
        res.json({success: true, data: dataRs, message: "successfully"});
    }).catch(err => res.json({success: false, data: null, message: err}))

})



module.exports = router;