var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

 app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');

});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
   io.emit('chat message', msg);
 });
});

http.listen(3001, () => {
  console.log('listening on *:3001');
});
