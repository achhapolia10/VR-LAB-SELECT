var express           = require("express"),
    bodyParser        = require("body-parser"),
    mongoose          = require("mongoose"),
    expressSanitizer  = require("express-sanitizer"),
    methodOverride    = require("method-override");


var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(methodOverride("_method"));

app.get('/',function (req,res) {
    res.render("landing.ejs");

});
app.listen(8080,process.env.IP,function(){
    console.log("The Server has Started");
});