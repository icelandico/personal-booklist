const PORT = process.env.PORT || 4000
const bodyParser = require("body-parser")
const cors = require("cors")
const Register = require("./signUp")
const Login = require("./signIn")
const config = require("./config")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

config.app.use(bodyParser.json())
config.app.use(bodyParser.urlencoded({ extended: false }))
config.app.use(cors())
config.app.use(passport.initialize())

config.app.post("/api/register", Register.registerProcedure)

config.app.post("/api/login", Login.loginProcedure)

config.app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
}) 