const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const { Client } = require("pg")
const bcrypt = require("bcrypt")
const saltRounds = 10

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Config DB
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'booktracker',
  password: 'postgres',
  port: 5432,
})

client.connect()
  .then(() => console.log("Client connected"))
  .catch("Failed to connect to DB")


app.post("/api/register", (req, res) => {
  const { email, password } = req.body
  bcrypt.hash(password, saltRounds, (err,hash) => {
    const INSERT_USER_QUERY = `
    INSERT INTO "Users" (username, password) VALUES('${email}', '${hash}')
  `
    client.query(INSERT_USER_QUERY)
  })
  console.log("User registered")
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
}) 