const auth = require("./passportConfig")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const loginProcedure = async (request, response, next) => {
  const { login, password } = request.body
  console.log("Loggin")
}

module.exports = { loginProcedure }