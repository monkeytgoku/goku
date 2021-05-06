const socketIO = require('socket.io');

const chatService = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:4200',
      methods: ['GET', 'POST'],
      allowedHeaders: ['my-custom-header'],
      credentials: true,
    },
  });

  let numberOfUsers = 0;
  io.on('connection', (socket) => {
    console.log('socket connected');
    let addedUser = false;
    socket.on('send_message', (message) => {
      console.log(socket.username);
      socket.broadcast.emit('receive_message', {
        username: socket.username,
        message: message,
      });
    });
    socket.on('user_join', (username) => {
      if (addedUser) return false;
      socket.username = username;
      console.log(`user_join: ${socket.username}`);

      numberOfUsers += 1;
      addedUser = true;
      socket.emit('login', {
        numberUsers: numberOfUsers,
      });
      socket.broadcast.emit('new_user_join', {
        username: socket.username,
        numberOfUsers: numberOfUsers,
      });
    });

    socket.on('typing', () => {
      socket.broadcast.emit('typing', {
        username: socket.username,
      });
    });

    socket.on('disconnect', () => {
      if (addedUser) numberOfUsers -= 1;
      socket.broadcast.emit('user_left', {
        username: socket.username,
        numberOfUsers: numberOfUsers,
      });
    });
  });
};

module.exports = chatService;
