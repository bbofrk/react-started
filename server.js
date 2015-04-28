
//Require our dependencies
var express= require('express'),
   http = require('http');

//Create an express instance and set a port varibale
var app = express();
var port = process.env.PORT || 8080;

//Disable etag headers on responses
