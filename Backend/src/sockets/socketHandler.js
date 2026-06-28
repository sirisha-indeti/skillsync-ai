const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('New socket connection:', socket.id);

    socket.on('joinProject', (projectId) => {
      socket.join(`project_${projectId}`);
    });

    socket.on('leaveProject', (projectId) => {
      socket.leave(`project_${projectId}`);
    });

    socket.on('projectUpdate', (update) => {
      io.to(`project_${update.projectId}`).emit('projectUpdated', update);
    });

    socket.on('taskUpdated', (task) => {
      if (task.projectId) {
        io.to(`project_${task.projectId}`).emit('taskUpdated', task);
      }
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  });
};

export default socketHandler;
