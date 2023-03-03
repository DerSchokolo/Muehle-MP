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

// serves game html
app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/game.html');
});

// serves lobby html with id of the room
app.get('/lobby:id', (req, res) => {
    console.log(req.params.id);
    res.sendFile(__dirname + '/lobby.html');
});

// serves all files in the public folder
app.use(express.static('public'));

// logs connection
io.on('connection', (socket) => {
    console.log('a user connected');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);

      console.log(msg[1])
    });
});

// starts server on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});