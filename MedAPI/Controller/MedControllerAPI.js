var medAPIModel = require('../Model/MedAPIModel.js'); // including model js page
// Sign in controller function
exports.getSignIn = function(req, res) {
    return ( medAPIModel.loadSignIn(req, res));
}

// Add data controller function
exports.getAddData = function(req, res) {
    return ( medAPIModel.loadAddData(req, res));
}

// Get data controller function
exports.getGetData = function(req, res) {
    return ( medAPIModel.loadGetData(req, res));
}
// Add item in cart controller function
exports.getAddToCart = function(req, res) {
    return ( medAPIModel.loadAddToCart(req, res));
}
// remove an item from cart controller function
exports.getRemoveToCart = function(req, res) {
    return ( medAPIModel.loadRemoveToCart(req, res));
}

