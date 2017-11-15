var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use(express.static(__dirname + '/public/'));
app.listen(3000);

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

router.get("/index",function(req,res){
  res.sendFile(__dirname + "/index.html");
});


router.get("/archive",function(req,res){
  res.sendFile(path + "archive.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/donate",function(req,res){
  res.sendFile(path + "donate.html");
});

router.get("/faq",function(req,res){
  res.sendFile(path + "faq.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
