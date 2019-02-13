const express = require("express")
const app = express()
const port = 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(cors())

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})