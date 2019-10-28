var express = require('express');
var app     = express();

app.get('/', function(req, res){
  res.send('Halo semuanya');
})

app.get('/user/:nama', function(req, res){
  // res.send('Halo semuanya');
  res.send('Nama anda : ' + req.params.nama);
})


app.listen(3000);