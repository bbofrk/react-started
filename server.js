
//Require our dependencies
var express= require('express'),
   exphbs = require('express-handlebars'),
   http = require('http'),
   mongoose = require('mongoose'),
   twitter = require('nttwitter'),
   routes = require('./routes'),
   config = require('./config'),
   streamHandler = require('./utils/streamHandler');

//Create an express instance and set a port varibale
var app = express();
var port = process.env.PORT || 8080;

//set handlerbars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Disable etag headers on responses
