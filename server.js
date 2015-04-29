// grab express
var express = require('express');

// create an express app
var app = express();

//Configuring
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
//create an express route for the home page
// http://localhot:8080
app.get('/', function(req, res){
   //render the home page and pass int he popular images
   res.render('pages/index');
   //res.sendfile('index.html');
});
app.get('/helloworld', function(req, res){
   //render the home page and pass int he popular images
   res.render('./helloworld.html');
   //res.sendfile('index.html');
});
// start the server on port 8080
app.listen(8080);
//send a message
console.log('server has started');
