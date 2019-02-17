const config = require("./config")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post("/api/register", (req, res) => {
  const { email, password } = req.body
  bcrypt.hash(password, saltRounds, (err,hash) => {
    const INSERT_USER_QUERY = `
    INSERT INTO "Users" (username, password) VALUES('${email}', '${hash}')
  `
    config.db.query(INSERT_USER_QUERY)
  })
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
}) 