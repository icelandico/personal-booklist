const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require("passport")
const Register = require("./signUp")
const Login = require("./signIn")

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// app.post("/api/register", (req, res) => {
//   const { email, password } = req.body
//   bcrypt.hash(password, saltRounds, (err,hash) => {
//     const INSERT_USER_QUERY = `
//     INSERT INTO "Users" (username, password) VALUES('${email}', '${hash}')
//   `
//     //config.db.query(INSERT_USER_QUERY)
//     console.log(hash)
//   })
// })

app.post("/api/register", Register.registerProcedure)

app.post("/api/login", Login.loginProcedure)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
}) 