var express = require('express');
var app = express();
// all require module come here
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var nocache = require('nocache');
var upload = require('express-fileupload');


// app setting 

app.set("view engine", "ejs");
app.set("views", "views");

// app useing constructor

app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "Porject"}));
app.use(flash());
app.use(nocache());
app.use(upload());

app.use(function(req, res, next){
	res.locals.session=req.session;
	next();
});

app.use(require("./config/routes"));
// require("./config/routes");

// create server
app.listen(process.env.PORT || 3000, function(req, res){
	console.log("Server Running");
});
