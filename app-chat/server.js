var app   = require('express')();
var http  = require('http').Server(app);
var io    = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  socket.on('newMessage', function(msg){
    io.emit('newMessage', msg);
    console.log('ada chat baru');
  })

  socket.on('disconnect', function(msg){
    console.log('user disconnect');
  })
})

http.listen(3000, function(){
  console.log('listening on 3000');
});