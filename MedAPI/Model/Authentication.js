var sql = require('mysql');
var config = {
    host: 'localhost',
    database: '883462_ahslite',
    user: 'root',
    password: '',
    port: 3306
};

function VerifyAuth(email, pass,callback) {
    var con = new sql.createConnection(config);
    callback = callback || function(){};
    var isAuth= false;
    con.connect(function (err) {
        if (err) throw err;

        con.query("SELECT `id` from user where email = '" + email + "' and password = '" + pass + "' ; ", function (err, result, fields) {

            if (err) throw err;
            //cons
            
            if (result.length > 0) {
                isAuth=true;
                return callback(isAuth);
            }
            else
                return callback(false);
        });
        con.end();
    });
}
module.exports.VerifyAuth = VerifyAuth;