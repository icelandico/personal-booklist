const auth = require("./passportConfig")
const passport = require("passport")

const loginProcedure = async (request, response) => {
  const { login, password } = request.body
  const res = await auth.authentication(login)
}

module.exports = { loginProcedure }