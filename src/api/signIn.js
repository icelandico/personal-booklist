const passport = require("passport")
const config = require("./config")

config.app.use(passport.initialize())
config.app.use(passport.session())

const loginProcedure = async (request, response, next) => {
  const { login, password } = request.body
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
  })(request, response, next)
}

module.exports = { loginProcedure }