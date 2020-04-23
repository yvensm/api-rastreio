const express = require("express");
const bodyParser = require("body-parser");
const tackController = require("./controller/trackController");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", async (req, res) => {
    const resp = await tackController.getTrack(req.body.code);
    res.send(resp);
});


app.listen(3000);
