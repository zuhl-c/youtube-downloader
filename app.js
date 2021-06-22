var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;
var bodyparser= require('body-parser');
var Process = require('./main');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

server.listen(port,function(){
    console.log('server running : '+ port);
});

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');
});

app.post('/download',async function(req,res){
    console.log(req.body);

     var url = req.body.url;
     var format = req.body.format;
     var quality = req.body.quality;

     if(format=="mp4"){
     Process.convertVideo(url,quality).then((data)=>{
          res.json(data)
    }).catch((err)=>{
          console.log(err);
      })
    }
});