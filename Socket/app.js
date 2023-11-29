const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io de la Wea
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});
let waitingUser = null;
io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  if (waitingUser) {
    // Si hay un usuario esperando, agrégalo a la misma sala
    const room = `room_${waitingUser.id}_${socket.id}`;
    waitingUser.join(room);
    socket.join(room);
    io.to(room).emit('room joined', room);
    console.log("Cantidad de usuarios en sala: ", io.sockets.adapter.rooms.get(room).size);
    // Reiniciar waitingUser
    waitingUser = null;
  } else {
    // Si no hay un usuario esperando, este usuario ahora está esperando
    waitingUser = socket;
  }

  socket.on('chat message', (msg) => {
    const room = Array.from(socket.rooms)[1]; // Obtener la sala del usuario
    io.to(room).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
    console.log("Cantidad de usuarios en sala: ", io.sockets.adapter.rooms.get(room).size);
  });
});

// Puerto
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}
);