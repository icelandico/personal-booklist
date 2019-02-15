const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const { Client } = require("pg")

//const connectDb = "localhost://postgres:postgres@postgres/booktracker"
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'booktracker',
  password: 'postgres',
  port: 5432,
})

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.post("/api/login", (req, res) => {
  console.log(client)
  const { email, password } = req.body
  const INSERT_USER_QUERY = `INSERT INTO "Users" (username, password) VALUES('${email}', '${password}')`;
  client.connect((err, client) => {
    if (err) {
      return console.error(err)
    }
    client.query(INSERT_USER_QUERY);
      return res.send('SUCCESS')
  });
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})