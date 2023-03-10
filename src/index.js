const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { instrument } = require('@socket.io/admin-ui')
const io = new Server(server, {

    // admin panel
    cors: {
      origin: ["https://admin.socket.io"],
      credentials: true
    }
});

// serves index html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// serves game html
app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/game.html');
});

// serves multiplayergame html
app.get('/multiplayergame', (req, res) => {
    res.sendFile(__dirname + '/multiplayergame.html');
});

io.on("connection", (socket) => {
    socket.on("roomnumber", (roomnumber) => {
        socket.join(roomnumber);
        console.log(roomnumber);
    });
  });

// serves all files in the public folder
app.use(express.static('public'));

// logs connection
io.on('connection', (socket) => {
    console.log('a user connected');
});

// admin panel
instrument(io, {
    auth: false,
    mode: "development",
});

// starts server on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});