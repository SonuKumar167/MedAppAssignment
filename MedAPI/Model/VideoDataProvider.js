var sql = require('mysql');
var config = {
    host: 'localhost',
    database: 'videosharing',
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

        con.query("SELECT `id`, `email`, `firstname`, `lastname`, `img` from user where email = '" + email + "' and password = '" + pass + "' ; ", function (err, result, fields) {

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

function GetPort (rname,callback) {
    var con = new sql.createConnection(config);
    var portdata=[];
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) console.log('error');
         
        con.query("select port,camport,desktopshareport from port_enable where is_enable='Y' limit 1 ; ", function (err, result) {

            if (err) console.log(err);
              if (result.length > 0) {
                portdata[0]= result[0].port;
                portdata[1]= result[0].camport;
                portdata[2]= result[0].desktopshareport;
                return callback(portdata);
             }
             
        });
        con.end();
    });
}

function GetExistingPort (rname,callback) {
    var con = new sql.createConnection(config);
    var portdata=[];
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) throw err;
         
        con.query("select port,camport,desktopshareport from port_enable where is_enable='N' and room='"+ rname +"' limit 1 ; ", function (err, result) {

            if (err) throw err;
              if (result.length > 0) {
                portdata[0]= result[0].port;
                portdata[1]= result[0].camport;
                portdata[2]= result[0].desktopshareport;
                return callback(portdata);
                }
               else 
               {
                portdata[0]= 0;
                portdata[1]= 0;
                portdata[2]= 0;
                return callback(portdata);
               }
        }); 
        con.end();
    });
}

function loadPortDisable (rname, port, callback) {
    var con = new sql.createConnection(config);
    var res='';
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) throw err;
            //console.log("Update port_enable set is_enable = 'N', room='"+ rname +"' where port="+port+" ; ");
            con.query("Update port_enable set is_enable = 'N', room='"+ rname +"' where port="+port+" ; ", function (err, result) {
           if (err) throw err;
           return callback(result);
        });
        con.end();
    });
}

function loadPortEnable (rname, port, callback) {
    var con = new sql.createConnection(config);
    var res='';
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) throw err;
        
       con.query("Update port_enable set is_enable = 'Y', room='' where port="+port+" and room='"+ rname +"' ; ", function (err, result) {
           if (err) throw err;
           return callback(result);
        });
        con.end();
    });
}

function GetCopyPort (uname,callback) {
    var con = new sql.createConnection(config);
    var portdata=0;
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) console.log('error');
         
        con.query("select port from port_copy_enable where is_enable='Y' limit 1 ; ", function (err, result) {

            if (err) console.log(err);
              if (result.length > 0) {
                portdata= result[0].port;
                return callback(portdata);
             }
             
        });
        con.end();
    });
}

function loadCopyPortDisable (uname, port, callback) {
    var con = new sql.createConnection(config);
    var res='';
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) throw err;
            //console.log("Update port_copy_enable set is_enable = 'N', user='"+ uname +"' where port="+port+" ; ");
            con.query("Update port_copy_enable set is_enable = 'N', user='"+ uname +"' where port="+port+" ; ", function (err, result) {
           if (err) throw err;
           return callback(result);
        });
        con.end();
    });
}

function loadCopyPortEnable (uname, port, callback) {
    var con = new sql.createConnection(config);
    var res='';
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) throw err;
       //console.log("Update port_copy_enable set is_enable = 'Y', user='' where port="+port+" and user='"+ uname +"' ; "); 
       con.query("Update port_copy_enable set is_enable = 'Y', user='' where port="+port+" and user='"+ uname +"' ; ", function (err, result) {
           if (err) throw err;
           return callback(result);
        });
        con.end();
    });
}

function saveVideoDetails (vname,vimagefname,vduration,ispublic,uname, callback) {
    var con = new sql.createConnection(config);
    var res='';
    callback = callback || function(){};
    con.connect(function (err) {
        if (err) throw err;
            //console.log("insert into videoupload (videoname, videoimagefilename, is_public, videoduration, videouploaduser) values ('"+ vname +"','" + vimagefname +"','" + ispublic + "',"+ vduration +",'"+ uname +"') ; ");
            con.query("insert into videoupload (videoname, videoimagefilename, is_public, videoduration, videouploaduser) values ('"+ vname +"','" + vimagefname +"','" + ispublic + "',"+ vduration +",'"+ uname +"') ; ", function (err, result) {
           if (err) throw err;
           return callback(result);
        });
        con.end();
    });
}
module.exports.GetExistingPort = GetExistingPort;
module.exports.loadPortEnable = loadPortEnable;
module.exports.loadPortDisable = loadPortDisable;
module.exports.GetPort = GetPort;
module.exports.loadCopyPortEnable = loadCopyPortEnable;
module.exports.loadCopyPortDisable = loadCopyPortDisable;
module.exports.GetCopyPort = GetCopyPort;
module.exports.saveVideoDetails = saveVideoDetails;
module.exports.VerifyAuth = VerifyAuth;