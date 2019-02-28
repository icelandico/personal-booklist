const PORT = process.env.PORT || 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const Register = require("./signUp")
const Login = require("./signIn")
const config = require("./config")

config.app.use(bodyParser.json())
config.app.use(bodyParser.urlencoded({ extended: false }))
config.app.use(cors())

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

config.app.post("/api/register", Register.registerProcedure)

config.app.post("/api/login", Login.loginProcedure)

config.app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
}) 