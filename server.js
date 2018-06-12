// COPYRIGHT 2017 EVOSUS, INC. ALL RIGHTS RESERVED
// GOOGLE APP ENGINE DEPLOYMENT SERVER

// REQUIRE DEPENDENCIES
var express = require('express');
var subdomain = require('express-subdomain');
var router = express.Router();
var logger = require('morgan');
var path = require('path');
/*
function reqIsSecure(req) {
	const xfpHeader = req.get('x-forwarded-proto');
	return xfpHeader ? xfpHeader == 'https' : req.secure;
}
function requireHTTPS(req, res, next) {
	if ( !reqIsSecure(req) && (typeof process.env.NODE_ENV == 'undefined' || process.env.NODE_ENV !== 'development') ) {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
*/
// CREATE EXPRESS APP
var app = express();
app.use(logger('dev'));
//app.use(requireHTTPS);
// SUBDOMAIN
app.use(subdomain('*', router));
// APP DIRECTORY SETTINGS
app.set('trust proxy', true);
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/app'));
app.use('/lib', express.static(__dirname + '/node_modules'));

// EXPORT APP
module.exports = app;

require('./config/server-config.js').startServer(8001);
