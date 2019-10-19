const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("open", () => {
    console.log("MongoDb:Connected!");
  });

  mongoose.connection.on("error", error => {
    console.log("MongoDb:Disconnected! " + error);
  });

  mongoose.Promise = global.Promise;
};
