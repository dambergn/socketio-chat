'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let server = http.listen(3001,() => {
  console.log('lisening on port 3001');
});

// static files
app.use(express.static('public'));

io.on('connection', socket => {
  console.log('made socket connection', socket.id);

  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });
});