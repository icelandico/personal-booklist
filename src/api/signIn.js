const config = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")
const auth = require("./passport")

const loginProcedure = async (request, response) => {
  const { login, password } = request.body
  const res = await auth.authentication(login)
}

module.exports = { loginProcedure }