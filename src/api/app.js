const express = require("express")
const app = express()
const port = 4000
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

// Create a new express application instance
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});