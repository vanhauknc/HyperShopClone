module.exports = function (app){
    
    // const authCtrl = require('./api/controllers/authController');
    // app.use(`${version}/auth`, authCtrl);

    // const userCtrl = require('./api/controllers/userController');
    // app.use(`${version}/user`, userCtrl);

    const testCtrl = require('./api/controllers/testController');
    app.use('/test',testCtrl);

    const authCtrl = require('./api/controllers/authController');
    app.use('/auth',authCtrl);
}