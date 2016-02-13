




/**
 * Module dependencies.
 */

/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, home = require('./routes/home')
, http = require('http')
, path = require('path'),
session= require('client-sessions');

var app = express();

//all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'routes')));


app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}
app.get('/',function(req,res){
	res.render("signUp",{title:"Welcome"});
});
app.post('/signup',home.sign_up);

app.post('/login',home.login);
app.post('/aboutedit',function(req,res){
	res.render("about",{title:"Welcome to About Edit Page"});
});
app.post('/about',home.edit_about);
app.get('/about',home.get_about);
app.post('/interestedit',function(req,res){
	res.render("interest",{title:"Welcome to interest Edit Page"});
});

//////INTEREST
app.get('/interest',home.get_interest);
app.post('/addinterest',home.add_interest);
app.post('/removeinterest',home.remove_interest);
///////NEWS
app.post('/news',home.add_news);
app.get('/news',home.get_news);
//////////FRIENDS
app.post('/friends',function(req,res){
	res.render("friend",{title:"Friends Page"});
});
app.post('/addfriend',home.add_friend);
app.get('/friendreq',home.get_friendrequest);
app.post('/friend',home.respond_friend);
app.get('/friends',home.get_friend);
app.post('/logi',function(req,res){
	res.render('login',{title:"Welcome"});
})
//app.post('/back',function(req,res){
//	res.render("success",{user:req.session.username});
//});
//app.post('/logout',function(req,res){
	//req.session.destroy();
	//res.render("signin",{title:"Facebook"});
//});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
