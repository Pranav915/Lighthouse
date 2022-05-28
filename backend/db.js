const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://rkr2137:Rahul%402137@cluster0.dtzxv.mongodb.net/Lighthouse?retryWrites=true&w=majority";

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
