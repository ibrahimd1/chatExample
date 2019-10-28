const socketio = require("socket.io");
const redisAdapter = require("socket.io-redis");
const socketAuthorization = require("../middleware/socketAuthorization");
const io = socketio();

const socketApi = {
  io
};

//libs
const Users = require("./lib/Users");

/**
 * Redis adapter
 */

io.use(socketAuthorization);

io.adapter(
  redisAdapter({
    host: process.env.REDIS_URI,
    port: parseInt(process.env.REDIS_PORT)
  })
);

io.on("connect", socket => {
  Users.upsert(socket.id, socket.request.user);

  socket.on("disconnect", () => {
    Users.remove(socket.request.user.googleId);
  });
});

module.exports = socketApi;
