'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header ("Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); 
  next();
});

const http = require("http");

// routing for sign in 
app.get('/SignIn', function (req, res) {
   var api = require('./Controller/MedControllerAPI.js');
      api.getSignIn(req, res);
})

// routing for add data in db 
app.get('/AddData', function (req, res) {
  var api = require('./Controller/MedControllerAPI.js');
     api.getAddData(req, res);
})

// routing for get data from db 
app.get('/GetData', function (req, res) {
  var api = require('./Controller/MedControllerAPI.js');
     api.getGetData(req, res);
})
// routing for add an item in cart  
app.get('/AddToCart', function (req, res) {
  var api = require('./Controller/MedControllerAPI.js');
     api.getAddToCart(req, res);
})
// routing for remove an item from cart
app.get('/RemoveToCart', function (req, res) {
  var api = require('./Controller/MedControllerAPI.js');
     api.getRemoveToCart(req, res);
})

// creating node server for api calling
http.createServer(app).listen(6021,
  function(){
    console.log("Server listening on port 6021" );
});

