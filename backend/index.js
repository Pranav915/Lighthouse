const connectToMongo = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");
const path = require("path");
require("dotenv").config();

const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "auth-token"],
  exposedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));

connectToMongo();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/", require("./routes/search"));
app.use("/api/", require("./routes/register"));
app.use("/api", require("./routes/get"));
app.use("/api/", require("./routes/profile"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
