const express = require('express');
const testService = require('../services/testService');
const router = express.Router();
const _service = new testService();

router.get('/',(req,res)=>{
    let a = _service.gettest();
    res.send({ success: false, data: a, message: "test" });
});
router.get('/get-all',(req,res)=>{
    res.send({ success: false, data: null, message: "get all" });
});

module.exports = router;

