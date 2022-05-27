const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {
  mongoose.connect(mongoURI, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to mongo successfully");
    }
  });
};

module.exports = connectToMongo;
