// COPYRIGHT 2016 EVOSUS, INC. ALL RIGHTS RESERVED

'use strict';

var express = require('express');
var path = require('path');
/* var logger = require('morgan'); */

// CREATE EXPRESS APP
var app = express();

/* app.use(logger('dev')); */

// APP DIRECTORY SETTINGS
// LOOKS FOR "index.html"
app.set('trust proxy',true);
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/src/app'));
app.use('/lib', express.static(__dirname + '/node_modules'));

module.exports = app;
