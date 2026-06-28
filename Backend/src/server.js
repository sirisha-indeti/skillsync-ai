import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import socketHandler from './sockets/socketHandler.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

socketHandler(io);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
