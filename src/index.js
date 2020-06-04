const express = require("express");
const bodyParser = require("body-parser");
const tackController = require("./controller/trackController");
var morgan = require("morgan");
var path = require("path");
var rfs = require("rotating-file-stream");

const app = express();

var accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  size:'500K',
  path: path.join(__dirname, "log"),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined", { stream: accessLogStream }));

app.post("/", async (req, res) => {
  const resp = await tackController.getTrack(req.body.code);
  res.send(resp);
});

app.listen(3000);
