
module.exports = {
    api: {
        port: 8182,
        root: '',
        version: '/v1',
        env: 'dev',
        internal_token: ['ot#b{9a&ZlHbfbCU5&4)61mlroH3&gd', 'dKcWlBX89N3gClUwnUF7NGS9r1ziwgz'],
        api_uc: 'https://uwsdev.ntlogistics.vn/v1',
        // api_cp: 'https://bwsdev.ntx.com.vn/v1',
        api_cp: 'https://bwsdev.ntlogistics.vn/v1/',
        // api_ghtk
        api_ghtk: {
            url: 'https://services.ghtklab.com',
            token: 'Ed69FfE70c9aBE4CfE108249ea0012ea45c4CBd3',
        },
        api_es: {
            url: 'https://searchdev.ntlogistics.vn/v1',
            token: 'peDwCVV3tbVvCbvwKpFeNxgK788dfcGv'
            // url: 'https://search.ntlogistics.vn/v1',
            // token: '9G7V7v6UEj3VMnyEKCyGDQZMPb6tABxL',
        },
    },
    erp: {
        host: 'https://ws.ntlogistics.vn:14443/NTLIntegration/api/v1',
        vib_key: {
            client_key: 'vib',
            secret_key: 'vibYTmPngj3CxLh6gPY'
        },
        mobile_key: {
            client_key: 'mobileapp',
            secret_key: 'wY7JaAYtAqW3EjRt'
        },
    },

    // mysqldb: {
    //     host: '45.122.221.27',
    //     port: '3306',
    //     username: "ntl_billonline",
    //     dbname: "ntl_billonline",
    //     passwrd: "6xbqKszUZ+Ah2cdSm",
    // },

    // dev
    mysqldb: {
        host: '125.212.215.131',
        port: '3306',
        username: 'myntltms',
        dbname: 'ntltms_db',
        passwrd: 'KWJv89T+Zn$KX',
    },
    // local
    // mysqldb: {
    //     host: '127.0.0.1',
    //     port: '3306',
    //     username: 'myntltms',
    //     dbname: 'ntltms_db',
    //     passwrd: 'KWJv89T+Zn',
    // },
    
    mongodb: {
        // local
        // uri: 'mongodb://127.0.0.1:27017/?readPreference=primary&authSource=admin&appname=MongoDB%20Compass&ssl=false',
        //dev
        uri: 'mongodb://mongadmin:ij4W58Dxpy34%40M0nG0@125.212.215.131:27017/?readPreference=primary&authSource=admin&appname=MongoDB%20Compass&ssl=false',

        // pro
        // uri: 'mongodb://mongadmin:ij4W58Dxpy34%40M0nG0@10.0.1.22:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',

        host: '127.0.0.1',
        port: '27017',
        username: 'mongadmin',
        // dbname: 'ntldashboard_db',
        dbname: 'ntlcenter_db',
        passwrd: 'fey3yjM#pz88c5trN',
    },


    smtp_mail: {
        host: 'mail.ntlogistics.vn',
        port: 25,
        username: 'support@ntlogistics.vn',
        password: 'Nhattin@18A',
    },

    // redis dev
    redis: {
        host: '125.212.215.131',
        port: '6379',
        pwss: '28HTkcv5BzZ25CFR',
    },
    // redis local
    // redis: {
    //     host: '127.0.0.1',
    //     port: '6379',
    //     pwss: 'NTl1I2019ysHEWr',
    // },

    auth: {
        jwt: {
          secret: '0d7c5c5f-768c-4d98-8900-13aadaa21937',
        },
        resetPassword: {
          secret: '56gXxY{+D6/4m#kZ394j2=bT2eHqTAu>r8zAT>yEn:;TM#9*Vg',
          ttl: 86400 * 1000, // 1 day
          algorithm: 'aes256',
          inputEncoding: 'utf8',
          outputEncoding: 'hex',
        },
    },
  
    logger: {
        console: {
            level: 'debug',
        },
        file: {
            logDir: 'logs',
            logFile: 'system_log.log',
            level: 'debug',
            maxsize: 1024 * 1024 * 10, // 10MB
            maxFiles: 5,
        },
    },
    acceptDomain: [
        'http://localhost:4100',
        'http://localhost:4101',
        'http://localhost:3000',
        'https://tmsdev.ntlogistics.vn',
        'https://tmsdev.ntx.com.vn',
    ],
};
  