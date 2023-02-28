const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// serves index html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// serves all files in the public folder
app.use(express.static('public'));

// logs connection
io.on('connection', (socket) => {
    console.log('a user connected');
});

var roomnumber = 1;
io.on('connection', function(socket){
   socket.join("room-"+roomnumber);
   //Send this event to everyone in the room.
   io.sockets.in("room-"+roomnumber).emit('connectToRoom', "You are in room no. "+roomnumber);
})

// starts server on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});