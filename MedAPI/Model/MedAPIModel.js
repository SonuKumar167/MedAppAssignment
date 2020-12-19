

var sql = require('mysql');

var config = {
    host: 'localhost',
    database: 'medicine',
    user: 'root',
    password: 'Admin123',
    port: 3306,
    timezone: 'ist'
};
// Sign in logic
exports.loadSignIn = function (req, res) {
    var con = new sql.createConnection(config);
    con.connect(function (err) {
        if (err) throw err;
        var email = req.query.email;
        var pass = req.query.pass;
        var sqlGet = "select id, email, username from user where email = '"+email+"' and password = '"+pass+"'";
        con.query(sqlGet, function (err, result, fields) {
            if (err) throw err;
            
            if(result.length > 0){
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({ "status": 1, "msg": "Sign in success","data":result });
            }
            else{
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({ "status": 0, "msg": "Incorrect email or password"}); 
            }
        });
        con.end();
    });
    return res;
}

// Add Data Set Logic

exports.loadAddData = function (req, res) {
    var con = new sql.createConnection(config);
    con.connect(function (err) {
        if (err) throw err;
        var keyword = req.query.keyword;
        var Sno = req.query.Sno;
        var availableAt = req.query.availableAt;
        var category = req.query.category;
        var fasting = req.query.fasting;
        var itemId = req.query.itemId;
        var itemName = req.query.itemName;
        var labName = req.query.labName;
        var minPrice = req.query.minPrice;
        var objectID = req.query.objectID;
        var popular = req.query.popular;
        var testCount = req.query.testCount;
        var type = req.query.type;
        var url = req.query.url;
        var sqlAddData = "INSERT INTO `dataset`(`keyword`, `Sno`, `availableAt`, `category`, `fasting`, `itemId`, `itemName`, `labName`, `minPrice`, `objectID`, `popular`, `testCount`, `type`, `url`) VALUES ('"+keyword+"','"+Sno+"','"+availableAt+"','"+category+"','"+fasting+"','"+itemId+"','"+itemName+"','"+labName+"','"+minPrice+"','"+objectID+"','"+popular+"','"+testCount+"','"+type+"','"+url+"')";
        con.query(sqlAddData, function (err, result, fields) {
            if (err) throw err;

                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({ "status": 1, "msg": "Added Successfully" });
            
        });
        con.end();
    });
    return res;
}

// Get data logic
exports.loadGetData = function (req, res) {
    var con = new sql.createConnection(config);
    con.connect(function (err) {
        if (err) throw err;

        var sqlGet = "select * from dataset ";
        con.query(sqlGet, function (err, result, fields) {
            if (err) throw err;
            
            if(result.length > 0){
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({ "status": 1, "msg": "Data Available","data":result });
            }
            else{
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({ "status": 0, "msg": "Data not found"}); 
            }
        });
        con.end();
    });
    return res;
}
// Add an item in cart
exports.loadAddToCart = function (req, res) {
    var con = new sql.createConnection(config);
    con.connect(function (err) {
        if (err) throw err;

        var itemId = req.query.itemId;
        var userId = req.query.userId;
        var sqlGet = "INSERT INTO `cart`(`item_id`, `user__id`) VALUES ('"+itemId+"','"+userId+"')";
        con.query(sqlGet, function (err, result, fields) {
            if (err) throw err;
        
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({ "status": 1, "msg": "Added Successfully"}); 
        });
        con.end();
    });
    return res;
}
// remove an item from cart
exports.loadRemoveToCart = function (req, res) {
    var con = new sql.createConnection(config);
    con.connect(function (err) {
        if (err) throw err;

        var itemId = req.query.itemId;
        var userId = req.query.userId;
        var sqlGet = "delete from cart where item_id='"+itemId+"' and user__id='"+userId+"'";
        con.query(sqlGet, function (err, result, fields) {
            if (err) throw err;
        
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({ "status": 1, "msg": "Removed Successfully"}); 
        });
        con.end();
    });
    return res;
}