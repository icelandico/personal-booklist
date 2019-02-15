const express = require("express")
const app = express()
const port = 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post("/api/login", (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})