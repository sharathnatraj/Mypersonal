var express = require('express');
app = express();
bodyParser = require('body-parser');
mongoose = require('mongoose');

//getting routes
var users = require('./server/routes/user.route');
var search = require('./server/routes/search.route');



//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/mean-demo');



app.get('/', function(req,res){
	res.sendfile(__dirname+ '/client/views/index.html');
});

//setting app.use
app.use(bodyParser({limit: '100mb'}));
app.use('/js', express.static(__dirname+'/client/js'));
app.use('/css', express.static(__dirname+'/client/css'));
app.use('/images', express.static(__dirname+'/client/css/core/images'));
app.use('/views', express.static(__dirname+'/client/views'));
app.use('/routes', express.static(__dirname+'/client/routes'));
app.use('/users', users);
app.use('/search', search);

exports.dirname = __dirname;

app.listen(3000, function(){
	console.log('I am listening');
})
