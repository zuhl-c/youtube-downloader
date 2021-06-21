var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;
var bodyparser= require('body-parser');
var Convert= require('./convert');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

server.listen(port,function(){
    console.log('server running : '+ port);
});

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');
});

app.post('/download',function(req){
    console.log(req.body);
});